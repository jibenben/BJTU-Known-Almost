<template>
  <div class="container-fluid">
    <div class="topic-container">
      <span class="topic" v-for="word in words">{{word}}</span>
    </div>
    <div class="title">
      <p>{{ questionTitle }}</p>
    </div>
    <div class="desc">
      <p>{{ questionDesc }}</p>
    </div>
    <div class="row tail">
      <div class="col-xs-4">
        <span>{{ followCount }} 人关注</span>
      </div>
      <div class="col-xs-4">
        <span>{{ commentCount }} 条评论</span>
      </div>
      <div class="col-xs-4">
        <button @click="follow" class="btn" :class="{ followed: isFollowed, noFollow: !isFollowed}">{{ followText }}</button>
      </div>
    </div>
    <div class="row answer-div">
      <div class="col-xs-6 answer" style="border-right: solid; border-width: 1px; border-color: #dddddd;">
        <span class="answer-btn">邀请回答</span>
      </div>
      <div class="col-xs-6 answer">
        <span class="answer-btn">添加回答</span>
      </div>
    </div>
    <div class="row count-div">
      <div class="col-xs-6 answer-count">
        <span>{{ answerCount }}个回答</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {
    },
    name: 'questionDesc',
    data () {
      return {
        words: ['手机', '科技', '危机公关', '华为手机', '...'],
        questionTitle: '微信和苹果，你会选择哪一个？',
        questionDesc: '今日iOS版微信公众平台的赞赏功能由于苹果的相关政策被关闭，假如有一天苹果手机不支持微信APP，你会怎么办？',
        followCount: 43215,
        commentCount: 2343,
        answerCount: 31,
        followText: '＋ 关注',
        isFollowed: false
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
      }
    }
  }
</script>

<style scoped>
  .title {
    font-weight: bold;
    font-size: 18px;
  }
  .tail {
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
  .answer {
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
</style>
