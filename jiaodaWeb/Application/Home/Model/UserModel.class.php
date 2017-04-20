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
        return D("user")->select();
    }
}