<?php
namespace Home\Model;

use Think\Model;
class PostModel extends Model
{
    //直接返回所有的信息
    public function index(){
        $list=M();
        return $list->query("select type ,pid, content,name ,createtime from 
                  user_post ,user,post 
                  where post.id=user_post.pid 
                  and user.id=user_post.uid;");
    }
    //根据需要查找相应的数据主要是分页
    public function selectBypage($start,$end){
        $list=M();
        return $list->query("select pid, content,name ,createtime from 
                  user_post ,user,post 
                  where post.id=user_post.pid 
                  and user.id=user_post.uid limit $start,$end;");
    }
    //根据id返回一个一维数组的content
    public function selectAnswerById($pid){
        $list=M();
        return $list->query("select answer.content ,likeNumber from answer,post_answer 
                    where answer.id= post_answer.anid 
                  and post_answer.pid= $pid limit 0,1");
    }
    
}