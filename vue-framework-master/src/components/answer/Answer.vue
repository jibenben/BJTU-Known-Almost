<template>
  <div class="container-fluid">
    <nav class="navbar-default navbar-fixed-top">
      <div class="container-fluid header">
        <div class="row">
          <div class="col-xs-2">
            <span @click="back()" class="glyphicon glyphicon-menu-left"></span>
          </div>
          <div class="col-xs-8 headline">
            <span>{{ questionTitle }}</span>
          </div>
          <div class="col-xs-2">
          </div>
        </div>
      </div>
    </nav>
    <div style="margin-top: 43px"></div>
    <div class="container-content">
      <div class="row row-author">
        <div class="col-xs-2">
          <img class="img-circle head" :src="answerData.uimage"/>
        </div>
        <div class="col-xs-6 author">
          <label>{{ answerData.uname }}</label>
          <!--<br/>-->
          <!--<span>{{ selfDesc }}</span>-->
        </div>
        <div class="col-xs-4">
          <button class="btn right" @click="follow" :class="{ followed: isFollowed, noFollow: !isFollowed}">
            {{ followText }}
          </button>
        </div>
      </div>
      <div class="answer-content">
        <p>{{ answerData.answercontent }}</p>
      </div>
      <div style="margin-top: 80px"></div>
      <nav class="navbar-default navbar-fixed-bottom">
        <div class="container-fluid">
          <div class="row bottom-btn">
            <div class="col-xs-3">
              <div>
                <span class="glyphicon glyphicon-thumbs-up"></span>
              </div>
              <div>
                <span>赞同({{ answerData.likeNumber }})</span>
              </div>
            </div>
            <div class="col-xs-3">
              <div>
                <span class="glyphicon glyphicon-share"></span>
              </div>
              <div>
                <span>分享</span>
              </div>
            </div>
            <div @click="star()" class="col-xs-3">
              <div>
                <span class="glyphicon" :class="{ 'glyphicon-star-empty' : isStar, 'glyphicon-star' : !isStar }"></span>
              </div>
              <div>
                <span>加入收藏</span>
              </div>
            </div>
            <div class="col-xs-3">
              <div>
                <span class="glyphicon glyphicon-comment"></span>
              </div>
              <div>
                <router-link :to="{ name: 'comment', params: { id: anid }}">
                  <span>评论({{ answerData.CommentNumber }})</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>


<style scoped>

  .navbar-default {
    background-color: #fff;
    border-bottom: solid 1px #eeeeee;
  }

  .header {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .followed {
    color: #fff;
    background-color: #979797;
    border: none;
  }

  .noFollow {
    background-color: #fff;
    color: #0e7bef;
    border: 1px solid #0e7bef;

  }

  .btn:focus,
  .btn:hover {
    background-color: #fff;
    color: #0e7bef;
    text-decoration: none;
  }

  .row {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .btn {
    width: 100%;
  }

  .right {
    float: right;
  }

  .author {
    white-space: nowrap;
    line-height: 30px;
    font-size: 18px;
  }

  .answer-content {
    margin-top: 10px;
  }

  .bottom-btn {
    border-top: 1px solid #eeeeee;
    text-align: center;
    font-size: 13px;
  }

  span {
    white-space: nowrap;
  }

  .glyphicon {
    font-size: 22px;
  }

  .glyphicon-menu-left {
    font-size: 18px;
  }

  .row-author {
    border-bottom: 1px solid #eeeeee;
  }

  .headline {
    text-align: center;
  }
</style>

<script>
  export default {
    props: ['answerId'],
    data () {
      return {
        anid: '',
        answerData: '',
        questionTitle: '',
        followText: '关注'
      }
    },
    name: 'answer',
    mounted: function () {
      this.questionTitle = this.$route.params.questionTitle
      this.anid = this.$route.params.id
      let local = this
      let formd = new window.FormData()
      formd.append('anid', this.anid)
      this.$http.post('http://139.199.5.64/bjtu/index.php/home/index/displayAnswer', formd).then((response) => {
        console.log(response)
        local.answerData = response.data[0]
      }, (response) => {
      })
    },
    methods: {
      back () {
        window.history.back()
      },
      star () {
        if (this.isStar) {
          this.isStar = false
        } else {
          this.isStar = true
        }
      },
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
