<?php
/**
 * Created by PhpStorm.
 * User: zhangxuan
 * Date: 2017/5/10
 * Time: 19:11
 */

namespace Home\Model;

use Think\Model;
class TopicModel  extends Model
{
    public function selectByPost($id){
        return M("topic")->where("tid =$id") ->find();
    }
    public function index(){
        return M("topic")->select();
    }

}