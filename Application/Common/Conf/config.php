<?php
return array(
    //'配置项'=>'配置值'

    //允许访问的模块列表
    'MODULE_ALLOW_LIST'        => array('Home'),

    //默认模块
    'DEFAULT_MODULE'           => 'Home',

    //URL访问模式,可选参数0、1、2、3,代表以下四种模式：
    'URL_MODEL'                => 2,

    //默认模板文件后缀
    'TMPL_TEMPLATE_SUFFIX'     => '.html',

  /*  // 默认模板主题名称
    'DEFAULT_THEME'            => 'Default',*/

    //PDO数据库连接
    'DB_TYPE'               =>  'mysql',     // 数据库类型
    'DB_HOST'               =>  'localhost', // 服务器地址
    'DB_NAME'               =>  'rlt',          // 数据库名
    'DB_USER'               =>  'root',      // 用户名
    'DB_PWD'                =>  '',          // 密码
    'DB_PORT'               =>  '3306',        // 端口
    'DB_PREFIX'             =>  't_',    // 数据库表前缀
    'DB_CHARSET'            =>  'utf8',      // 数据库编码默认采用utf8

    //拒绝强制小写(和数据库字段名称大小写有关)
    'DB_PARAMS'                =>array(\PDO::ATTR_CASE => \PDO::CASE_NATURAL),

    //'SHOW_PAGE_TRACE'=>true,//页面调试工具
);