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
    //添加点赞取消点赞功能
    function like($uid,$coid,$flag){
        $list =M("User_like_comment");
        $data['flag'] =$flag;
        $list_Comment=M("Comment");
        $array = $list->where("uid = $uid and anid =$coid") ->find();
        $array_Comment =$list_Comment->where("id= $coid") ->find();
        if($array==null){
            $data['uid'] = $uid;
            $data['coid'] =$coid;
            $list->add($data);
            $data_Comment['likeNumber']=$array_Comment['likeNumber']+1;
            $list_Comment->where("id = $coid")->save($data_Comment);
        }else{
            $list->where("uid = $uid and anid =$coid")->save($data);
            if($flag==0){
                $data_Comment['likeNumber']=$array_Comment['likeNumber']-1;
                $list_Comment->where("id = $coid")->save($data_Comment);
            }else{
                $data_Comment['likeNumber']=$array_Comment['likeNumber']+1;
                $list_Comment->where("id = $coid")->save($data_Comment);
            }
        }
    }
}