<?php
/**
 * Created by PhpStorm.
 * User: ji
 * Date: 2017/4/14
 * Time: 10:07
 */

namespace Home\Model;
use Think\Model\MongoModel;
Class UserModel extends MongoModel
{
    //可以是空的。
    public function  index(){
        return D("Student")->select();
    }
    //根据用户的邮箱查询
    public  function  selectByEmail($email){
        return D("Student")->where("email = $email")->select();
    }
    //根据用户的手机号查询
    public function selectByPhone($phone){
        return D("Student")->where("phone = $phone")->select();
    }
}