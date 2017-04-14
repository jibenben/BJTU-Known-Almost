<?php
namespace Home\Controller;
use Home\Model\UserModel;
use Think\Controller;
class IndexController extends Controller {
    public function index()
    {
        $model=new UserModel();
        $a = $model->index();
        dump($a);
    }
}