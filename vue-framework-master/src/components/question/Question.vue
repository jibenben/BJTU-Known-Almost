<template>
  <div class="bg">
    <div class="container-fluid">
      <nav class="navbar-default navbar-fixed-top">
        <div class="row header">
          <div class="col-xs-2">
            <span @click="back()" class="glyphicon glyphicon-menu-left"></span>
          </div>
          <div class="col-xs-8 header-search">
            <input v-model="keyword" type="text" class="form-control" placeholder="搜索"/>
          </div>
          <div class="col-xs-2">
            <span @click="back()" class="glyphicon glyphicon-share"></span>
          </div>
        </div>
      </nav>
      <div style="margin-top: 40px">
      </div>
    </div>

    <div class="container-fluid">
      <div class="topic-container">
        <span class="topic" v-for="word in words">{{word}}</span>
      </div>
      <div class="title">
        <p>{{ qDetail.post[0].posttitle }}</p>
      </div>
      <div>
        <p>{{ qDetail.post[0].postcontent }}</p>
      </div>
      <div class="row desc-tail">
        <div class="col-xs-4">
          <span>{{ qDetail.post[0].uname }} 提问</span>
        </div>
        <div class="col-xs-4">
          <span>{{ qDetail.post[0].postcreatetime }}</span>
        </div>
        <div class="col-xs-4">
          <button @click="follow()" class="btn" :class="{ followed: isFollowed, noFollow: !isFollowed}">关注
          </button>
        </div>
      </div>
      <div class="row answer-div">
        <div class="col-xs-6 desc-answer" style="border-right: solid; border-width: 1px; border-color: #dddddd;">
          <span class="answer-btn">邀请回答</span>
        </div>
        <div class="col-xs-6 desc-answer">
          <span class="answer-btn">添加回答</span>
        </div>
      </div>
      <div class="row count-div">
        <div class="col-xs-6 answer-count">
          <span>{{ qDetail.answer.length }} 个回答</span>
        </div>
      </div>
    </div>
    <!--<question-desc :title="qDetail.post"></question-desc>-->
    <div class="container-fluid div-answer" v-for="a in qDetail.answer">
      <div class="row">
        <div class="col-xs-2">
          <img class="img-circle head" :src="a.image"/>
        </div>
        <div class="col-xs-3 answer-author">
          <span>{{ a.uname }}</span>
        </div>
      </div>
      <div>
        <router-link to="/answer/12343">{{ a.answercontent }}</router-link>
      </div>

      <div class="row answer-tail">
        <div class="col-xs-4">
          <span>{{ a.likeNumber }} 赞同</span>
        </div>
        <div class="col-xs-4">
          <router-link to="/comment/123123">{{ a.commentNumber }} 评论</router-link>
        </div>
        <div class="col-xs-4">
          <span>{{ a.time }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'question',
    mounted: function () {
      this.pid = this.$route.params.id
      let local = this
      let formd = new window.FormData()
      formd.append('pid', this.pid)
      this.$http.post('http://139.199.5.64/BJTU/index.php/home/index/detail', formd).then((response) => {
        console.log(response)
        local.qDetail = response.data
      }, (response) => {
      })
    },
    data () {
      return {
        pid: '',
        qDetail: ''
      }
    },
    methods: {
      follow () {
        if (this.isFollowed) {
          this.followText = '＋ 关注'
          this.isFollowed = false
        } else {
          this.followText = '已关注'
          this.isFollowed = true
        }
      },
      back () {
        window.history.back()
      }
    }
  }
</script>

<style scoped>
  .navbar-default {
    background-color: #fff;
    border-bottom: solid 1px #eeeeee;
  }

  .header {
    margin: 5px 0 5px 0;
  }

  .form-control {
    height: 24px;
  }

  .header-search {
    padding: 0;
  }

  input:-ms-input-placeholder {
    text-align: center;
  }

  input::-webkit-input-placeholder {
    text-align: center;
  }

  .glyphicon {
    font-size: 20px;
  }

  .bg {
    background-color: #eeeeee;
    margin: 0;
    padding: 0;
  }

  .title {
    font-weight: bold;
    font-size: 18px;
  }

  .desc-tail {
    line-height: 40px;
    white-space: nowrap;
    padding-bottom: 5px;
  }

  .topic {
    margin-right: 10px;
    padding: 5px;
    background-color: #EAF8FF;
    color: #698ebf;
  }

  .topic-container {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .btn {
    width: 100%;
  }

  .desc-answer {
    padding: 10px;
    text-align: center;
  }

  .answer-div {
    border-top: 1px solid #dddddd;
  }

  .answer-count {
    text-align: left;
  }

  .count-div {
    padding-top: 10px;
    background-color: #eeeeee;
  }

  .followed {
    background-color: #979797;
  }

  .noFollow {
    background-color: #0e7bef;
    color: #fff;
  }

  .btn:focus,
  .btn:hover {
    color: #fff;
    text-decoration: none;
  }

  .answer-author {
    line-height: 30px;
    white-space: nowrap;
  }

  .title {
    font-size: 18px;
    font-weight: bold;
    line-height: 30px;
    color: #000;
  }

  .answer-tail {
    margin-top: 5px;
    color: #aaaaaa;
  }

  .div-answer {
    padding-top: 2%;
    padding-bottom: 2%;
    margin-top: 2%;
  }
</style>
