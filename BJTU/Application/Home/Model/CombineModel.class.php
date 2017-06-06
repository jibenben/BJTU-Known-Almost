<?php
/**
 * Created by PhpStorm.
 * User: zhangxuan
 * Date: 2017/5/25
 * Time: 9:20
 */

namespace Home\Model;


use Think\Model;

class CombineModel extends  Model
{
    public function  index(){
        $Post = new \Home\Model\PostModel();
        $Topic =new \Home\Model\TopicModel();
        $Answer =new \Home\Model\AnswerModel();
        $array=$Post->index();
        $i =0;
        foreach($array as $key){
            $arr =$Answer->selectByPid($key['pid']);
            $arrt =$Topic->selectByPost($key['type']);
            $array[$i]["anid"]=$arr[0]['anid'];
            $array[$i]['answercontent']=$arr[0]['answercontent'];
            $array[$i]['commentNumber']=$arr[0]['commentNumber'];
            $array[$i]['likeNumber']=$arr[0]['likeNumber'];
            $array[$i]['uname']=$arr[0]['uname'];
            $array[$i]['topic']=$arrt['tconent'];
            $array[$i]['topicimage']=$arrt['image'];
            $i++;

        }
        return $array;
    }
}