//独立COOKIE文件     ck在``里面填写，多账号换行
let iboxpayheaderVal= `{"Connection":"keep-alive","Accept-Encoding":"gzip, deflate, br","version":"1.4.4","mchtNo":"100529600058887","Content-Type":"application/json; charset=utf-8","source":"VEISHOP_APP_IOS","shopkeeperId":"1148855820752977920","User-Agent":"VeiShop, 1.4.4 (iOS, 14.4, zh_CN, Apple, iPhone, 1CC223A6-BB53-47A6-9091-AF666380AF50)","token":"5fc5de789d5f4246ad0e0ef0742829cc","X-User-Agent":"VeiShop, 1.4.4 (iOS, 14.4, zh_CN, Apple, iPhone, 1CC223A6-BB53-47A6-9091-AF666380AF50)","traceid":"313487898693367808001612130775347a4b888dea4b8","Host":"veishop.iboxpay.com","Accept-Language":"zh-Hans;q=1","Accept":"*/*"}`
let refreshtokenVal= `35a8a99abc9e4235809a7153ce20f6f5`


let iboxpaycookie = {
  iboxpayheaderVal: iboxpayheaderVal,  
  refreshtokenVal: refreshtokenVal,  
  
}

module.exports =  iboxpaycookie
