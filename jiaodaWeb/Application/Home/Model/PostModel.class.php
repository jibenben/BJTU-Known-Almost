<?php
/**
 * Created by PhpStorm.
 * User: ji
 * Date: 2017/4/25
 * Time: 20:38
 */

namespace Home\Model;


class PostModel extends Model
{
    //显示所有的帖子
    public function  index(){
        return D("Post")->select();
    }
    //根据帖子的内容
    public  function  selectByEmail($content){
        return D("Post")->where("content = $content")->select();
    }
    //根据用户id查询
    public function selectByPhone($id){
        return D("Post")->where("owner = $id")->select();
    }
}