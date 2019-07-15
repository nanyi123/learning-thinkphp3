var myUrl="http://eco.ahau.edu.cn";//服务器地址
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

/*基地管理章程 开始*/

function JdglzcInit() {
    
    $.ajax({
        //url: "http://zsjy.ahau.edu.cn:8080/GH/CenterSurveyServlet?infoType=jdglzc&operate=query&page=js&myTop=10&myPageNum=1",
        url: myUrl+"/NYXZLM/admin.php/Photonews/getNews?type=glzc&status=2&rows=1&page=1",
        type: "POST",
        dataType: "jsonp",
        error: function () {
            alert("服务加载错误");
        },
        success: function(data) {
            showJdglzc(data);
    }
    })
}
function showJdglzc(data) {
    
    var myhtml="";
        var myTitle = data.rows[0].title;
        var myId = data.rows[0].id;
        var myWriteTime = data.rows[0].writeTime;
        var myContent =data.rows[0].content;
        myContent = myFormatJson(myContent) //转换格式;
        myhtml +='<p style="font-size:13px;cursor:default;">'
            +'<span style="text-intent:2em;">'+myContent+'</span>'+'<p class="myWriteTime" style="float:right; ">'
            +myWriteTime+'</p>'
            +'</p>';
    document.getElementById("Jdglzc").innerHTML = myhtml;
}
/*基地管理章程 结束*/

/*大数据信息平台 开始*/

function RcpyfaInit() {
    
    $.ajax({
        //url: "http://zsjy.ahau.edu.cn:8080/GH/CenterSurveyServlet?infoType=rcpyfa&operate=query&page=js&myTop=10&myPageNum=1",
    	url: myUrl+"/NYXZLM/admin.php/Photonews/getNews?type=rcpyfa&status=2&rows=1&page=1",
        type: "POST",
        dataType: "jsonp",
        error: function () {
            alert("服务加载错误");
        },
        success: function(data) {
            showRcpyfa(data);
    }
    })
}
function showRcpyfa(data) {
    
    var myhtml="";
        var myTitle = data.rows[0].title;
        var myId = data.rows[0].id;
        var myWriteTime = data.rows[0].writeTime;
        var myContent =data.rows[0].content;
        myContent = myFormatJson(myContent) //转换格式;
        myhtml +='<p style="font-size:13px;cursor:default;">'
            +'<span style="text-intent:2em;">'+myContent+'</span>'+'<p class="myWriteTime" style="float:right; ">'
            +myWriteTime+'</p>'
            +'</p>';
    document.getElementById("Rcpyfa").innerHTML = myhtml;
}
/*大数据信息平台 结束*/

/*基地管理展望 开始*/

function JdglzwInit() {
    
    $.ajax({
        //url: "http://zsjy.ahau.edu.cn:8080/GH/CenterSurveyServlet?infoType=jdglzw&operate=query&page=js&myTop=10&myPageNum=1",
        url: myUrl+"/NYXZLM/admin.php/Photonews/getNews?type=glzw&status=2&rows=1&page=1",
        type: "POST",
        dataType: "jsonp",
        error: function () {
            alert("服务加载错误");
        },
        success: function(data) {
            showJdglzw(data);
    }
    })
}
function showJdglzw(data) {
    
    var myhtml="";
        var myTitle = data.rows[0].title;
        var myId = data.rows[0].id;
        var myWriteTime = data.rows[0].writeTime;
        var myContent =data.rows[0].content;
        myContent = myFormatJson(myContent) //转换格式;
        myhtml +='<p style="font-size:13px;cursor:default;">'
            +'<span style="text-intent:2em;">'+myContent+'</span>'+'<p class="myWriteTime" style="float:right; ">'
            +myWriteTime+'</p>'
            +'</p>';
    document.getElementById("Jdglzw").innerHTML = myhtml;
}
/*基地管理展望 结束*/

/* 开始*/

function FwfaInit() {
    
    $.ajax({
        //url: "http://zsjy.ahau.edu.cn:8080/GH/CenterSurveyServlet?infoType=fwfa&operate=query&page=js&myTop=10&myPageNum=1",
        url: myUrl+"/NYXZLM/admin.php/Photonews/getNews?type=fwfa&status=2&rows=1&page=1",
        type: "POST",
        dataType: "jsonp",
        error: function () {
            alert("服务加载错误");
        },
        success: function(data) {
            showFwfa(data);
    }
    })
}
function showFwfa(data) {
    
    var myhtml="";
        var myTitle = data.rows[0].title;
        var myId = data.rows[0].id;
        var myWriteTime = data.rows[0].writeTime;
        var myContent =data.rows[0].content;
        myContent = myFormatJson(myContent) //转换格式;
        myhtml +='<p style="font-size:13px;cursor:default;">'
            +'<span style="text-intent:2em;">'+myContent+'</span>'+'<p class="myWriteTime" style="float:right; ">'
            +myWriteTime+'</p>'
            +'</p>';
    document.getElementById("Fwfa").innerHTML = myhtml;
}
/* 结束*/


