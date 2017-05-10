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
    //登录方式判断
    public function selectByName($name,$paswd){
        $list=M();
        return $list->query("select * from user where 
          (name =$name or phone =$name or eamil =$name )
           and password =$paswd");
        
    }
    //注册方式
    public function insert($array){
        
    }
}