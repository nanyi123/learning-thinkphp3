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
//js获取Request值
function GetRequest(strParame) {
    var args = new Object();
    var query = location.search.substring(1);
    var pairs = query.split("&"); // Break at ampersand 
    for (var i = 0; i < pairs.length; i++) {
        var pos = pairs[i].indexOf('=');
        if (pos == -1) continue;
        var argname = pairs[i].substring(0, pos);
        var value = pairs[i].substring(pos + 1);
        value = decodeURIComponent(value);
        args[argname] = value;
    }
    return args[strParame];
}

/*通知公告 开始*/

function HyzxAll(myPageNum) {
    
    $.ajax({
        url: myUrl+"/syqtsj/index.php/Hyzx/getHyzx?status=2&rows=8&page=" + myPageNum,
        type: "POST",
        dataType: "jsonp",
        error: function () {
            alert("通知公告二级页面服务加载错误");
        },
        success: function(data) {
            showHyzxAll(data);
    }
    })
    document.getElementById("hidPageNum").value = myPageNum; 
}
function showHyzxAll(data) {
    var myPageNum = document.getElementById("hidPageNum").value;
    var myhtml = "";
   if (data.total !=0){
    for (var i = 0; i < data.rows.length;i++)
    {
        var myAllCount = data.total;
        var myTitle = data.rows[i].title;
        var myId = data.rows[i].id;
        var myWriteTime = data.rows[i].writeTime;
        var myWriteMan=data.rows[i].writeMan;
        myhtml+='<ul><li><a href="../thirdPages/HyzxDetail.html?id=' + myId + '" target="_blank"'
        +'class="list-group-item" style="font-size:14px;display:inline-block;width:100%;">'
        +'<span class="glyphicon glyphicon-chevron-right" style="padding-right:10px;">'
        +'</span>'+myTitle+'<span style="float:right;">'
        +myWriteTime+'</span></a></li></ul>';
    }
       }
    document.getElementById("Hyzx").innerHTML = myhtml;
    document.getElementById("page").innerHTML = HyzxPageBar(myAllCount, myPageNum,8);
}
/*通知公告 结束*/

//翻页开始
function HyzxPageBar(myAllCount, myPageNum, myListCount)
{
    var myLastPage = Math.ceil(parseInt(myAllCount) / myListCount);
    if (myLastPage < 1)
        myLastPage = 1;
    var myPre = myPageNum - 1;
    if (myPre == 0)
        myPre = 1;
    var myNext = myPageNum + 1;
    if (myNext > myLastPage)
        myNext = myLastPage;
    var myhtml = '<span style="font-size:14px;color:black;">共有[&nbsp;' + myLastPage + '&nbsp;]页,'
          + '每页[&nbsp;' + myListCount + '&nbsp;]条,'
          + '当前第&nbsp;' + myPageNum + '&nbsp;页'
          + '&nbsp;<a href="javascript:HyzxAll(1)"><span style="font-size:14px;color:black;">首页</span></a>'
          + '&nbsp;<a href="javascript:HyzxAll(' + myPre + ')"><span style="font-size:14px;color:black;">上一页</span></a>'
          + '&nbsp;<a href="javascript:HyzxAll(' + myNext + ')"><span style="font-size:14px;color:black;">下一页</span></a>'
          + '&nbsp;<a href="javascript:HyzxAll(' + myLastPage + ')"><span style="font-size:14px;color:black;">尾页</span></a>'
          + '&nbsp;<a href="javascript:HyzxGoToPage()"跳转至</span></a>'
          + '<input type="text" id = "txt_GoToPage" class="input" value="1" style="width:30px"/>'
    return myhtml;
}

function HyzxGoToPage() {
    var myPageNum = parseInt(document.getElementById("txt_GoToPage").value);
    HyzxAll(myPageNum);
}

function HyzxDetail(myId) {
    $.ajax({
        url: myUrl+"/syqtsj/index.php/Hyzx/getHyzx?status=2&id=" + myId,
        type: "POST",
        dataType: "jsonp",
        error: function () {
            alert("服务器加载错误");
        },
        success: function (data) {
            showHyzxDetail(data, myId);
        }
    });
}
function showHyzxDetail(data, myID) {
    var myHtml = '<div>';
    var myTitle = data.rows[0].title
    var myWriteTime = data.rows[0].writeTime
    var myContent = data.rows[0].content
    myContent = myFormatJson(myContent) //转换格式
    myHtml += '<div>' + myTitle + '</div>'
           + '<div>' + myContent + '</div>'
    myHtml += '</div>';
    document.getElementById("HyzxDetail").innerHTML = myHtml;
}
