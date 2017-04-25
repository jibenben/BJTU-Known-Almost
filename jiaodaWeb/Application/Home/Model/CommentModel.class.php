<?php
/**
 * Created by PhpStorm.
 * User: ji
 * Date: 2017/4/25
 * Time: 20:45
 */

namespace Home\Model;


class CommentModel extends Model
{
    public function  index(){
        return D("Comment")->select();
    }
    public  function  selectByEmail($id){
        return D("Comment")->where("owner = $id")->select();
    }
    public function selectByPhone($id){
        return D("Comment")->where("pid = $id")->select();
    }
}