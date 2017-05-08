<?php
/**
 * Created by PhpStorm.
 * User: zhangxuan
 * Date: 2017/5/8
 * Time: 20:39
 */

namespace Home\Model;


interface Login
{
    public function login($userName,$password);

}