/*联系我们 开始*/

function LxwmInit() {
    
    $.ajax({
        //url: "http://zsjy.ahau.edu.cn:8080/GH/CenterSurveyServlet?infoType=lxwm&operate=query&page=js&myTop=10&myPageNum=1",
        url: myUrl+"/NYXZLM/admin.php/news/getNews?type=lxwm&rows=1&page=1",//
        type: "POST",
        dataType: "jsonp",
        error: function () {
            alert("服务加载错误");
        },
        success: function(data) {
            showLxwm(data);
    }
    })
}
function showLxwm(data) {
    
    var myhtml="";
        var myTitle = data.rows[0].title;
        var myId = data.rows[0].id;
        var myWriteTime = data.rows[0].writeTime;
        var myContent =data.rows[0].content;
        myContent = myFormatJson(myContent) //转换格式;
        myhtml +='<p style="font-size:14px;cursor:default;">'
            +myContent+'<p class="myWriteTime" style="float:right; ">'
            +myWriteTime+'</p>'
            +'</p>';
    document.getElementById("Lxwm").innerHTML = myhtml;
}
/*联系我们 结束*/

/*基地介绍 开始*/

function JdjsInit() {
    
    $.ajax({
        url: myUrl+"/NYXZLM/admin.php/Photonews/getNews?type=lmjs&status=2&rows=1&page=1",//
        type: "POST",
        dataType: "jsonp",
        error: function () {
            alert("服务加载错误");
        },
        success: function(data) {
            showJdjs(data);
    }
    })
}
function showJdjs(data) {
    
    var myhtml="";
        var myTitle = data.rows[0].title;
        var myId = data.rows[0].id;
        var myWriteTime = data.rows[0].writeTime;
        var myContent =data.rows[0].content;
        myContent = myFormatJson(myContent) //转换格式;
        myhtml +='<p style="font-size:14px;cursor:default;">'
            +myContent+'<p class="myWriteTime" style="float:right; ">'
            +myWriteTime+'</p>'
            +'</p>';
    document.getElementById("Jdjs").innerHTML = myhtml;
}
/*基地介绍 结束*/



/*基地负责人开始*/
function JdfzrInit() {
    
    $.ajax({
        //url: "http://zsjy.ahau.edu.cn:8080/GH/CenterSurveyServlet?infoType=jdfzr&operate=query&page=js&myTop=10&myPageNum=1",
    	url: myUrl+"/NYXZLM/admin.php/Photonews/getNews?type=lmfzr&status=2&rows=1&page=1",//联盟介绍
        type: "POST",
        dataType: "jsonp",
        error: function () {
            alert("基地负责人服务加载错误");
        },
        success: function(data) {
            showJdfzr(data);
    }
    })
}
function showJdfzr(data) {
    
    var myhtml="";
        var myTitle = data.rows[0].title;
        var myId = data.rows[0].id;
        var myWriteTime = data.rows[0].writeTime;
        var myContent =data.rows[0].content;
        myContent = myFormatJson(myContent) //转换格式;
        myhtml +='<p style="font-size:13px;cursor:default;">'
            +'<span style="text-intent:2em;">'+myContent+'</span>'+'<p class="myWriteTime" style="float:right; ">'
            +myWriteTime+'</p>'
            +'</p>';
    document.getElementById("Jdfzr").innerHTML = myhtml;
}
/*基地负责人结束*/

/*基地组织结构开始*/
function JdzzjgInit() {
    
    $.ajax({
        //url: "http://zsjy.ahau.edu.cn:8080/GH/CenterSurveyServlet?infoType=jdzzjg&operate=query&page=js&myTop=10&myPageNum=1",
    	url: myUrl+"/NYXZLM/admin.php/Photonews/getNews?type=lmzzjg&status=2&rows=1&page=1",//联盟介绍
        type: "POST",
        dataType: "jsonp",
        error: function () {
            alert("基地组织结构加载错误");
        },
        success: function(data) {
            showJdzzjg(data);
    }
    })
}
function showJdzzjg(data) {
    
    var myhtml="";
        var myTitle = data.rows[0].title;
        var myId = data.rows[0].id;
        var myWriteTime = data.rows[0].writeTime;
        var myContent =data.rows[0].content;
        myContent = myFormatJson(myContent) //转换格式;
        myhtml +='<p style="font-size:13px;cursor:default;">'
            +'<span style="text-intent:2em;">'+myContent+'</span>'+'<p class="myWriteTime" style="float:right; ">'
            +myWriteTime+'</p>'
            +'</p>';
    document.getElementById("Jdzzjg").innerHTML = myhtml;
}
/*基地组织结构结束*/

