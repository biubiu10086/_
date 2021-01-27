//独立COOKIE文件     ck在``里面填写，多账号换行
let iboxpayheaderVal= `{"Connection":"keep-alive","Accept-Encoding":"gzip, deflate, br","version":"1.4.4","mchtNo":"100529600058887","Content-Type":"application/json; charset=utf-8","source":"VEISHOP_APP_IOS","shopkeeperId":"1148855820752977920","User-Agent":"VeiShop, 1.4.4 (iOS, 14.3, zh_CN, Apple, iPhone, 1CC223A6-BB53-47A6-9091-AF666380AF50)","token":"477d38c1aeea438cb4bad3c7291bcc01","X-User-Agent":"VeiShop, 1.4.4 (iOS, 14.3, zh_CN, Apple, iPhone, 1CC223A6-BB53-47A6-9091-AF666380AF50)","traceid":"31348789869336780800161171877931300002bfa26fc","Host":"veishop.iboxpay.com","Accept-Language":"zh-Hans;q=1","Accept":"*/*","Content-Length":"753"}`



let iboxpaycookie = {
  iboxpayheaderVal: iboxpayheaderVal,  
  
}

module.exports =  iboxpaycookie
