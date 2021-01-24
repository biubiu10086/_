//独立COOKIE文件     ck在``里面填写，多账号换行
let flwurlVal= `https://passport.fanli.com/mobileapi/v4/user/getUserInfo?ref=&userid=245698306&verify_code=5cb1e6e0380bd3918d39435cd2c52b3c&c_src=1&c_v=7.16.19.1&c_aver=1.0&devid=63694532090678&abtest=63809_b-320_a-154_b-752_i-124_b-316_b-8_e-140_b-22_a-708_b-104_a-1170_a-598_a-104_b-86_b-12_b-6_b-34_t-2_c-10_a-84_a-16_b-2_a-30_b-4_a-2_b-852e`
let flwheaderVal= `{"Accept-Encoding":"gzip, deflate, br","Cookie":"__fl_trace_cpc=962BEC97-0845-4E7E-81F9-C3B98EAECE24; PHPSESSID=5cb1e6e0380bd3918d39435cd2c52b3c; story57007=1; __fl_trace_cnpc=7929D4B9-E313-46A5-8DB0-67641CE04150; __utmt=36128d-37160d-46553b-48835b-50148b-53691b-54682a-55010b-55168c-57109c-60078b-60857a-61189b-61208b-66582t-72211b-72720b-72750b-75425b-76428b-77468b-77476a-77533b-78569b-78571a-79009a-79092a-79098b; FirstUrl=//m.fanli.com/; LandingUrl=https%3A//daren.fanli.com/haowu%3Fspm%3Dpage_name.h5.pty-hwrk%7Eloc-dbbar001%7Estd-190716%26devid%3D63694532090678%26c_aver%3D1.0%26c_src%3D1%26c_v%3D7.16.19.1%26c_nt%3Dcell%26abtest%3D61747_d-26_d-2036_b-320_a-154_b-752_i-124_b-210_c-84_b-22_b-8_e-140_b-22_a-708_b-104_a-12_a-1154_b-4_a-2_b-580_e-16_a-104_b-86_b-12_b-6_b-34_t-2_c-2_b-8_a-84_a-16_b-2_a-24_a-6_b-4_a-2_b-a451%26ci%3D%257B%255C%2522ud%255C%2522%253A%255C%2522from%253Ddb%2526local%253Dbrick_hp_c_bar%2526id%253D1463%2526id_type%253Dbar%2526abtest_group%253D%2526abtest_activity%253D68225_a%2526dpt%253D4%25252F5%255C%2522%257D%23/posts/0/1; __utmv=83FA0A1B-550C-4B19-88E1-C534633A5CBB; loginverify=3764f512a5433049; prolong=1611486322; prouserid=245698306; prousername=1321104800520181115953; prousernameutf=1321104800520181115953; __utmo=69731690.973760634.997288004; __utmp=69731690.973760634.3659469634","Connection":"keep-alive","Accept":"application/json, text/javascript, */*; q=0.01","Referer":"https://huodong.fanli.com/sign53023?devid=63694532090678&c_aver=1.0&c_src=1&c_v=7.16.19.1&c_nt=cell&abtest=61747_d-26_d-2036_b-320_a-154_b-752_i-124_b-210_c-84_b-22_b-8_e-140_b-22_a-708_b-104_a-12_a-1154_b-4_a-2_b-580_e-16_a-104_b-86_b-12_b-6_b-34_t-2_c-2_b-8_a-84_a-16_b-2_a-24_a-6_b-4_a-2_b-a451&ci=%7B%5C%22ud%5C%22%3A%5C%22from%3Ddb%26local%3Dbrick_hp_c_bar%26id%3D1637%26id_type%3Dbar%26abtest_group%3D%26abtest_activity%3D68415_b%26dpt%3D5%252F5%5C%22%7D","Host":"huodong.fanli.com","User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Fanli/7.16.19.1 (ID:1-245698306-63694532090678-17-0; WVC:WK; SCR:1125*2436-3.0)","f-refer":"wv_h5","Accept-Language":"zh-cn","X-Requested-With":"XMLHttpRequest"}`
let flwspbodyVal= `content=pxUCN8pFFs9Nr1CvMJZZYi9FGEeUU%2BUvAudcjZamyYp%2B15Mmq2oTNHBDI1jXLur%2BtjLbfESUQws4rf1KRM3B5P%2BgS9zggeJWaPPD0SBAqIkcss3qOQlhUHIa8WisT5qHMXxHLIB9C%2BPIyE0Nt082t8%2FAezxO3BfXZ1DhBtdrpAriyE7z6Yc3a9DqvNt2Z27vLFzyyx5D5qAKbT%2FHeCB%2Fc9GrQH5wVNQNrY9dcCxIV3lWMn3Ecb0Sn%2FWQdm98%2BRK0mpVPb%2BuvjzJSltxPA7u8k8t8AAQUyoMtCQ2Pp3bYX6lHvtX0Ka5mRQ%3D%3D`
let flwqwbodyVal= `content=pxUCN8pFFs9Nr1CvMJZZYtcfNbpfMbjRAudcjZamyYp%2B15Mmq2oTNJ21fHL15tpxlY5tXhtV04aXb2qz0YSZW7ErV4WmsrWH5JsBDz3VLYg5MgeAcNNI8S%2B6UtsZMVHoB5q6anyDtOxODf5kRumvJeUkwv%2FfVTgH5FFrRNQB9hMglI7Qq4MzmRjSkMS8lfNtn74r0ot0Ii48ZmYPyR0X20qatW%2BEBp9bsuENAl2cWW%2BuTC2TbdaxtOtqtDO%2FBQx5eh4GLgVxF7JI2oiPKOZ3OiJbdzw1Ax2NxGX%2B%2FRSlDBY%3D`



let flwcookie = {
  flwurlVal: flwurlVal,  
  flwheaderVal: flwheaderVal,  
  flwspbodyVal: flwspbodyVal, 
  flwqwbodyVal: flwqwbodyVal, 


}

module.exports =  flwcookie
