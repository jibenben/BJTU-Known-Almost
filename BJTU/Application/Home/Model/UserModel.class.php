<?php

/**
 * Created by PhpStorm.
 * User: zhangxuan
 * Date: 2017/5/9
 * Time: 11:39
 */
namespace  Home\Model;
use Think\Model;
class UserModel extends  Model
{
    //根据用户姓名进行判断登录
    public function selectName($name,$paswd){
        $list=M("user");
        return $list->where("email = '$name' and password = '$paswd'") ->find();
    }
    //根据用户邮箱进行判断登录
    public function selectEmail($email,$paswd){}
    //根据用户手机号进行判断登录
    public function selectPhone($Phone,$paswd){}
    //注册方式
    public function insert($array){
        
    }
    //ajax请求（邮箱验证）
    public function emailExit($email){
        $list =M("user");
        return $list=$list->where("email ='$email'")->find();
    }
    //ajax请求（用户名验证）
    public function  nameExit($name){
        $list =M("user");
        return $list=$list->where("name ='$name'")->find();
    }
    //将验证码写入数据库供判断注册
    public  function mail_pwd($mail,$pwd){
        $date['pwd']  =$pwd;
        $list =M("Mail_pwd");

        $array = $list->where("mail = '$mail'")->find();
        if($array!=null){
            $list->where("mail = '$mail'")->save($date);

        }else{
            $data['mail'] = $mail;
            $list -> add($date);
        }
    }

    //添加用户follow
    public  function follow_user($uid,$follow_uid,$flag){
        $list =M("User_follow_user");
        $data['flag'] =$flag;
        $list_user=M("User");
        $array = $list->where("uid = $uid and uidfollow =$follow_uid") ->find();
        $array_user =$list_user->where("id= $follow_uid") ->find();
        if($array==null){
            $data['uid'] = $uid;
            $data['uidfollow'] =$follow_uid;
            $list->add($data);
            $data_user['likeNumber']=$array_user['likeNumber']+1;
            $list_user->where("id = $follow_uid")->save($data_user);
        }else{
            $list->where("uid = $uid and uidfollow =$follow_uid")->save($data);
            if($flag==0){
                $data_user['likeNumber']=$array_user['likeNumber']-1;
                $list_user->where("id = $follow_uid")->save($data_user);
            }else{
                $data_user['likeNumber']=$array_user['likeNumber']+1;
                $list_user->where("id = $follow_uid")->save($data_user);
            }
        }
    }

}