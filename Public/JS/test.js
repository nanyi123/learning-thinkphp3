/**
 * Created by chaoyue on 2017/3/11.
 */
/*function addData1(){
    $.ajax({
        url : 'http://localhost/QT/Public/file/test.json',
        //url : ThinkPHP['MODULE'] + '/Test/addData',
        type : 'get',
        dataType:'JSON',
        ///data : "",
        beforeSend : function ()
        {
            $.messager.progress({
                text : '正在处理中...'
            })
        },
        success : function (data)
        {
            console.log(data);
            $.ajax({
                url : ThinkPHP['MODULE'] + '/Test/addData1',
                type : 'POST',
                data : data,

                success : function (result)
                {
                    console.log(result);


                }
            })
        }
    });
}*/


function addData1(){
    $.ajax({
        url : ThinkPHP['MODULE'] + '/Test/addData1',
        type : 'POST',
        dataType:'JSON',

        success : function (result)
        {
            console.log(result);


        }
    })
}