<template>
  <div class="container-fluid">
    <div>
      <label>用户名：</label>
      <input ref="username" type="text" placeholder="请输入用户名"/>
    </div>
    <div>
      <label>密码：</label>
      <input ref="password" type="password" placeholder="请输入密码"/>
    </div>
    <div>
      <button @click="login()" class="btn btn-default">登录</button>
    </div>
    <div>
      <router-link to="/register">
        <button class="btn btn-default">注册</button>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    methods: {
      login () {
        return true
      }
    }
  }
</script>

<style scoped>

</style>
