// Depends on tencentcloud-sdk-nodejs version 4.0.3 or higher
const tencentcloud = require("tencentcloud-sdk-nodejs");
const fs = require('fs')
const yaml = require('js-yaml');

const ScfClient = tencentcloud.scf.v20180416.Client;

const clientConfig = {
  credential: {
    secretId: process.env.TENCENT_SECRET_ID,
    secretKey: process.env.TENCENT_SECRET_KEY,
  },
  region: process.env.TENCENT_REGION, // 区域参考，https://cloud.tencent.com/document/product/583/17299
  profile: {
    httpProfile: {
      endpoint: "scf.tencentcloudapi.com",
    },
  },
};
const sleep = ms => new Promise(res => setTimeout(res, ms));
!(async () => {
  const client = new ScfClient(clientConfig);

  let params
  await client.ListFunctions({}).then(
    async (data) => {
      let func = data.Functions.filter(vo=>vo.FunctionName===process.env.TENCENT_FUNCTION_NAME)
      const file_buffer  = fs.readFileSync('./myfile.zip');
      const contents_in_base64 = file_buffer.toString('base64');
      if(func.length){
        console.log(`函数已存在，去更新函数`)
        // 更新代码
        params = {
          "Handler": "index.main_handler",
          "FunctionName": process.env.TENCENT_FUNCTION_NAME,
          "ZipFile": contents_in_base64
        };
        await client.UpdateFunctionCode(params).then(
          (data) => {
            console.log(data);
          },
          (err) => {
            console.error("error", err);
          }
        );
      } else{
        console.log(`函数不存在，去创建函数`)
        params = {
          "Code": {
            "ZipFile": contents_in_base64
          },
          "FunctionName": process.env.TENCENT_FUNCTION_NAME,
          "Runtime": "Nodejs12.16"
        };
        await client.CreateFunction(params).then(
          (data) => {
            console.log(data);
          },
          (err) => {
            console.error("error", err);
          }
        );
        // await sleep(1000*100) // 等待100秒
      }
      await sleep(1000*100) // 等待100秒
    },
    (err) => {
      console.error("error", err);
    }
  );

  console.log(`更新环境变量`)
  // 更新环境变量
  let inputYML = '.github/workflows/deploy_tencent_scf.yml';
  let obj = yaml.load(fs.readFileSync(inputYML, {encoding: 'utf-8'}))

  let L_env = [
    "JD_COOKIE",
    "JD_DEBUG",
    "JD_USER_AGENT",
    "TENCENTSCF_SOURCE_TYPE",
    "TENCENTSCF_SOURCE_URL",
    "PUSH_KEY",
    "BARK_PUSH",
    "BARK_SOUND",
    "TG_BOT_TOKEN",
    "TG_USER_ID",
    "DD_BOT_TOKEN",
    "DD_BOT_SECRET",
    "QYWX_KEY",
    "IGOT_PUSH_KEY",
    "QQ_SKEY",
    "QQ_MODE",
    "PUSH_PLUS_TOKEN",
    "PUSH_PLUS_USER",
    "TG_PROXY_HOST",
    "TG_PROXY_PORT",
    "FRUITSHARECODES",
    "PETSHARECODES",
    "PLANT_BEAN_SHARECODES",
    "SUPERMARKET_SHARECODES",
    "DDFACTORY_SHARECODES",
    "DREAM_FACTORY_SHARE_CODES",
    "JDZZ_SHARECODES",
    "JDJOY_SHARECODES",
    "BOOKSHOP_SHARECODES",
    "JD_CASH_SHARECODES",
    "JXNC_SHARECODES",
    "JDSGMH_SHARECODES",
    "JDNIAN_SHARECODES",
    "JDSXSY_SHARECODES",
    "JD_BEAN_STOP",
    "JD_BEAN_SIGN_STOP_NOTIFY",
    "JD_BEAN_SIGN_NOTIFY_SIMPLE",
    "PET_NOTIFY_CONTROL",
    "FRUIT_NOTIFY_CONTROL",
    "JD_JOY_REWARD_NOTIFY",
    "JOY_FEED_COUNT",
    "JOY_HELP_FEED",
    "JOY_RUN_FLAG",
    "JOY_TEAM_LEVEL",
    "JOY_RUN_NOTIFY",
    "JD_JOY_REWARD_NAME",
    "MARKET_COIN_TO_BEANS",
    "MARKET_REWARD_NOTIFY",
    "JOIN_PK_TEAM",
    "SUPERMARKET_UPGRADE",
    "BUSINESS_CIRCLE_JUMP",
    "SUPERMARKET_LOTTERY",
    "FRUIT_BEAN_CARD",
    "UN_SUBSCRIBES",
    "UN_BIND_CARD_NUM",
    "UN_BIND_STOP_CARD",
    "JDJOY_HELPSELF",
    "JDJOY_APPLYJDBEAN",
    "BUY_JOY_LEVEL",
    "MONEY_TREE_SELL_FRUIT",
    "FACTORAY_WANTPRODUCT_NAME",
    "JXNCTOKENS",
    "JD_IMMORTAL_LATLON",
    "JD_WECHAT_USER_AGENT",
    "DREAMFACTORY_FORBID_ACCOUNT",
    "JDFACTORY_FORBID_ACCOUNT"
  ] 

  let vars = []
  for(let key in process.env){
    if(process.env[key]!=='' && L_env.includes(key))
      vars.push({
        "Key": key,
        "Value": process.env[key]
      })    
      // console.log(`in L_env is=${key}:${process.env[key]}`)  //debug
  }

  console.log(`您一共填写了${vars.length}个环境变量`)
  params = {
    "FunctionName": process.env.TENCENT_FUNCTION_NAME,
    "Environment": {
      "Variables": vars
    }
  };
  await client.UpdateFunctionConfiguration(params).then(
    (data) => {
      console.log(data);
    },
    (err) => {
      console.error("error", err);
    }
  );
  let triggers = []
  params = {
    "FunctionName": process.env.TENCENT_FUNCTION_NAME,
  }
  await client.ListTriggers(params).then(
    (data) => {
      console.log(data);
      triggers = data.Triggers
    },
    (err) => {
      console.error("error", err);
    }
  );
  for(let vo of triggers){
    params = {
      "FunctionName": process.env.TENCENT_FUNCTION_NAME,
      "Type": "timer",
      "TriggerName": vo.TriggerName
    }
    await client.DeleteTrigger(params).then(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.error("error", err);
      }
    );
  }
  // 更新触发器
  console.log(`去更新触发器`)
  inputYML = 'serverless.yml';
  obj = yaml.load(fs.readFileSync(inputYML, {encoding: 'utf-8'}))
  for(let vo of obj.inputs.events){
    let param = {
      "FunctionName": process.env.TENCENT_FUNCTION_NAME,
      "TriggerName": vo.timer.parameters.name,
      'Type' : "timer",
      'TriggerDesc' : vo.timer.parameters.cronExpression,
      'CustomArgument' : vo.timer.parameters.argument,
      'Enable' : "OPEN",
    }
    await client.CreateTrigger(param).then(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.error("error", err);
      }
    );
  }

})()
  .catch((e) => console.log(e))
  .finally(async () => {
  })
