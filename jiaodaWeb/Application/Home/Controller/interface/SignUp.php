<?php
/**
 * Created by PhpStorm.
 * User: zhangxuan
 * Date: 2017/5/8
 * Time: 20:40
 */

namespace Home\Model;


interface SignUp
{
    public function signup($username,$password,$phone,$email);
}