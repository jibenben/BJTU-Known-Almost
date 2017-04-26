<template>
  <div class="container-fluid">
    <div class="topicContainer">
      <span class="topic" v-for="word in words">{{word}}</span>
    </div>
    <div class="title">
      <p>{{ questionTitle }}</p>
    </div>
    <div class="desc">
      <p>{{ questionDesc }}</p>
    </div>
    <div class="row tail">
      <div class="col-xs-3">
        <span>{{ followCount }} 人关注</span>
      </div>
      <div class="col-xs-3">
        <span>{{ commentCount }} 条评论</span>
      </div>
      <div class="col-xs-6">
        <button class="btn">＋ 关注</button>
      </div>
    </div>
    <div class="row answerDiv">
      <div class="col-xs-6 answer" style="border-right: solid; border-width: 1px; border-color: #dddddd;">
        <span class="answerBtn">邀请回答</span>
      </div>
      <div class="col-xs-6 answer">
        <span class="answerBtn">添加回答</span>
      </div>
    </div>
    <div class="row countDiv">
      <div class="col-xs-6 answerCount">
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
        answerCount: 31
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
  }
  .topic {
    margin-right: 10px;
    padding: 5px;
    background-color: #EAF8FF;
    color: #698ebf;
  }
  .topicContainer {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .btn {
    float: right;
    padding-left: 20px;
    padding-right: 20px;
    background-color: #0e7bef;
    color: #fff;
  }
  .answer {
    padding: 10px;
    text-align: center;
  }
  .answerDiv {
    border-top: solid;
    border-width: 1px;
    border-color: #dddddd;
  }
  .answerCount {
    text-align: left;
  }
  .countDiv {
    padding-top: 10px;
    background-color: #eeeeee;
    /*padding-bottom: 10px;*/
  }
</style>
