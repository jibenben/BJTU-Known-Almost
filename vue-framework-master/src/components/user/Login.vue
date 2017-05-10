<template>
  <div>
    <common-header headline="登录"></common-header>
    <div class="container-fluid">
      <div class="item">
        <label>请输入用户名：</label>
        <input class="form-control" ref="username" type="text" placeholder="请输入用户名/注册邮箱"/>
      </div>
      <div class="item">
        <label>请输入密码：</label>
        <input class="form-control" ref="password" type="password" placeholder="请输入密码"/>
      </div>
      <div class="item">
        <button @click="login()" class="btn btn-default btn-login">登录</button>
      </div>
      <div class="item" style="text-align: center">
        <label>暂无账号？</label>
        <router-link to="/register">
          <button class="btn btn-default btn-register">注册</button>
        </router-link>
      </div>
    </div>
  </div>

</template>

<script>
  import CommonHeader from '../header/CommonHeader'
  export default {
    components: {CommonHeader},
    name: 'login',
    methods: {
      login () {
        return true
      }
    }
  }
</script>

<style scoped>

  .btn {
    width: 100%;
    height: 40px;
  }
  .item {
    margin: 20px 0 20px 0;
    /*text-align: center;*/
  }

  .btn-login {
    background-color: #0e7bef;
    color: #fff;
  }

  .btn-register {
    color: #0e7bef;
    border: 1px solid #0e7bef;
  }

  label {
    font-weight: normal;
    margin-bottom: 20px;
  }
</style>
