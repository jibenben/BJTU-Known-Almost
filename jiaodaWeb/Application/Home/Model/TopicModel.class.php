<?php
/**
 * Created by PhpStorm.
 * User: ji
 * Date: 2017/4/25
 * Time: 21:02
 */

namespace Home\Model;


class TopicModel extends  Model
{
    public function  index(){
        return D("topic")->select();
    }
    public  function  selectByEmail($id){
        return D("topic")->where("id = $id")->select();
    }

}