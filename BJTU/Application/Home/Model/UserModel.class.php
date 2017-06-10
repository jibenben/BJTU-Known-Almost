<?php

/**
 * Created by PhpStorm.
 * User: zhangxuan
 * Date: 2017/5/9
 * Time: 11:39
 */
namespace  Home\Model;
use Think\Model;
class UserModel extends  Model
{
    //根据用户姓名进行判断登录
    public function selectName($name,$paswd){
        $list=M("user");
        return $list=$list->where("email ='$name' and password ='$paswd' ")->find();
    }
    //根据用户邮箱进行判断登录
    public function selectEmail($email,$paswd){}
    //根据用户手机号进行判断登录
    public function selectPhone($Phone,$paswd){}
    //注册方式
    public function insert($array){
        
    }
    //ajax请求（邮箱验证）
    public function emailExit($email){
        $list =M("user");
        return $list=$list->where("email ='$email'")->find();
    }
    //ajax请求（用户名验证）
    public function  nameExit($name){
        $list =M("user");
        return $list=$list->where("name ='$name'")->find();
    }

}