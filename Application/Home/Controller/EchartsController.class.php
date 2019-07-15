<?php


namespace Home\Controller;

use Think\Controller;
class EchartsController extends Controller
{
    public function index()
    {
        $this->display('index');
        }
    public function pie()
    {
        $res = M('ahsy.QyBasic', 't_')->field('qylx as name,count(qylx) as value')->group('qylx')->select();
        echo json_encode($res);
    }
}