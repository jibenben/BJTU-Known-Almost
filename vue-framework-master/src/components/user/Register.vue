<template>
  <div>
    <common-header headline="注册"></common-header>

    <div class="container-fluid">
      <div class="item">
        <div>
          <label><span class="must">*  </span>填写您的邮箱</label>
          <label class="must" v-model="emailPrompt" :class="{ finish: isEmailFinish }">{{ emailPrompt }}</label>
          <button class="btn btn-default" :class="{ 'btn-sent': isSent, 'btn-verification': !isSent }" @click="sendVerification()" v-model="verification">{{ verification }}</button>
        </div>
        <input class="form-control" type="text" placeholder="请输入邮箱" v-model="email"/>
      </div>
      <div class="item">
        <label><span class="must">*  </span>填写您的邮箱收到的验证码</label>
        <label class="must" v-model="codePrompt" :class="{ finish: isCodeFinish }">{{ codePrompt }}</label>
        <input class="form-control" type="text" placeholder="请输入邮箱收到的验证码" v-model="code"/>
      </div>
      <div class="item">
        <label><span class="must">*  </span>设置您的密码</label>
        <label class="must" v-model="passwordPrompt" :class="{ finish: isPasswordFinish }">{{ passwordPrompt }}</label>
        <input class="form-control" type="password" placeholder="请输入密码" v-model="password"/>
      </div>
      <div class="item">
        <label><span class="must">*  </span>再次输入密码</label>
        <label class="must" v-model="rePasswordPrompt" :class="{ finish: isRepasswordFinish }">{{ rePasswordPrompt }}</label>
        <input class="form-control" type="password" placeholder="请再次输入密码" v-model="repassword"/>
      </div>

      <div class="item div-btn">
        <!--<router-link to="/">-->
        <button @click="register()" class="btn btn-default btn-register">注册</button>
        <!--</router-link>-->
      </div>
    </div>
  </div>
</template>

<script>
  import CommonHeader from '../header/CommonHeader'
  export default {
    components: {
      CommonHeader
    },
    name: 'register',
    data () {
      return {
        email: '',
        password: '',
        repassword: '',
        code: '',
        emailPrompt: '',
        passwordPrompt: '',
        rePasswordPrompt: '',
        mailPrompt: '',
        codePrompt: '',
        isPasswordFinish: false,
        isEmailFinish: false,
        isRepasswordFinish: false,
        isCodeFinish: false,
        isSent: false,
        verification: '发送验证码'
      }
    },
    methods: {
      register () {
        if (this.isPasswordFinish && this.isRepasswordFinish && this.isEmailFinish && this.isCodeFinish) {
          let formd = new window.FormData()
          let local = this
          formd.append('mail', this.email)
          formd.append('password', this.password)
          formd.append('pwd', this.code)
          this.$http.post('http://139.199.5.64/bjtu/index.php/home/user/register', formd).then((response) => {
            if (response.data === 1) {
              window.alert('注册成功！')
              local.$router.push('/login')
            }
          }, (response) => {
          })
//          this.$http.post()
        }
      },
      sendVerification () {
        if (this.isEmailFinish) {
          let formd = new window.FormData()
          formd.append('mail', this.email)
          this.isSent = true
          this.verification = '已发送'
          this.$http.post('http://139.199.5.64/bjtu/index.php/home/user/send', formd).then((response) => {
            console.log(response)
          }, (response) => {
          })
        }
      }
    },
    watch: {
      email: function () {
        let reg = new RegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/)
        if (reg.test(this.email)) {
          this.emailPrompt = '完成'
          this.isEmailFinish = true
        } else {
          this.emailPrompt = '邮箱格式错误！'
          this.isEmailFinish = false
        }
      },
      code: function () {
        if (this.code.length < 6) {
          this.codePrompt = '验证码过短！'
          this.isCodeFinish = false
        } else {
          this.codePrompt = '完成'
          this.isCodeFinish = true
        }
      },
      password: function () {
        if (this.password.length < 6) {
          this.passwordPrompt = '密码长度过短！'
          this.isPasswordFinish = false
        } else {
          this.passwordPrompt = '完成'
          this.isPasswordFinish = true
        }
      },
      repassword: function () {
        if (this.repassword === this.password) {
          this.rePasswordPrompt = '完成'
          this.isRepasswordFinish = true
        } else {
          this.rePasswordPrompt = '两次密码不一致！'
          this.isRepasswordFinish = false
        }
      }
    }
  }
</script>

<style scoped>
  .item {
    margin: 10px 0 20px 0;
  }

  label {
    color: #0e7bef;
    font-weight: normal;
    margin-bottom: 16px;
  }

  .btn-register {
    width: 100%;
    background-color: #0e7bef;
    color: #fff;
  }

  .div-btn {
    margin-top: 20px;
  }

  .must {
    color: red;
  }

  .finish {
    color: #0a0;
  }
  .btn-sent {
    background-color: #aaaaaa;
    color: #000;
    border: none;
    box-shadow: none;
    float: right;
  }

  .btn-verification {
    background-color: #0e7bef;
    color: #fff;
    border: none;
    box-shadow: none;
    float: right;
  }
</style>
