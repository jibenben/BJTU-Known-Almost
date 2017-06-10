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
        echo header('Access-Control-Allow-Origin:*');
        echo header("Content-type:text/html;charset=utf-8");
        if(!isset($_POST['name'])||!isset($_POST['password'])){
            $arr=array("result" =>"false");
            echo json_encode($arr, JSON_UNESCAPED_UNICODE);
        }else{
        $name =$_POST['name'];
        $pswd=$_POST['password'];
        $user =new \Home\Model\UserModel();
        $array=$user->selectName($name,$pswd);
        if($array==null)
        {
          $arr=array("result" =>"false");
        }else{
            $arr=array("result"=>"true","id"=>$array['id']);
            $_SESSION['id'] = $array['id'];
        }
        echo json_encode($arr, JSON_UNESCAPED_UNICODE);
        }
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
    //添加发邮件功能

    public function add() {
        if(!isset($_POST['mail'])){
            echo "输入正取的邮箱";
        }else {
            $title = "交大知乎注册";
            $content = substr(md5(time()), 0, 6);
            $mail_pwd = new \Home\Model\UserModel();
            $mail_pwd->mail_pwd($_POST['mail'], $content);
            if (SendMail($_POST['mail'], $title, $content)) {
                echo '验证码发送成功！';
            } else {
                echo '验证码发送失败';
            }
        }
    }
}