<template>
  <div>
    <common-header headline="注册"></common-header>

    <div class="container-fluid">
      <div class="item">
        <label>设置您的用户名</label><label v-model="namePrompt">{{ namePrompt }}</label>
        <input class="form-control" type="email" placeholder="请输入用户名"/>
      </div>
      <div class="item">
        <label>设置您的密码</label><label v-model="passwordPrompt">{{ passwordPrompt }}</label>
        <input class="form-control" type="password" placeholder="请输入密码"/>
      </div>
      <div class="item">
        <label>再次输入密码</label><label v-model="rePasswordPrompt">{{ rePasswordPrompt }}</label>
        <input class="form-control" type="password" placeholder="请再次输入密码"/>
      </div>
      <div class="item">
        <label>填写您的邮箱</label><label v-model="mailPrompt">{{ mailPrompt }}</label>
        <input class="form-control" type="email" placeholder="请输入邮箱"/>
      </div>
      <div class="item">
        <label>填写您的邮箱收到的验证码</label><label v-model="codePrompt">{{ codePrompt }}</label>
        <input  class="form-control" type="email" placeholder="请输入邮箱收到的验证码"/>
      </div>
      <div class="item center">
        <!--<router-link to="/">-->
        <button @click="register()" class="btn btn-primary">注册</button>
        <!--</router-link>-->
      </div>
    </div>
  </div>
</template>

<script>
  import CommonHeader from '../header/CommonHeader'
  export default {
    components: {
      CommonHeader},
    name: 'register',
    data () {
      return {
        namePrompt: '',
        passwordPrompt: '',
        rePasswordPrompt: '',
        mailPrompt: '',
        codePrompt: ''
      }
    },
    methods: {
      register () {
      }
    }
  }
</script>

<style scoped>
  .item {
    margin: 10px 0 10px 0;
  }
  label {
    color: #337ab7;
  }
  .btn {
    width: 100%;
  }

</style>
