const jsname='抖音极速版'
const $ = Env(jsname)
const notify = $.isNode() ?require('./sendNotify') : '';
$.idx = ($.idx = ($.getval("dyjsbcount") || "1") - 1) > 0 ? `${$.idx + 1}` : ""; // 账号扩展字符
const signheaderArr = [],signcookieArr=[]
const stepheaderArr = [],stepkeyArr=[]
const readheaderArr = [],readkeyArr=[]
let signheader = $.getdata('signheader')
let signcookie = $.getdata('signcookie')

let stepheader = $.getdata('stepheader')
let stepkey = $.getdata('stepkey')

let readheader = $.getdata('readheader')
let readkey = $.getdata('readkey')
let dyjsbaccount = ($.getval('dyjsbaccount') || 13211048005)
let tz = ($.getval('tz') || '1');//0关闭通知，1默认开启
const invite=1;//新用户自动邀请，0关闭，1默认开启
const logs =0;//0为关闭日志，1为开启
var hour=''
var minute=''
const readbody = `{
  "in_sp_time": 0,
  "task_key": "read"
}`
if ($.isNode()) {
   hour = new Date( new Date().getTime() + 8 * 60 * 60 * 1000 ).getHours();
   minute = new Date( new Date().getTime() + 8 * 60 * 60 * 1000 ).getMinutes();
}else{
   hour = (new Date()).getHours();
   minute = (new Date()).getMinutes();
}
//CK运行

