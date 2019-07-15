var myUrl="http://eco.ahau.edu.cn";//服务器地址
//var myUrl="http://127.0.0.1";//服务器地址
//文本格式转换
function myFormatJson(myJsonStr) {
        var myFormatJsonStr = "";
        myJsonStr = myJsonStr.replace(/\□/g, ":");
        myJsonStr = myJsonStr.replace(/\■/g, ";");
        myJsonStr = myJsonStr.replace(/\☆/g, "\"");
        myJsonStr = myJsonStr.replace(/\★/g, "'");
        myJsonStr = myJsonStr.replace(/\△/g, "</");
        myJsonStr = myJsonStr.replace(/\▲/g, "/>");
        myJsonStr = myJsonStr.replace(/\○/g, "<");
        myJsonStr = myJsonStr.replace(/\●/g, ">");
        myJsonStr = myJsonStr.replace(/\◇/g, "\r");
        myJsonStr = myJsonStr.replace(/\◆/g, "\n");
        myJsonStr = myJsonStr.replace(/\◎/g, ",");
        myJsonStr = myJsonStr.replace(/\♂/g, "[");
        myJsonStr = myJsonStr.replace(/\♀/g, "]");
        myJsonStr = myJsonStr.replace(/\¤/g, "&");

        myFormatJsonStr = myJsonStr;

        return myFormatJsonStr;
    }

//截取字符串将标题以固定字数显示
function cutString(myTitle, myCount) {
    if (myTitle.length > myCount) {
        myTitle = myTitle.substring(0, myCount) + "...";
    }
    return myTitle;
}

function cutTime(myTime, myCount) {
    if (myTime.length > myCount) {
        myTime = myTime.substring(0, myCount);
    }
    return myTime;
}
function cutContent(myContent, myCount) {
    if (myContent.length > myCount) {
        myContent = myContent.substring(0, myCount)+ "...";
    }
    return myContent;
}
function ListInit() {
         TzggInit(); 
         ZcfgInit(); 
         HongInit(); 
         HeiInit();
    }

    /* 通知公告 */
function TzggInit() {
    $.ajax({
        url: myUrl+"/syqtsj/index.php/Tzgg/getTzgg?status=2&rows=5&callback=jsonp",
        type: "POST",
        dataType: "jsonp",
        error: function () {
            alert("通知公告服务加载错误");
        },
        success: function (data) {
        	console.log(data);
            showTzgg(data);
        }
    })
}
function showTzgg(data) {
    var myhtml = '';
    for (var i = 0; i < 5; i++) {
        var myTitle = data.rows[i].title;
        var myId = data.rows[i].id;
        var myWriteTime = data.rows[i].writeTime; 
        myhtml += '<li class="list-group-item">' 
        	+ '<span class="glyphicon glyphicon-chevron-right">' 
        	+ '</span>'
        	+ '<a href="thirdPages/TzggDetail.html?id=' + myId + '" target="_blank">'
        + cutString(myTitle, 13) + '<span style="color:black;float:right;font-size:12px">' 
            + '<span class="time">'+myWriteTime+'</span>' + '</span></p>' + '</a></p></li>';
    }
    document.getElementById("Tzgg").innerHTML = myhtml;
}
function ZcfgInit() {
    $.ajax({
        url: myUrl+"/syqtsj/index.php/Zcfg/getZcfg?status=2&rows=7&callback=jsonp",
        type: "POST",
        dataType: "jsonp",
        error: function () {
            alert("通知公告服务加载错误");
        },
        success: function (data) {
        	console.log(data);
            showZcfg(data);
        }
    })
}
function showZcfg(data) {
    var myhtml = '';
    for (var i = 0; i < 7; i++) {
        var myTitle = data.rows[i].title;
        var myId = data.rows[i].id;
        var myWriteTime = data.rows[i].writeTime; 
        myhtml += '<li class="list-group-item">' 
        	+ '<span class="glyphicon glyphicon-chevron-right">' 
        	+ '</span>'
        	+ '<a href="thirdPages/ZcfgDetail.html?id=' + myId + '" target="_blank">'
        + cutString(myTitle, 13) + '<span style="color:black;float:right;font-size:12px">' 
            + '<span class="time">'+myWriteTime+'</span>' + '</span></p>' + '</a></p></li>';
    }
    document.getElementById("Zcfg").innerHTML = myhtml;
}
function HongInit() {
    $.ajax({
        url: myUrl+"/syqtsj/index.php/Qyhhb/getQyhhb?status=2&rows=7&hhzt=红&callback=jsonp",
        type: "POST",
        dataType: "jsonp",
        error: function () {
            alert("通知公告服务加载错误");
        },
        success: function (data) {
        	//console.log(data);
            showHong(data);
        }
    })
}
function showHong(data) {
    var myhtml = '';
    for (var i = 0; i < 7; i++) {
    	a=i+1;
        var mycomName = data.rows[i].comName;
        var myId = data.rows[i].id;
        var myWriteTime = data.rows[i].writeTime; 
        myhtml +='<li class="news_title"><a href="#" target="_blank"><span class="red_head">【红榜】</span>'+a+'.'+mycomName+'<span class="date">08-13</span></a></li>'
    }
    document.getElementById("red_list").innerHTML = myhtml;
}
function HeiInit() {
    $.ajax({
        url: myUrl+"/syqtsj/index.php/Qyhhb/getQyhhb?status=2&rows=7&hhzt=黑&callback=jsonp",
        type: "POST",
        dataType: "jsonp",
        error: function () {
            alert("通知公告服务加载错误");
        },
        success: function (data) {
        	//console.log(data);
            showHei(data);
        }
    })
}
function showHei(data) {
    var myhtml = '';
    for (var i = 0; i < 7; i++) {
    	a=i+1;
        var mycomName = data.rows[i].comName;
        var myId = data.rows[i].id;
        var myWriteTime = data.rows[i].writeTime; 
        myhtml +='<li class="news_title"><a href="#" target="_blank"><span class="black_head">【黑榜】</span>'+a+'.'+mycomName+'<span class="date">08-13</span></a></li>'
    }
    document.getElementById("black_list").innerHTML = myhtml;
}
