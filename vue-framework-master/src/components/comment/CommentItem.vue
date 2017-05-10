<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-2">
        <img class="img-circle head" :src="portraitImg"/>
      </div>
      <div class="col-xs-10 right">
        <div>
          <p>{{ uname }}</p>
        </div>
        <div>
          <p>{{ commentContent }}</p>
        </div>
        <div class="row">
          <div class="col-xs-3">
            <span>{{ commentLikeCount }} 赞</span>
          </div>
          <div class="col-xs-3">
            <span>回复</span>
          </div>
          <div class="col-xs-6">
            <span>{{ commentTime }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'commentItem',
    data () {
      return {
        uname: 'Swim',
        commentContent: '谢谢！看到你的回答也许是天意，茅塞顿开',
        commentLikeCount: 11,
        commentTime: '昨天22:17',
        portraitImg: '/static/head.png'
      }
    }
  }
</script>

<style scoped>
  .container-fluid {
    padding-top: 5px;
    padding-bottom: 5px;
  }
  span {
    white-space: nowrap;
  }
  .right {
    border-bottom: solid 1px #eeeeee;
    padding-bottom: 5px;
    padding-left: 0;
  }
  p {
    padding-top: 5px;
    margin-bottom: 5px;
    font-size: 12px;
  }

  .row {
    font-size: 12px;
  }
</style>
