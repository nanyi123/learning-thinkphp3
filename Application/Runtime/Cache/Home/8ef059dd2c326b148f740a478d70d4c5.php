<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>form表单提交例子解析</title>
    <script type="text/javascript" src="/test1/Public/easyui/jquery.min.js"></script>
    <script type="text/javascript" src="/test1/Public/easyui/jquery.easyui.min.js"></script>
    <link rel="stylesheet" type="text/css" href="/test1/Public/css/bootstrap.min.css" />
    <link rel="stylesheet" type="text/css" href="/test1/Public/css/easyui.css" />
    <script type="text/javascript" src="/test1/Public/easyui/jquery.easyui.min.js"></script>
    <script type="text/javascript" src="/test1/Public/easyui/easyui-lang-zh_CN.js"></script>
</head>
<style>
    body{
        background: #e2e2e2;
    }
</style>
<body>
<div style="font-size: 20px;color: red"> 一个简单的ajax抛送的例子，下面直接调用的是bootstrap的表单框架，后续你们也可以直接调用（注意的是需要引用相应的js,css文件）这些文件可以网上直接下载。
    值得注意的是在后续的学习过程中你们会遇到两种抛送后台的方式：1、form表单抛送（优点在于：一次性可以抛送很多参数到后台，不需要组键值对。缺点：在于后台
    调试的时候浏览器不容易看到对，很麻烦到底有没有抛送过去）2、ajax抛送（用的最多）。后面我们还会用到easyui框架，其他bootstrap框架等。
</div>
<div class="row">
    <div class="col-md-4"></div>
    <div class="col-md-4" style="padding-top: 50px">
        <form class="form-horizontal" id="fm" method="post">
            <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
                <div class="col-sm-10">
                    <input type="email" name="Email" class="form-control" id="inputEmail3" placeholder="Email">
                </div>
            </div>
            <div class="form-group">
                <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
                <div class="col-sm-10">
                    <input type="password" name="Password" class="form-control" id="inputPassword3" placeholder="Password">
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <div class="checkbox">
                        <label>
                            <input type="checkbox"> Remember me
                        </label>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <a href="#" class="btn btn-primary btn-lg submit" onclick="SB()">确认提交</a>
                    <a href="#" class="btn btn-primary btn-lg submit" onclick="DE()">删除</a>
                    <a href="#" class="btn btn-primary btn-lg submit" onclick="CH()">修改</a>
                    <a href="#" class="btn btn-primary btn-lg submit" onclick="LI()">登录</a>


                    <a href="#" class="btn btn-primary btn-lg submit" onclick="sign1()">确认提交</a>
                    <a href="#" class="btn btn-primary btn-lg submit" onclick="drop()">drop</a>
                    <a href="#" class="btn btn-primary btn-lg submit" onclick="upgrade()">升级密码</a>
                    <a href="#" class="btn btn-primary btn-lg submit" onclick="signin()">登录</a>

                </div>
            </div>
        </form>
    </div>
    <div class="col-md-4"></div>
</div>
<div id="jg" style="width: 100%;height: 50px;color: blue;font-size: 18px"></div>
<div  style="font-size: 20px;color: red">datagrid的应用:</div>
<div id="datagrid" class="easyui-datagrid" style="width:100%;"></div>
<div style="width: 100%;height: 2px;background: red"></div>
<a href="#" class="btn btn-primary btn-lg submit" onclick="od()">打开dlg</a>
<div id="dlg" class="easyui-dialog" style="width:1000px;height:400px;padding:10px 20px;overflow-x:hidden;"
     closed="true" buttons="#dlg-buttons">
    <div class="ftitle">test information</div>
    <div style="background-color:rgb(202,202,202);height:1px;margin-bottom:5px"></div>
    <div id="form">
        <input type="hidden" name="id"></input>
        <table style="width:960px" class="form-table">
            <tr>
                <td>Email:</td>
                <td><input class="easyui-textbox easyui-validatebox" id="Email9" type="text" name="Email" required="required"></input></td>
                <td>Password:</td>
                <td><input class="easyui-textbox easyui-validatebox" id="Password9" type="text" name="Password"></input></td>
            </tr>
        </table>
    </div>
