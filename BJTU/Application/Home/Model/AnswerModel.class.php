<?php
/**
 * Created by PhpStorm.
 * User: zhangxuan
 * Date: 2017/5/20
 * Time: 14:36
 */

namespace Home\Model;
use Think\Model;
class AnswerModel extends Model
{
    function selectByPid($id){
        $list =M();
        return $list->query("select  answer.content answercontent,commentNumber,likeNumber,answer.id anid,user.name uname 
                     from post_answer,answer,user ,user_answer
                     where user.id = user_answer.uid and answer.id =user_answer.anid
                    and post_answer.anid =answer.id and post_answer.pid =$id");
    }

    function selectByAnid($id){
        $list =M();
        return $list->query("select  content answercontent  ,image uimage,
likeNumber,CommentNumber ,answer.id anid,name uname ,user.id uid 
from user,answer ,user_answer where
 user.id =user_answer.uid and answer.id=user_answer.anid and answer.id =$id;");
    }
    
    //插入回答
    function save($data,$pa,$ua){
        $answer =  M("Answer");
        $post_answer =  M("post_answer");
        $user_answer =  M("user_answer");
        $pa["anid"] = $ua['anid'] =$answer->add($data);
        $post_answer->add($pa);
        $user_answer ->add($ua);
    }
}