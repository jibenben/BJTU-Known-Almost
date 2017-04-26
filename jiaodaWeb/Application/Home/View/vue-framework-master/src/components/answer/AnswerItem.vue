<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-2 protrait">
        <img class="img-circle head" :src="portraitImg"/>
      </div>
      <div class="col-xs-2 author">
        <p>{{ author }}</p>
      </div>
    </div>
    <div>
    </div>
    <div>
      <router-link to="/answer/12343">{{ abstract }}</router-link>
    </div>
    <div class="row tail">
      <div class="col-xs-3">
        <p>{{ likeCount }} 赞同</p>
      </div>
      <div class="col-xs-3">
        <router-link to="/comment/123123">{{ commentCount }} 评论</router-link>
      </div>
      <div class="col-xs-6">
        <span>{{ answerTime }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'answerItem',
    data () {
      return {
        from: '来自话题：生活方式',
        title: '微信和苹果，你会选择哪一个？',
        author: 'bfjei',
        abstract: '就一个方向来说，现在大力提倡反腐，纪委同志也是有指标KPI的啊，如果A，B两个官员有问题，A农民出身后面跟着一堆穷亲戚，B是官二代出身后面跟着常委的爹，请问各位纪委同志，你抓谁？再说几句好了，《人民的名义》播出到现在，我从中读到了一些另类的东西...',
        portraitImg: '/static/head.png',
        likeCount: '1122',
        commentCount: '21',
        attention: '关注问题',
        answerTime: '10小时前',
        answer: {
          id: 12343
        }
      }
    },
    methods: {
      follow () {
        this.attention = '已关注'
      }
    }
  }
</script>

<style scoped>
  .container-fluid {
    padding-top: 2%;
    padding-bottom: 2%;
    margin-top: 2%;
  }
  .head {
    width: 40px;
    height: 40px;
  }
  .author {
    line-height: 40px;
    white-space: nowrap;
  }
  .title {
    font-size: 18px;
    font-weight: bold;
    line-height: 30px;
    color: #000;
  }
  .theme {
    line-height: 40px;
  }
  p {
    margin: 0;
  }
  .abImg {
    width: 100%;
    height: 150px;
  }
  .tail {
    color: #aaaaaa;
  }
</style>
