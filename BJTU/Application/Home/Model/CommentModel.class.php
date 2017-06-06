<?php
/**
 * Created by PhpStorm.
 * User: zhangxuan
 * Date: 2017/5/20
 * Time: 19:47
 */

namespace Home\Model;
use Think\Model;
class CommentModel extends  Model
{
    //根据传过来的anid传出相应的数据
    function  selectByAnid($id){
        $list = M();
        return $list->query("SELECT comment.content commentcontent,user.name 
              uname,user.id uid,user.image uimage 
              FROM comment ,answer_comment,user,user_comment
              where comment.id=answer_comment.coid and  
              answer_comment.anid =$id and user.id=user_comment.uid
              and comment.id = user_comment.coid;");

    }

    function selectByCoid(){
        
    }
    function save($data,$uco,$anco){
        $comment =  M("Comment");
        $answer_comment =  M("answer_comment");
        $user_comment =  M("user_comment");
        $anco['coid']=$uco['coid'] = $comment->add($data);
        $answer_comment->add($anco);
        $user_comment ->add($uco);
    }
}