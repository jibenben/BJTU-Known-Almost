<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-2 protrait">
        <img class="img-circle head" :src="portraitImg"/>
      </div>
      <div class="col-xs-2 author">
        <span>{{ author }}</span><br/>
        <span>{{ selfDesc }}</span>
      </div>
      <div class="col-xs-8">
        <button class="btn right">＋ 关注</button>
      </div>
    </div>
    <div class="answerContent">
      <p>{{ answerContent }}</p>
    </div>
    <div class="row bottom-btn">
      <div class="col-xs-3">
        <div class="icon-div">
          <img class="icon" src="/static/bottom-button/thumb.png"/>
        </div>
        <div>
          <span>赞同({{ likeCount }})</span>
        </div>
      </div>
      <div class="col-xs-3">
        <div class="icon-div">
          <img class="icon" src="/static/bottom-button/clip.png"/>
        </div>
        <div>
          <span>分享</span>
        </div>
      </div>
      <div class="col-xs-3">
        <div class="icon-div">
          <img class="icon" src="/static/bottom-button/star.png"/>
        </div>
        <div>
          <span>加入收藏</span>
        </div>
      </div>
      <div class="col-xs-3">
        <div class="icon-div">
          <img class="icon" src="/static/bottom-button/message.png"/>
        </div>
        <div>
          <router-link to="/comment/12332">评论</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'answerDetail',
    data () {
      return {
        answerContent: '针对评论某些被踩到的人补充一点东西。我或者说评论里的人没有一个人说所有的安徽人都没素质，我们都在强调概率问题。而有些人代入感却是我们认为所有安徽人都没素质。我不知道这是你们的理解有问题还是你们自己的认知是这样。—————————————————————我们老家那边，所有乞丐都会在前面加上两个字，安徽，连起来叫安徽讨饭，我也不知道为什么。在上海，遇到的言而无信的老板是安徽人，遇到乱开车的是安徽牌，电瓶车蹭车给200不肯私了不给报警叫来一堆老乡要赔2000的是安徽人。不是想地域歧视，确实很大一部分人把整个省的牌子做掉了，这个省出来的有素质的人要花更大的精力能力才能扳回来这个名声。而对于我们这些普通人，只能听到安徽人避开一些，毕竟中枪概率更大一些。',
        author: 'Jeff Cao',
        selfDesc: 'quality engineer',
        portraitImg: '/static/head.png',
        likeCount: 13
      }
    }
  }
</script>

<style scoped>
  .row {
    border-bottom: solid;
    border-width: 1px;
    border-color: #eeeeee;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .btn {
    background-color: #fff;
    border: solid;
    border-color: #0e7bef;
    border-width: 1px;
    color: #0e7bef;
  }
  .right {
    float: right;
  }
  .author {
    white-space: nowrap;
  }
  .answerContent {
    margin-top: 10px;
  }
  .icon {
    width: 25px;
    height: 25px;
  }
  .bottom-btn {
    border-top: solid;
    border-width: 1px;
    border-color: #eeeeee;
    text-align: center;
    font-size: 13px;
  }
  .row {
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .icon-div {
    padding-bottom: 2px;
  }
</style>
