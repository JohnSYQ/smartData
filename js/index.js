window.onload = function () {
    function $(id) {
        return document.getElementById(id);
    }

    setInterval(time,1000);
    time();

    function time() {
        var myTime = new Date();
        var apm = "am"; //默认显示上午
        var hours = myTime.getHours();
        var min = myTime.getMinutes();
        var sec = myTime.getSeconds();
        var week = "&nbsp;&nbsp;" + toWeek(myTime.getDay());
        if(hours > 12){
            // hours = hours - 12;
            apm = "pm";
        }
        var str = "";
        str += myTime.getFullYear() + "/";
        str += (myTime.getMonth() + 1) + "/";
        str += myTime.getDate();
        $("time").innerHTML = convert(hours) + ":" + convert(min) + ":" +
            convert(sec);
        $("date").innerHTML = str + "&nbsp;&nbsp;" + apm +"&nbsp;"+ week;
    }

    function toWeek(n) {
        var str = "周";
        switch (n) {
            case  0 : str += "日";break;
            case  1 : str += "一";break;
            case  2 : str += "二";break;
            case  3 : str += "三";break;
            case  4 : str += "四";break;
            case  5 : str += "五";break;
            case  6 : str += "六";break;
            default : str += "";
        }
        return str;
    }
    function convert(num) {
        if(num < 10){
            return "0" + num;
        }else{
            return num;
        }
    }

}
