let JxncTokens = [
  '{"farm_jstoken":"4e27195e3e410574d51e353aa23279a2","phoneid":"4205eec8e14b0e8db899b82fdef6ad2827a1e6a2","timestamp":"1612597062572","pin":"jd_472e321eb969d"}',//账号一的京喜农场token
  '{"farm_jstoken":"fb117d8436adf117cb90d8eacdccc33a","phoneid":"4205eec8e14b0e8db899b82fdef6ad2827a1e6a2","timestamp":"1612597142271","pin":"1741229517-729387"}',//账号二的京喜农场token
]
// 判断github action里面是否有京喜农场 token 
if (process.env.JXNCTOKENS) {
  if (process.env.JXNCTOKENS.indexOf('&') > -1) {
    console.log(`您的京喜农场 token 选择的是用&隔开\n`)
    JxncTokens = process.env.JXNCTOKENS.split('&');
  } else if (process.env.JXNCTOKENS.indexOf('\n') > -1) {
    console.log(`您的京喜农场 token 选择的是用换行隔开\n`)
    JxncTokens = process.env.JXNCTOKENS.split('\n');
  } else {
    JxncTokens = process.env.JXNCTOKENS.split();
  }
} else if (process.env.JD_COOKIE) {
  console.log(`由于您环境变量里面未提供 tokens，当种植 APP 种子时，将不能正常进行任务，请提供 token 或 种植非 APP 种子！`)
}
for (let i = 0; i < JxncTokens.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['JXNCTOKEN' + index] = JxncTokens[i];
}
