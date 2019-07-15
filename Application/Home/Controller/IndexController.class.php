<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller{
        public function index(){
            $this->display('index');
        }
    public function test1(){
        $this->display('test1');
    }
public function add(){
        $data=I('post.');
        $Email=$data['Email'];
        $Password=$data['Password'];
        if($Email=='bio4'){
            echo (111);
        }else {
            $ad = M('ry');
            $ad->add($data);
            //  $ad->create();
            // $ad->add($data);
            echo(1);
        }
        }
        public function delete(){
          $data=I('post.');
          $Email=$data['Email'];
          $Password=$data['Password'];
          $de=M('ry');
          $map['Email']=array('eq',$Email);
          $de->where($map)->delete();
          echo (120);
}
        public function update(){
            $data=I('post.');
            $Email=$data['Email'];
            $Password=$data['Password'];
            $up=M('ry');
            $map['Email']=array('eq',$Email);
            $up->where($map)->setField('Password',$Password);
            echo($Password);
        }
        public function login(){
            $data=I('post.');
            $Email=$data['Email'];
            $Password=$data['Password'];
            $lg=M('ry');
            $map['Email']=array('eq',$Email);
            $pw=$lg->where($map)->getField('Password');
            if($pw==$Password){
                echo (119);
            }
        }
        public function dp(){
            $data=I('post.');
            $Email=$data['Email'];
            $dp=M('ry');
            $res=$dp->where(1)->select();
            echo json_encode($res);
        }


        function si(){
            $data=I('post.');
            $si=M('ry');
            $Email=$data['Email'];
            $map['Email']=array('eq',$Email);
            $res=$si->where($map)->getField('Email');
            if($Email==$res){
                echo("重复");
            }else {
                $si->add($data);
                echo("si");
            }
        }
        function rm(){
            $data=I('post.');
            $Email=$data['Email'];
            $rm=M('ry');
            $map['Email']=array('eq',$Email);
            $rm->where($map)->delete();
            echo ("rm-rf");
        }
        function at(){
            $data=I('post.');
            $Email=$data['Email'];
            $Password=$data['Password'];
            $at=M('ry');
            $map['Email']=array('eq',$Email);
            $at->where($map)->setField('Password',$Password);
            echo ("Modificación");
        }
        function log(){
            $data=I('post.');
            $Email=$data['Email'];
            $Password=$data['Password'];
            $log=M('ry');
            $map['Email']=array('eq',$Email);
            $res=$log->where($map)->getField('Password');
            if($res==$Password){
                echo("成功");
            }else{
                echo ("直せない");
            }
        }
    function look()
    {
        $data = I('post.');
        $Email = $data['Email'];
        $log = M('ry');
        $map['Email'] = array('eq', $Email);
        $res = $log->where($map)->getField('Password');
       // echo ($res);
       // echo ($Email);
        $q=array($Email,$res);
        echo json_encode($q);
    }
    public function ry1(){
        if(I('get.callback')){
            $page=I('get.page',1);
            $rows=I('get.rows', 10);
        }else{
            $page = I('post.page');
            $rows = I('post.rows');
        }
        $offset = ($page-1)*$rows;
        $data['total'] = M('ry')->count();
        $data['rows'] = M('ry')->limit($offset,$rows)->select();
        echo json_encode($data);
    }
}