/*基地管理人员开始*/
function JdglryInit() {
    
    $.ajax({
        //url: "http://zsjy.ahau.edu.cn:8080/GH/CenterSurveyServlet?infoType=jdglry&operate=query&page=js&myTop=10&myPageNum=1",
        url: myUrl+"/NYXZLM/admin.php/Photonews/getNews?type=glry&status=2&rows=1&page=1",
        type: "POST",
        dataType: "jsonp",
        error: function () {
            alert("基地管理人员加载错误");
        },
        success: function(data) {
            showJdglry(data);
    }
    })
}
function showJdglry(data) {
    
    var myhtml="";
        var myTitle = data.rows[0].title;
        var myId = data.rows[0].id;
        var myWriteTime = data.rows[0].writeTime;
        var myContent =data.rows[0].content;
        myContent = myFormatJson(myContent) //转换格式;
        myhtml +='<p style="font-size:13px;cursor:default;">'
            +'<span style="text-intent:2em;">'+myContent+'</span>'+'<p class="myWriteTime" style="float:right; ">'
            +myWriteTime+'</p>'
            +'</p>';
    document.getElementById("Jdglry").innerHTML = myhtml;
}
/*基地管理人员结束*/

/*开始*/
function JhfwInit() {
    
    $.ajax({
        //url: "http://zsjy.ahau.edu.cn:8080/GH/CenterSurveyServlet?infoType=jhfw&operate=query&page=js&myTop=10&myPageNum=1",
    	url: myUrl+"/NYXZLM/admin.php/Photonews/getNews?type=jhfw&status=2&rows=1&page=1",//
        type: "POST",
        dataType: "jsonp",
        error: function () {
            alert("基地管理人员加载错误");
        },
        success: function(data) {
            showJhfw(data);
    }
    })
}
function showJhfw(data) {
    
    var myhtml="";
        var myTitle = data.rows[0].title;
        var myId = data.rows[0].id;
        var myWriteTime = data.rows[0].writeTime;
        var myContent =data.rows[0].content;
        myContent = myFormatJson(myContent) //转换格式;
        myhtml +='<p style="font-size:13px;cursor:default;">'
            +'<span style="text-intent:2em;">'+myContent+'</span>'+'<p class="myWriteTime" style="float:right; ">'
            +myWriteTime+'</p>'
            +'</p>';
    document.getElementById("Jhfw").innerHTML = myhtml;
}
/*结束*/

/*农技推广开始*/
function RczysInit() {
    
    $.ajax({
        //url: "http://zsjy.ahau.edu.cn:8080/GH/CenterSurveyServlet?infoType=rczys&operate=query&page=js&myTop=10&myPageNum=1",
    	url: myUrl+"/NYXZLM/admin.php/Photonews/getNews?type=rczys&status=2&rows=1&page=1",//
        type: "POST",
        dataType: "jsonp",
        error: function () {
            alert("基地管理人员加载错误");
        },
        success: function(data) {
            showRczys(data);
    }
    })
}
function showRczys(data) {
    
    var myhtml="";
        var myTitle = data.rows[0].title;
        var myId = data.rows[0].id;
        var myWriteTime = data.rows[0].writeTime;
        var myContent =data.rows[0].content;
        myContent = myFormatJson(myContent) //转换格式;
        myhtml +='<p style="font-size:13px;cursor:default;">'
            +'<span style="text-intent:2em;">'+myContent+'</span>'+'<p class="myWriteTime" style="float:right; ">'
            +myWriteTime+'</p>'
            +'</p>';
    document.getElementById("Rczys").innerHTML = myhtml;
}
/*农技推广结束*/


/*重大专项开始*/
function LwcgInit() {
    
    $.ajax({
        //url: "http://zsjy.ahau.edu.cn:8080/GH/PhotoInfoKindServlet?infoType=lwcg&operate=query&page=js&myTop=10&myPageNum=1",
    	url: myUrl+"/NYXZLM/admin.php/Photonews/getNews?type=lwcg&status=2&rows=1&page=1",
        type: "POST",
        dataType: "jsonp",
        error: function () {
            alert("基地管理人员加载错误");
        },
        success: function(data) {
            showLwcg(data);
    }
    })
}
function showLwcg(data) {
    
    var myhtml="";
        var myTitle = data.rows[0].title;
        var myId = data.rows[0].id;
        var myWriteTime = data.rows[0].writeTime;
        var myContent =data.rows[0].content;
        myContent = myFormatJson(myContent) //转换格式;
        myhtml +='<p style="font-size:13px;cursor:default;">'
            +'<span style="text-intent:2em;">'+myContent+'</span>'+'<p class="myWriteTime" style="float:right; ">'
            +myWriteTime+'</p>'
            +'</p>';
    document.getElementById("Lwcg").innerHTML = myhtml;
}
/*重大专项结束*/
