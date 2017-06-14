<template>
  <div>
    <common-header headline="登录"></common-header>
    <div class="container-fluid">
      <div class="item">
        <label>请输入用户名：</label>
        <input v-model="uname" class="form-control" ref="username" type="text" placeholder="请输入用户名/注册邮箱"/>
      </div>
      <div class="item">
        <label>请输入密码：</label>
        <input v-model="passwd" class="form-control" ref="password" type="password" placeholder="请输入密码"/>
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
  import { mapGetters, mapMutations } from 'vuex'
  export default {
    components: {CommonHeader},
    name: 'login',
    data () {
      return {
        uname: '',
        passwd: ''
      }
    },
    methods: {
      ...mapMutations([
        'setUid',
        'setUserType',
        'setUserEmail'
      ]),
      login () {
        let formd = new window.FormData()
        let local = this
        formd.append('name', this.uname)
        formd.append('password', this.passwd)
        this.$http.post('http://139.199.5.64/BJTU/index.php/home/user/login', formd).then((response) => {
          let result = response.data
          if (result.result) {
            local.setUid(result.id)
            local.setUserEmail(local.uname)
            local.setUserType(result.type)
//            window.alert('登录成功！')
//            local.$router.back()
            local.$router.push('/')
          } else {
//            window.alert('用户名或密码错误！')
          }
//          console.log(response)
        }, (response) => {
        })
      }
    },
    computed: {
      ...mapGetters([
        'uInfo'
      ])
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
