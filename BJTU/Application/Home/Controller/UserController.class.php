<?php
/**
 * Created by PhpStorm.
 * User: zhangxuan
 * Date: 2017/5/9
 * Time: 20:07
 */

namespace Home\Controller;
use Think\Controller;

class UserController    extends Controller
{   
    public function  login(){
        $name =$_GET['name'];
        $pswd=$_GET['password'];
        $user =new \Home\Model\User();
        $array=$user->selectByName();
        echo header("Content-type:text/html;charset=utf-8");
        echo json_encode($array, JSON_UNESCAPED_UNICODE);
    }

}