let isGetCookie = typeof $request !== 'undefined'
if (isGetCookie) {
   GetCookie();
   $.done()
} 
if ($.isNode()) {
          signheaderArr.push('_request_from=web&version_code=13.3.1&js_sdk_version=1.77.0.2&tma_jssdk_version=1.77.0.2&app_name=douyin_lite&app_version=13.3.1&vid=8E371C73-DB4B-489F-998B-CD29CF0DCA54&device_id=71012277663&channel=App%20Store&mcc_mnc=46001&aid=2329&screen_width=1125&openudid=f92904a37d5ede6801d7032f9bf11b47497dce75&cdid=B53AAE5A-E4D3-40BD-8650-C546FF123B5A&os_api=18&ac=WIFI&os_version=14.3&client_niu_ready=1&device_platform=iphone&build_number=133105&device_type=iPhone10,3&idfa=00000000-0000-0000-0000-000000000000&in_sp_time=0')
          signcookieArr.push('odin_tt=82d0968999ed50a4cb5f5c1712da5bcb9f4e20df86ec4b19faaaf7ee2342dfac486d9a62febf552ab078c0e25bbbe459; passport_csrf_token=187a6cdf915b77386ecb1fd7bca93d67; passport_csrf_token_default=187a6cdf915b77386ecb1fd7bca93d67; d_ticket=d92d9040616a7917ec11dded1d35ac9fe7297; n_mh=bRjoI2N3XukPdo-jM0hKAetcP7r0QuKIgpNiiaL6vhU; sid_guard=06ec57de00a226240db6e7c3788de78d%7C1611016513%7C5183999%7CSat%2C+20-Mar-2021+00%3A35%3A12+GMT; uid_tt=1b90d07313d9ef0c1e47dc6dedcbcbd8; uid_tt_ss=1b90d07313d9ef0c1e47dc6dedcbcbd8; sid_tt=06ec57de00a226240db6e7c3788de78d; sessionid=06ec57de00a226240db6e7c3788de78d; sessionid_ss=06ec57de00a226240db6e7c3788de78d; MONITOR_WEB_ID=71012277663')
          readheaderArr.push('version_code=13.3.1&js_sdk_version=1.77.0.2&tma_jssdk_version=1.77.0.2&app_name=douyin_lite&app_version=13.3.1&vid=8E371C73-DB4B-489F-998B-CD29CF0DCA54&device_id=71012277663&channel=App%20Store&mcc_mnc=46001&aid=2329&screen_width=1125&openudid=939b7bd6a89084a43789e69ef17b613dd4aa497b&cdid=B53AAE5A-E4D3-40BD-8650-C546FF123B5A&os_api=18&ac=WIFI&os_version=14.3&client_niu_ready=1&device_platform=iphone&build_number=133105&device_type=iPhone10,3&idfa=00000000-0000-0000-0000-000000000000')
          readkeyArr.push('{"x-tt-trace-id":"00-1822ac790a1088a95d9f4b0aba240919-1822ac790a1088a9-01","Connection":"keep-alive","Accept-Encoding":"gzip, deflate","X-SS-Cookie":"d_ticket=b16bd8fb590b0f915b7805f38186e683e7297; n_mh=bRjoI2N3XukPdo-jM0hKAetcP7r0QuKIgpNiiaL6vhU; sessionid=d5a372ce4b1c9ee4bbb1c0bd896fc363; sessionid_ss=d5a372ce4b1c9ee4bbb1c0bd896fc363; sid_guard=d5a372ce4b1c9ee4bbb1c0bd896fc363%7C1611017639%7C5184000%7CSat%2C+20-Mar-2021+00%3A53%3A59+GMT; sid_tt=d5a372ce4b1c9ee4bbb1c0bd896fc363; uid_tt=66206c4595687a7a5651bc935ae7ff90; uid_tt_ss=66206c4595687a7a5651bc935ae7ff90; passport_csrf_token=3cf503acf48f620cbf333232d7074dbb; passport_csrf_token_default=3cf503acf48f620cbf333232d7074dbb; odin_tt=35a62d574bd64707aa8d23b4de484707e43456831af4656aba7e0ac546b99c00dd3e5d4d2ff2f9d878cff28a5a167241","sdk-version":"2","Content-Type":"application/json; encoding=utf-8","x-Tt-Token":"00d5a372ce4b1c9ee4bbb1c0bd896fc363042fb399805f76ba06cb915921eab5b142e21ef979960e8b0b6f29eb719b7c07af51e6200063f3d87c7152a03fd2cb848a6c94d22625c7ba31a32f435e33207bb644b620c13e70f6954c863fc9e5f0bc9cc-1.0.1","X-SS-STUB":"FB9613E49BC1669D908E1516EBF9F7B5","X-Khronos":"1611017661","User-Agent":"AwemeLite 13.3.1 rv:133105 (iPhone; iOS 14.3; zh_CN) Cronet","tt-request-time":"1611017661184","Cookie":"odin_tt=35a62d574bd64707aa8d23b4de484707e43456831af4656aba7e0ac546b99c00dd3e5d4d2ff2f9d878cff28a5a167241; passport_csrf_token=3cf503acf48f620cbf333232d7074dbb; passport_csrf_token_default=3cf503acf48f620cbf333232d7074dbb; d_ticket=b16bd8fb590b0f915b7805f38186e683e7297; n_mh=bRjoI2N3XukPdo-jM0hKAetcP7r0QuKIgpNiiaL6vhU; sid_guard=d5a372ce4b1c9ee4bbb1c0bd896fc363%7C1611017639%7C5184000%7CSat%2C+20-Mar-2021+00%3A53%3A59+GMT; uid_tt=66206c4595687a7a5651bc935ae7ff90; uid_tt_ss=66206c4595687a7a5651bc935ae7ff90; sid_tt=d5a372ce4b1c9ee4bbb1c0bd896fc363; sessionid=d5a372ce4b1c9ee4bbb1c0bd896fc363; sessionid_ss=d5a372ce4b1c9ee4bbb1c0bd896fc363","Host":"aweme.snssdk.com","passport-sdk-version":"5.12.1","X-Tyhon":"rR1lTa52bnCqJ3FYjzNhQ6sxFHOvCmJJ8ip+QtE=","X-Gorgon":"8404e0511000db6ee0a55344092b1fc0f0fe9033eb748b81e105","Accept":"application/json","Content-Length":"45"}')
    console.log(`============ 脚本执行-国际标准时间(UTC)：${new Date().toLocaleString()}  =============\n`)
    console.log(`============ 脚本执行-北京时间(UTC+8)：${new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toLocaleString()}  =============\n`)
 } else {
    signheaderArr.push($.getdata('signheader'))
    signcookieArr.push($.getdata('signcookie'))
    stepheaderArr.push($.getdata('stepheader'))
    stepkeyArr.push($.getdata('stepkey'))
    readheaderArr.push($.getdata('readheader'))
    readkeyArr.push($.getdata('readkey'))
    let dyjsbcount = ($.getval('dyjsbcount') || '1');
  for (let i = 2; i <= dyjsbcount; i++) {
    signheaderArr.push($.getdata(`signheader${i}`))
    signcookieArr.push($.getdata(`signcookie${i}`))
    stepheaderArr.push($.getdata(`stepheader${i}`))
    stepkeyArr.push($.getdata(`stepkey${i}`))
    readheaderArr.push($.getdata(`readheader${i}`))
    readkeyArr.push($.getdata(`readkey${i}`))
  }
}
!(async () => {
if (!signheaderArr[0]) {
    $.msg($.name, '【提示】请先获取抖音极速版一cookie')
    return;
  }
   console.log(`------------- 共${signheaderArr.length}个账号----------------\n`)
  for (let i = 0; i < signheaderArr.length; i++) {
    if (signheaderArr[i]) {
      message = ''
      signheader = signheaderArr[i];
      signcookie = signcookieArr[i];
      stepheader = stepheaderArr[i];
      stepkey = stepkeyArr[i];
      readheader = readheaderArr[i];
      readkey = readkeyArr[i];
      $.index = i + 1;
      console.log(`\n开始【抖音极速版${$.index}】`)
      //await invite()
      await sign_in()
      //await withdraw()
      //await step_reward()
      await watch_video()
      await control()
      //await profit()
      await showmsg()
  }
 }
})()
    .catch((e) => $.logErr(e))
    .finally(() => $.done())
