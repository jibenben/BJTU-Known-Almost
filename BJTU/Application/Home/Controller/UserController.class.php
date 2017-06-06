<?php
/**
 * Created by PhpStorm.
 * User: zhangxuan
 * Date: 2017/5/9
 * Time: 20:07
 */

namespace Home\Controller;
use Think\Controller;

class UserController  extends Controller
{
    //登录信息
    public function  login(){
        $name =$_POST['name'];
        $pswd=$_POST['password'];
        $user =new \Home\Model\UserModel();
        $array=$user->selectByName($name,$pswd);
        if($array==null)
        {
          $arr=array("result" =>"false");
        }else{
            $arr=array("result"=>"true","id"=>$array[0]['id']);
            $_SESSION['id'] = $array[0]['id'];
        }
        echo header("Content-type:text/html;charset=utf-8");
        echo json_encode($arr, JSON_UNESCAPED_UNICODE);
    }
    //验证邮箱是否没有被注册
    public function  emailUse(){
        $user =new \Home\Model\UserModel();
        $array =$user->emailExit($_POST['email']);
        if($array == null)
            $arr =array("result"=>"true");
        else
            $arr=array("result"=>"false");
        echo header("Content-type:text/html;charset=utf-8");
        echo json_encode($arr, JSON_UNESCAPED_UNICODE);
    }

    //验证用户名有没有被注册
    public  function  nameUse(){
        $user =new \Home\Model\UserModel();
        $array =$user->nameExit($_POST['name']);
        if($array == null)
            $arr =array("result"=>"true");
        else
            $arr=array("result"=>"false");
        echo header("Content-type:text/html;charset=utf-8");
        echo json_encode($arr, JSON_UNESCAPED_UNICODE);
    }

}