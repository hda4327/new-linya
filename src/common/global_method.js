//算出参数给定的时间(例：'2020-03-03 09:32:14')与现在的时间差，以文字形式描述
const getDateDiff = (time)=>{
    var dateTimeStamp = new Date(time).getTime();
    var minute = 1000 * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var halfamonth = day * 15;
    var month = day * 30;
    var now = new Date().getTime();
    var diffValue = now - dateTimeStamp;
    if(diffValue < 0){return;}
    var monthC =diffValue/month;
    var weekC =diffValue/(7*day);
    var dayC =diffValue/day;
    var hourC =diffValue/hour;
    var minC =diffValue/minute;
    var result;
    if(monthC>=1){
        result="" + parseInt(monthC) + "月前";
    }
    else if(weekC>=1){
        result="" + parseInt(weekC) + "周前";
    }
    else if(dayC>=1){
        result=""+ parseInt(dayC) +"天前";
    }
    else if(hourC>=1){
        result=""+ parseInt(hourC) +"小时前";
    }
    else if(minC>=1){
        result=""+ parseInt(minC) +"分钟前";
    }else
        result="刚刚";
    return result;
}

// 匹配出手机号
const checkTel = function (str)
{
    let phone = [];
    let arrPhone = str.match(/((((13[0-9])|(15[^4])|(18[0,1,2,3,5-9])|(17[0-8])|(147))\d{8})|((\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}))?/g);
    arrPhone.forEach((v,index) => {
        if(v != ""){
            phone.push(v);
        }
    });
    return phone

};
const getOnePhone = function(str){
    let infoPhone = str.split('||')[0];
    let phone = checkTel(infoPhone);
    let onePhone = phone.length?phone[0]:infoPhone;
    return onePhone
}


export default {
    getDateDiff, checkTel, getOnePhone

}