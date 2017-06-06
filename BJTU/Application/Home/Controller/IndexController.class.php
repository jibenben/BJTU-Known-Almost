<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
    //首页展示信息接口
    public function index()
    {
       $combine =new \Home\Model\CombineModel();
        $array=$combine->index();
        echo header('Access-Control-Allow-Origin:*');
        echo header("Content-type:text/html;charset=utf-8");
        echo json_encode($array, JSON_UNESCAPED_UNICODE);
    }


    //查询信息接口
    public function search()
    {
        $Post = new \Home\Model\PostModel();
        $array=$Post->search($_POST['key']);
        echo header('Access-Control-Allow-Origin:*');
        echo header("Content-type:text/html;charset=utf-8");
        echo json_encode($array, JSON_UNESCAPED_UNICODE);
    }
    //帖子详情展示接口
    public function  detail(){
        $Post = new \Home\Model\PostModel();
        $Answer =new \Home\Model\AnswerModel();
        $array=array("post"=>$Post->detail($_POST['pid']),
            "answer"=>$Answer->selectByPid($_POST['pid']));
        echo header('Access-Control-Allow-Origin:*');
        echo header("Content-type:text/html;charset=utf-8");
        echo json_encode($array, JSON_UNESCAPED_UNICODE);
    }

    //回答展示接口
    public function displayAnswer(){
        $Answer =new \Home\Model\AnswerModel();
        $array=$Answer->selectByAnid($_POST['anid']);
        echo header('Access-Control-Allow-Origin:*');
        echo header("Content-type:text/html;charset=utf-8");
        echo json_encode($array, JSON_UNESCAPED_UNICODE);
    }
    //评论展示界面
    public  function displayComment(){
        $Comment =new \Home\Model\CommentModel();
        $array = $Comment ->selectByAnid($_POST['anid']);
        echo header('Access-Control-Allow-Origin:*');
        echo header("Content-type:text/html;charset=utf-8");
        echo json_encode($array, JSON_UNESCAPED_UNICODE);    
    }

    //插入帖子接口
    public function post(){
        $post = new \Home\Model\PostModel();
        echo header('Access-Control-Allow-Origin:*');
        echo header("Content-type:text/html;charset=utf-8");
        if(!isset($_POST['uid'])||!isset($_POST['topicid'])||!isset($_POST['title']))
            echo "添加帖子失败";
        $data['title']=$_POST['title'];
        $data['content']=$_POST['content'];
        $data['type']=$_POST['topicid'];
        $UP['uid'] =$_POST['uid'];
        $post->save($data,$UP);
        echo "添加帖子成功";
    }
    //查询话题接口
    public function topic(){
        $topic =new \Home\Model\TopicModel();
        $array=$topic->index();
        echo header('Access-Control-Allow-Origin:*');
        echo header("Content-type:text/html;charset=utf-8");
        echo json_encode($array, JSON_UNESCAPED_UNICODE);
    }
    //插入回答接口
    public function answer(){
        echo header('Access-Control-Allow-Origin:*');
        echo header("Content-type:text/html;charset=utf-8");
        if(!isset($_POST['uid'])||!isset($_POST['pid']))
            echo "回答失败";
        $data['content'] =$_POST['content'];
        $pa['pid'] = $_POST['pid'];
        $ua['uid'] = $_POST['uid'];
        $answer = new \Home\Model\AnswerModel();
        $answer ->save($data, $pa, $ua);
            echo "回答成功";
    }
    //插入评论接口
    public function comment(){
        echo header('Access-Control-Allow-Origin:*');
        echo header("Content-type:text/html;charset=utf-8");
        if(!isset($_POST['uid'])||!isset($_POST['anid']))
            echo "评论失败";
        $data['content'] =$_POST['content'];
        $anco['anid'] = $_POST['anid'];
        $uco['uid'] = $_POST['uid'];
        $comment = new \Home\Model\CommentModel();
        $comment ->save($data,$uco,$anco);
        echo "评论成功";
    }
}