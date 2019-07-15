var myUrl="http://127.0.0.1";//服务器地址
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
            myTitle = myTitle.substring(0, myCount) ;
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

/*可溯源企业 开始*/

function companyAll(myPageNum) {
    
    $.ajax({
        url: myUrl+"/syncp/index.php/Product/getCompany?callback=jsonp&rows=10&page=" + myPageNum,
        type: "POST",
        dataType: "jsonp",
        error: function () {
            alert("通知公告二级页面服务加载错误");
        },
        success: function(data) {
            showCompanyAll(data);
    }
    })
    document.getElementById("hidPageNum").value = myPageNum; 
}
function showCompanyAll(data) {
    var myPageNum = document.getElementById("hidPageNum").value;
    var myhtml = "";
   if (data.total !=0){
    for (var i = 0; i < data.rows.length;i++)
    {
        var myAllCount = data.total;
        var myName = data.rows[i].name;
        var mylhsBh = data.rows[i].lhsBh;
        var myWriteTime = data.rows[i].registerDate;
        myWriteTime =  cutString(myWriteTime,10);
        var myWriteMan=data.rows[i].dkBh;
        myhtml+='<ul><li><a href="../thirdPages/companyDetail.html?lhsBh=' + mylhsBh + '" target="_blank"'
        +'class="list-group-item" style="font-size:14px;display:inline-block;width:100%;">'
        +'<span class="glyphicon glyphicon-chevron-right" style="padding-right:10px;">'
        +'</span>'+myName+'<span style="float:right;">'
        +myWriteTime+'</span></a></li></ul>';
    }
       }
    document.getElementById("Company").innerHTML = myhtml;
    document.getElementById("page").innerHTML = companyPageBar(myAllCount, myPageNum,10);
}
/*可溯源企业 结束*/

//翻页开始
function companyPageBar(myAllCount, myPageNum, myListCount)
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
          + '&nbsp;<a href="javascript:companyAll(1)"><span style="font-size:14px;color:black;">首页</span></a>'
          + '&nbsp;<a href="javascript:companyAll(' + myPre + ')"><span style="font-size:14px;color:black;">上一页</span></a>'
          + '&nbsp;<a href="javascript:companyAll(' + myNext + ')"><span style="font-size:14px;color:black;">下一页</span></a>'
          + '&nbsp;<a href="javascript:companyAll(' + myLastPage + ')"><span style="font-size:14px;color:black;">尾页</span></a>'
          + '&nbsp;<a href="javascript:companyGoToPage()"跳转至</span></a>'
          + '<input type="text" id = "txt_GoToPage" class="input" value="1" style="width:30px"/>'
    return myhtml;
}
//可溯源企业GOTOPAGE
function companyGoToPage() {
    var myPageNum = parseInt(document.getElementById("txt_GoToPage").value);
    companyAll(myPageNum);
}
//翻页结束

//可溯源企业的三级页面开始
function companyDetail(mylhsBh) {
    $.ajax({
        url: myUrl+"/syncp/index.php/Product/getCompany?callback=jsonp&lhsBh=" + mylhsBh,
        type: "POST",
        dataType: "jsonp",
        error: function () {
            alert("服务器加载错误");
        },
        success: function (data) {
            showCompanyDetail(data, mylhsBh);
        }
    });
}
function showCompanyDetail(data, mylhsBh) {
    var myHtml = '';
    if(data.rows.length){
    for (var i=0; i<data.rows.length;i++)
    {
    var myproName=data.rows[i].proName;
    var myName = data.rows[i].name;
    var myPhoto = data.rows[i].photo;
    //var myContent = data.rows[0].content;
    //myContent = myFormatJson(myContent) //转换格式
    var mySrc;
    if(myPhoto)
    {
        mySrc = myUrl+'/syncp/Uploads/sc_product/'+myPhoto
    } else
    {
        mySrc = 'imgs/lemon.png';
    }
     myHtml += '<li class="text-list">'
        +'<span class="listNum listSpan">'+(i+1)+'</span>'
        +'<span class="listSpan"><img src="'+mySrc+'" alt="Responsive image" /></span>'
        +'<span class="myTitle listSpan">'+myproName+'</span>'
        +'<span class="listSpan">'+myName+'</span>'
        +'</li>';
    }
    document.getElementById("company_list").innerHTML = myHtml;
    }
    else{
        document.getElementById("companyDetail").innerHTML = '<p style="text-align: center;">(￣▽￣") sorry,未查询到菜单信息。<p/>';
    }
}
//可溯源企业的三级页面结束