</div>
<div id="dlg-buttons">
    <a href="#" id="operate" class="easyui-linkbutton" iconCls="icon-ok" data-options="size :'large'" onclick="saveInfo()">保存</a>
    <a href="#" id="operate" class="easyui-linkbutton" iconCls="icon-ok" data-options="size :'large'" onclick="rmInfo()">删除</a>
    <a href="#" id="operate" class="easyui-linkbutton" iconCls="icon-ok" data-options="size :'large'" onclick="upInfo()">修改密码</a>
    <a href="#" id="operate" class="easyui-linkbutton" iconCls="icon-ok" data-options="size :'large'" onclick="lgInfo()">登录</a>
    <a href="#" class="easyui-linkbutton" iconCls="icon-cancel" data-options="size :'large'" onclick="javascript:$('#dlg').dialog('close')">取消</a>
</div>
</body>
<script>
    $(document).ready(function () {
        datagrid();
    });
    function SB() {
        $('#fm').form('submit',{
            url:'/test1/index.php/home/index/add',
            onSubmit:function () {
                if ($('#inputEmail3').val()==''&&$('#inputPassword3').val()==''){
                    alert("not null");
                }
            },
            success:function (data) {
                if(data=='1'){
                    alert("success");
                }
            }
        })
    }
    function DE() {
        $('#fm').form('submit',{
            url:'/test1/index.php/home/index/delete',
            onSubmit:function () {
                if($('#inputEmail3').val()==''){
                    alert("?????");
                }
            },
            success:function (data) {
             if(data==120) {
                 alert("delete complete");
             }
            }
        })        
    }
    function CH() {
        var Password=$('#inputPassword3').val();
        $('#fm').form('submit',{
          url:'/test1/index.php/home/index/update',
          onSubmit:function () {
           if ($('#inputEmail3').val()==''&&$('#inputPassword3').val()==''){
               alert("??????????????????????????????????????????????????????????")
           }
          },

            success:function (data) {
              if (data==Password){
                  alert("successss!");
              }
            }
        })
    }
    function LI() {
        $('#fm').form('submit',{
            url:'/test1/index.php/home/index/login',
            onSubmit:function () {
            if ($('#inputEmail3').val()==''&&$('#inputPassword3').val()==''){
                alert("you sign in what?");
                return false;
            }
            },
            success:function (data) {
                if(data==119){
                    alert("are you ok?");
                }

            }
        })
    }


    function sign1() {
        $('#fm').form('submit',{
            url:'/test1/index.php/home/index/si',
            onSubmit:function () {if ($('#inputEmail3').val()==''&&$('#inputPassword3').val()=='') {
                alert("你注册个棒棒锤？");
            }

            },
            success:function (data) {
                if(data=="si"){
                    alert("成功");
                    var q="测试成功";
                    $('#jg').append(q);
                }else if (data=="重复"){
                    alert("账号重复");
                }
                else {
                    alert("失败");
                }
            }
            }
        )
    }
    function drop() {
        $('#fm').form('submit',{
            url:'/test1/index.php/home/index/rm',
            onSubmit:function () {
                if($('#inputEmail3').val()==''){
                    alert("你让我改个锤子？？？");
                }
            },
            success:function (data) {
                if (data="rm-rf"){
                    alert("测试成功");
                }
            }
        })

    }
    function upgrade() {
        $('#fm').form('submit',{
            url:'/test1/index.php/home/index/at',
            onSubmit:function () {
                if ($('#inputEmail3').val()==''){
                    alert("没账户我改？？？？？");
                    return false;
                } else if ($('#inputPassword3').val()==''){
                    alert("改个空密码怎么样");
                    return false;
                }
            },
            success:function (data) {
                if(data=="Modificación"){
                    alert("修改成功");
                }
            }
        })
    }
    function signin() {
        $('#fm').form('submit',{
            url:'/test1/index.php/home/index/log',
            onSubmit:function () {
                if($('#inputEmail3').val()==''){
                    alert("没账号 登录？？？");
                }else if($('#inputPassword3').val()==''){
                    alert("没密码？");
                }
            },
            success:function (data) {
                if(data=="成功"){
                    alert("登陆成功");
                }
            }
            }
        )

    }
    //配置datagrid    引用
    var myview = $.extend({}, $.fn.datagrid.defaults.view, {
        onAfterRender: function (target) {
            $.fn.datagrid.defaults.view.onAfterRender.call(this, target);
            var opts = $(target).datagrid('options');
            var vc = $(target).datagrid('getPanel').children('div.datagrid-view');
            vc.children('div.datagrid-empty').remove();
            if (!$(target).datagrid('getRows').length) {
                var d = $('<div class="datagrid-empty"></div>').html(opts.emptyMsg || 'no records').appendTo(vc);
                d.css({
                    position: 'absolute',
                    left: 0,
                    top: 50,
                    width: '100%',
                    textAlign: 'center',
                    color: 'red'
                });
            }
        }
    });
    function datagrid() {
        $('#datagrid').datagrid({
            view: myview,
            title:'人员信息',
            url: '/test1/index.php/Index/ry1',
            emptyMsg: '没有相关记录，请自行添加！',
            fitColumns: true,
            pagination: true,
            singleSelect: true,
            pageSize: 10, //每页显示的记录条数，默认为10
            pageList: [10, 20, 30, 40], //可以设置每页记录条数的列表
            pagePosition: 'bottom',
            rownumbers: true,
            toolbar: "#toolbar",
            columns: [[
                {
                    field: 'id',
                    title: 'id名称',
                    hidden: true,
                    width: 10
                },
                {
                    field: 'Email',
                    title: '邮箱',
                    width: 70
                },
                {
                    field: 'Password',
                    title: '密码',
                    width: 20
                }
            ]]
        });
    }
    /*************************************************************************************************************/
    function od() {
    var row=$('#datagrid').datagrid('getSelected');
    if (row=='null'){
        alert("先选择条目");
        return false;
    }else if(row) {
        $('#dlg').dialog('open').dialog('setTitle','testdemo');
        $('#form').form('load',row);
    }
        //配置对话框样式
        $('#dlg').dialog({
            title:'编辑条目',
            //left:0,
            top:5,
            closed: false,
            cache: false,
            modal: true,
            maximizable : true,
            onOpen:function(){
                $(".panel").css("z-index","999");
                $(".window-shadow").css("z-index","998");
            },
            onMove:function(left,top){
                $(".panel").css("z-index","999");
                $(".window-shadow").css("z-index","998");
            },
            onResize:function(width,height){
                $(".panel").css("z-index","999");
                $(".window-shadow").css("z-index","998");
            }
        });
    }
    /*###############################################################################################################*/
        function saveInfo() {
            var Email=$('#Email9').val();
            var Password=$('#Password9').val();
            var data={
                'Email':Email,
                'Password':Password
            };
            $.ajax({
                url:'/test1/index.php/home/index/si',
                data:data,
                type:'post',
                datatype:'json',
                success:function (data) {
                    if(data=="si"){
                        alert("成功");
                        $('#datagrid').datagrid('reload');
                        var q="测试成功";
                        $('#jg').append(q);
                    }else if (data=="重复"){
                        alert("账号重复");
                    }
                    else {
                        alert("失败");
                    }
                }
            })
        }
    function rmInfo() {
        var Email=$('#Email9').val();
        var Password=$('#Password9').val();
        var data={
            'Email':Email,
            'Password':Password
        };
        $.ajax({
            url:'/test1/index.php/home/index/rm',
            data:data,
            type:'post',
            datatype:'json',
            success:function (data) {
                if(data=="rm-rf"){
                    alert("成功");
                    $('#datagrid').datagrid('reload');
                    var q="测试成功";
                    $('#jg').append(q);
                }

                else {
                    alert("失败");
                }
            }
        })
    }
    function upInfo() {
        var Email=$('#Email9').val();
        var Password=$('#Password9').val();
        var data={
            'Email':Email,
            'Password':Password
        };
        $.ajax({
            url:'/test1/index.php/home/index/at',
            data:data,
            type:'post',
            datatype:'json',
            success:function (data) {
                if(data=="Modificación"){
                    alert("成功");
                    $('#datagrid').datagrid('reload');
                    var q="测试成功";
                    $('#jg').append(q);
                }
                else {
                    alert("失败");
                }
            }
        })
    }
    function lgInfo() {
        var Email=$('#Email9').val();
        var Password=$('#Password9').val();
        var data={
            'Email':Email,
            'Password':Password
        };
        $.ajax({
            url:'/test1/index.php/home/index/log',
            data:data,
            type:'post',
            datatype:'json',
            success:function (data) {
                if(data=="成功"){
                    alert("成功");
                    window.location.href='http://localhost/test1/index.php/home/Echarts/index.html';
                    var q="测试成功";
                    $('#jg').append(q);
                }
                else {
                    alert("失败");
                }
            }
        })
    }
</script>
</html>