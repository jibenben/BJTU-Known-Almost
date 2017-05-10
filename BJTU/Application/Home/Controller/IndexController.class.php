<?php

namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
    //首页展示信息
    public function index()
    {
        $Post = new \Home\Model\PostModel();
        $Topic =new \Home\Model\TopicModel();
        $array=$Post->index();
        $i=0;
        foreach ($array as $key){
            $arr=$Post->selectAnswerById($key['pid']);
            $array[$i]['answercontent']=mb_substr($arr[0]['content'],0,62,'UTF8');
            $array[$i]['answerLikeNumber']=$arr[0]['likeNumber'];
            $i++;
        }
        $i =0;
        foreach ($array as $key){
            $arr=$Topic->selectByPost($key['type']);
            $array[$i]['topic']=$arr['tcontent'];
            $array[$i]['topicurl']=$arr['url'];
            $i++;
        }
        echo header("Content-type:text/html;charset=utf-8");
        echo json_encode($array, JSON_UNESCAPED_UNICODE);
    }
    
}