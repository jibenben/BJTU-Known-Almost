<?php
/**
 * Created by PhpStorm.
 * User: zhangxuan
 * Date: 2017/5/14
 * Time: 15:25
 */

namespace Home\Controller;
use Think\Controller;
require './ThinkPHP/Library/Org/Util/phpmailer.class.php';
require './ThinkPHP/Library/Org/Util/smtp.class.php';
class EmailController   extends Controller
{
    function SendMail(){
        //引入文件
        //实例化邮件类
        $mail=new \Org\Util\Mailer();
        // 设置PHPMailer使用SMTP服务器发送Email
        $mail->IsSMTP();
        // 设置邮件的字符编码，若不指定，则为'UTF-8'
        $mail->CharSet='UTF-8';
        // 添加收件人地址，可以多次使用来添加多个收件人
        $address ="1624003403@qq.com";
        $mail->AddAddress($address);
        // 设置邮件正文
        $mail->Body="hello, this is a test!";
        // 设置邮件头的From字段。//发件人
        $mail->From=C('MAIL_ADDRESS');
        // 设置发件人名字
        $mail->FromName='LilyRecruit';
        // 设置邮件标题
        $mail->Subject="test";
        // 设置SMTP服务器。
        $mail->Host=C('MAIL_SMTP');
        // 设置为"需要验证"
        $mail->SMTPAuth=true;
        // 设置用户名和密码。
        $mail->Username=C('MAIL_LOGINNAME');
        $mail->Password=C('MAIL_PASSWORD');
        // 发送邮件。
        return($mail->Send());
    }
}