function GetCookie() {
 if($request&&$request.url.indexOf("aweme" && "sign_in")>=0) {
  const signheader = $request.url.split(`?`)[1]
    if (signheader) $.setdata(signheader,`signheader${$.idx}`)
    $.log(`[${jsname}] 获取sign请求: 成功,signheader: ${signheader}`)
    $.msg(`获取signheader: 成功🎉`, ``)
   const signcookie = $request.headers['Cookie']
  if(signcookie)        $.setdata(signcookie,`signcookie${$.idx}`)
    $.log(`[${jsname}] 获取sign请求: 成功,signcookie: ${signcookie}`)
    $.msg(`获取signcookie: 成功🎉`, ``)
 }
 if($request&&$request.url.indexOf("aweme" && "step_submit")>=0) {
	  const stepheader = $request.url.split(`?`)[1]
	    if (stepheader) $.setdata(stepheader,`stepheader${$.idx}`)
	    $.log(`[${jsname}] 获取step请求: 成功,stepheader: ${stepheader}`)
	    $.msg(`获取stepheader: 成功🎉`, ``)
	   const stepkey = JSON.stringify($request.headers)
	  if(stepkey)        $.setdata(stepkey,`stepkey${$.idx}`)
	    $.log(`[${jsname}] 获取step请求: 成功,stepkey: ${stepkey}`)
	    $.msg(`获取stepkey: 成功🎉`, ``)
	 }
 if($request&&$request.url.indexOf("aweme" && "done/read")>=0) {
	  const readheader = $request.url.split(`?`)[1]
	    if (readheader) $.setdata(readheader,`readheader${$.idx}`)
	    $.log(`[${jsname}] 获取read请求: 成功,readheader: ${readheader}`)
	    $.msg(`获取readheader: 成功🎉`, ``)
	   const readkey = JSON.stringify($request.headers)
	  if(readkey)        $.setdata(readkey,`readkey${$.idx}`)
	    $.log(`[${jsname}] 获取read请求: 成功,readkey: ${readkey}`)
	    $.msg(`获取readkey: 成功🎉`, ``)
	 }
    }
async function control(){
     if(hour == 12 && minute <= 30){
      await step_submit();
      await step_reward();
     }
     if(invite == 1){
      await invitation();
     }
     if(dyjsbaccount){
      await profit()
     }
}
//签到
function sign_in() {
return new Promise((resolve, reject) => {
  let sign_inurl ={
    url: `https://api5-normal-lite-act-lq.amemv.com/luckycat/aweme/v1/task/done/sign_in?${signheader}`,
    headers :{
    	Cookie: signcookie,
    	'User-Agent':'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.12 (KHTNL, like Gecko) Mobile/15E148'
    }
}
   $.post(sign_inurl,(error, response, data) =>{
     const result = JSON.parse(data)
       if(logs) $.log(data)
          message += '📣签到\n'
      if(result.err_no == 10006) {
          message += result.err_tips+'\n'
      }else{
          message +='⚠️异常'+result.err_tips+'\n'
           }
          resolve()
    })
   })
  } 
//提交步数
function step_submit() {
const steps = Math.round(Math.random()*(12000 - 10001) + 10001);
const time = Math.round(new Date().getTime()/1000).toString();
return new Promise((resolve, reject) => {
  let step_submiturl ={
	url: `https://api5-normal-lite-act-lq.amemv.com/luckycat/aweme/v1/task/walk/step_submit?${stepheader}`,
    headers: JSON.parse(stepkey),
    body:`{
  "step" : ${steps},
  "submit_time" :${time},
  "in_sp_time" : 0
}`
}

   $.post(step_submiturl,(error, response, data) =>{
     const result = JSON.parse(data)
      if(logs) $.log(data)
      message += '📣提交步数\n'
      if(result.err_no == 0) {
           message += result.err_tips+"今日步数:"+result.data.today_step+'\n'
       }else{
    	   message += '⚠️异常'+result.err_tips+'\n'
       }
          resolve()
    })
   })
  } 
