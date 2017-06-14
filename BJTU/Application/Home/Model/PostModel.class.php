<?php
namespace Home\Model;

use Think\Model;
class PostModel extends Model
{
    //直接返回关于贴子的一些问题
    public function index(){
        $list=M();
        return $list->query("select  id pid,createtime,followNumber,title,type from post;");
    }
    //直接返回相应帖子的ID，标题，关注人数
    public  function search($key){
        $list=M();
        $array= $list->query("select id pid,title posttitle ,followNumber from post where title like '%$key%'");
        return $array;
    }
    //返回贴子的全部信息(包括发帖人)
    public function detail($id){
        $list=M();
        $array= $list->query("select  post.ID pid,title posttitle ,content postcontent ,createtime postcreatetime ,name uname from 
                    post,user_post,user where post.id =$id 
                    and post.id =user_post.pid 
                    and user.id =user_post.uid;");
        return $array;
    }
    //插入帖子内容
    public  function save($data,$UP){
        $model =M("Post");
        $UP['pid']=$model ->add($data);
        $User_Post=M("User_post");
        $User_Post->add($UP);
    }
    //插入帖子关注接口
    public  function follow_post($uid,$pid,$flag){
        $list =M("User_follow_post");
        $data['flag'] =$flag;
        $list_post=M("Post");
        $array = $list->where("uid = $uid and pid =$pid") ->find();
        $array_post =$list_post->where("id= $pid") ->find();
        if($array==null){
            $data['uid'] = $uid;
            $data['pid'] =$pid;
            $list->add($data);
            $data_post['likeNumber']=$array_post['likeNumber']+1;
            $list_post->where("id = $pid")->save($data_post);
        }else{
            $list->where("uid = $uid and pid =$pid")->save($data);
            if($flag==0){
                $data_post['likeNumber']=$array_post['likeNumber']-1;
                $list_post->where("id = $pid")->save($data_post);
            }else{
                $data_post['likeNumber']=$array_post['likeNumber']+1;
                $list_post->where("id = $pid")->save($data_post);
            }
        }
    }

}