<template>
  <div>
    <nav class="navbar-default navbar-fixed-top">
      <input type="text" class="form-control" placeholder="搜索">
    </nav>
    <div style="margin-top: 40px">
    </div>
    <div v-for="q in questions" class="container-fluid">
      <div class="row">
        <div class="col-xs-2">
          <img class="img-circle head" :src="q.topicurl"/>
        </div>
        <div class="col-xs-8 theme">
          <span>来自话题：{{ q.topic }}</span>
        </div>
      </div>
      <div>
        <router-link to="/question/11123" class="title">{{ q.content }}</router-link>
      </div>
      <div>
        <img v-if="false" class="abImg" :src="abstractImg"/>
      </div>
      <div class="text">
        <router-link to="/answer">{{ q.name }}：{{ q.answercontent }}</router-link>
      </div>
      <div class="row tail">
        <div class="col-xs-4">
          <span>{{ q.answerLikeNumber }} 赞同</span>
        </div>
        <div class="col-xs-4">
          <router-link to="/comment">{{ }} 评论</router-link>
        </div>
        <div class="col-xs-4">
          <span @click="follow">{{ '关注问题' }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    created: function () {
      let req = {
        questionNum: 10
      }
      let local = this
      this.$http.get('http://139.199.5.64/BJTU/index.php/home/index', req).then((response) => {
//        console.log(response)
//        JSON.parse(response.data)
        console.log(response.data)
        local.questions = response.data
      }, (response) => {
      })
    },
    data () {
      return {
        questions: []
      }
    },
    methods: {
      follow () {
        if (this.isAttention) {
          this.isAttention = false
        } else {
          this.isAttention = true
        }
      }
    }
  }
</script>

<style scoped>
  .col-xs-8 {
    padding-left: 0;
  }

  .navbar-default {
    padding: 5px 0 5px 0;
    border-bottom: 1px solid #eeeeee;
  }

  input:-ms-input-placeholder {
    text-align: center;
  }

  input::-webkit-input-placeholder {
    text-align: center;
  }

  .form-control {
    margin: 0;
    padding: 0;
    height: 26px;
  }

  .container-fluid {
    padding-top: 2%;
    padding-bottom: 2%;
    margin-top: 2%;
  }

  .title {
    font-size: 16px;
    font-weight: bold;
    line-height: 30px;
    color: #000;
  }

  .theme {
    /*float: left;*/
    /*margin-left: 10px;*/
    height: 30px;
    line-height: 30px;
  }

  .text {
    margin-top: 5px;
    font-size: 14px;
    /*line-height: 14px;*/
  }

  p {
    margin: 0;
  }

  .abImg {
    width: 100%;
    height: 150px;
  }

  .tail {
    margin-top: 5px;
    color: #aaaaaa;
    white-space: nowrap;
  }
</style>