//获取走路金币
function step_reward() {
return new Promise((resolve, reject) => {
  let step_rewardurl ={
      url: `https://api5-normal-lite-act-lq.amemv.com/luckycat/aweme/v1/task/walk/receive_step_reward?${stepheader}`,
      headers: JSON.parse(stepkey),
	  body:`{"in_sp_time":0}`
}
   $.post(step_rewardurl,(error, response, data) =>{
     const result = JSON.parse(data)
     if(logs) $.log(data)
     message += '📣获取奖励\n'
     if(result.err_no == 0) {
          message += result.err_tips+"获得:"+result.data.reward_amount+'\n'
      }else{
   	   message += '⚠️异常'+result.err_tips+'\n'
      }
         resolve()
   })
  })
 } 
//看视频
function watch_video() {
return new Promise((resolve, reject) => {
  let watch_videourl ={
    url: `https://api5-normal-lite-act-lq.amemv.com/luckycat/aweme/v1/task/done/read?${readheader}`,
    headers: JSON.parse(readkey),
    body: `{
  "in_sp_time" : 0,
  "task_key" : "read"
}`
}
   $.post(watch_videourl,(error, response, data) =>{
     const result = JSON.parse(data)
       if(logs) $.log(data)
       message += '📣看视频\n'
      if(result.err_no == 0) {
          message +='🎉'+result.err_tips+'获得:'+result.data.score_amount+"\n"
        }
      else if(result.err_no == 10006){
          message += '⚠️异常:已经读过了\n'
      }
      else{
          message += '⚠️异常:'+result.err_tips+'\n'+'请重新获取readkey\n'
          let other = '⚠️异常:'+result.err_tips+'请重新获取readkey\n'
          $.msg(jsname,'',other)
      }
          resolve()
    })
   })
  } 
function invitation() {
return new Promise((resolve, reject) => {
  let invitatonurl ={
    url: `https://api5-normal-lite-act-lq.amemv.com/luckycat/aweme/v1/task/done/post_invite_code?${signheader}`,
    headers: JSON.parse(readkey),
    body: JSON.stringify({"in_sp_time":0,"invite_code":"8025524531"})
}

   $.post(invitatonurl,(error, response, data) =>{
     const result = JSON.parse(data)
          resolve()
    })
   })
  } 
//profit page
function profit() {
return new Promise((resolve, reject) => {
  let profiturl ={
    url: `https://api5-normal-lite-act-lq.amemv.com/luckycat/aweme/v1/wallet/profit_detail_page?income_type=1&offset=0&num=50&share_page=profits_detail_page&key=coin&${stepheader}`,
    headers: JSON.parse(readkey),
}
   $.get(profiturl,async(error, response, data) =>{
     const result = JSON.parse(data)
     if(logs) $.log(data)
     let time = Math.round(new Date(new Date().toLocaleDateString()).getTime()/1000)
if(!result.data.profit_detail.cash_income_list.find(item => item.time >= time) && !result.data.profit_detail.cash_income_list.find(item => item.task_id == "213") && result.data.income_data.cash_balance >= 30){
     await withdraw()
     }
          resolve()
    })
   })
  } 
//withdraw alipay 0.3
function withdraw() {
return new Promise((resolve, reject) => {
  let withdrawurl ={
    url: `https://api5-normal-lite-act-lq.amemv.com/luckycat/aweme/v1/wallet/take_cash?task_key=jiao_take_cash&${signheader}`,
    headers: JSON.parse(readkey),
    body: `{
  "account" : "${dyjsbaccount}",
  "is_auto" : false,
  "take_cash_type" : 3,
  "tab_type" : "alipay",
  "in_sp_time" : 0,
  "cash_amount" : -30,
  "name" : ""
}`
}

   $.post(withdrawurl,(error, response, data) =>{
     const result = JSON.parse(data)
     if(logs) $.log(data)
     if(result.err_no == 0){
     console.log(result.err_tips+'提现0.3元\n')
     message += result.err_tips+'提现0.3元\n'
     }else{
     console.log(result.err_tips)
     }
          resolve()
    })
   })
  }
async function showmsg(){
if(tz==1){
    if ($.isNode()){
    if ((hour == 12 && minute <= 20) || (hour == 23 && minute >= 40)) {
       await notify.sendNotify($.name,message)
     }
   }else{
    if ((hour == 12 && minute <= 20) || (hour == 23 && minute >= 40)) {
       $.msg(jsname,'',message)
}
}
   }else{
       $.log(message)
    }
 }

function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
