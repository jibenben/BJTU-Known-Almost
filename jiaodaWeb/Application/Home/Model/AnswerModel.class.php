<?php
/**
 * Created by PhpStorm.
 * User: ji
 * Date: 2017/4/25
 * Time: 20:42
 */

namespace Home\Model;


class AnswerModel extends Model
{
    public function  index(){
        return D("Answer")->select();
    }
    public  function  selectByEmail($id){
        return D("Answer")->where("owner = $id")->select();
    }
    public function selectByPhone($id){
        return D("Answer")->where("pid = $id")->select();
    }
}