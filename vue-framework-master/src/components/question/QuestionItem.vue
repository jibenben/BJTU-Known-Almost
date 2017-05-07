<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-2">
        <img class="img-circle head" :src="portraitImg"/>
      </div>
      <div class="col-xs-8 theme">
        <p>来自话题：{{ from }}</p>
      </div>
    </div>
    <div>
      <router-link to="/question/11123" class="title">{{ title }}</router-link>
    </div>
    <div>
      <img class="abImg" :src="abstractImg"/>
    </div>
    <div class="text">
      <router-link to="/answer/13321">{{ author }}：{{ abstract }}</router-link>
    </div>
    <div class="row tail">
      <div class="col-xs-4">
        <p>{{ likeCount }} 赞同</p>
      </div>
      <div class="col-xs-4">
        <router-link to="/comment/13431">{{ commentCount }} 评论</router-link>
      </div>
      <div class="col-xs-4">
        <p @click="follow">{{ isAttention? '已关注' : '关注问题' }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'questionItem',
    data () {
      return {
        from: '生活方式',
        title: '微信和苹果，你会选择哪一个？',
        author: 'bfjei',
        abstract: '就一个方向来说，现在大力提倡反腐，纪委同志也是有指标KPI的啊，如果A，B两个官员有问题，A农民出身后面跟着一堆穷亲戚，B是官二代出身后面跟着常委的爹，请问各位纪委同志，你抓谁？再说几句好了，《人民的名义》播出到现在，我从中读到了一些另类的东西...',
        portraitImg: '/static/head.png',
        isAttention: false,
        likeCount: '1122',
        commentCount: '21',
        abstractImg: '/static/head.png',
        commentId: 123431
//        questionId: 13443
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
