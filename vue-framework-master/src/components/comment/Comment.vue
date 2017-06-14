<template>
  <div>
    <nav class="navbar-default navbar-fixed-top">
      <div class="container-fluid header">
        <div class="row">
          <div class="col-xs-2">
            <span @click="back()" class="glyphicon glyphicon-menu-left"></span>
          </div>
          <div class="col-xs-8 headline">
            <span>评论</span>
          </div>
          <div class="col-xs-2">
            <span class="glyphicon glyphicon-sort-by-attributes-alt"></span>
          </div>
        </div>
      </div>
    </nav>
    <div style="margin-top: 43px"></div>

    <div class="container-fluid div-content" v-for="c in commentData">
      <div class="row">
        <div class="col-xs-2">
          <img class="img-circle head" :src="c.uimage"/>
        </div>
        <div class="col-xs-10 right">
          <div>
            <label class="comment-user">{{ c.uname }}</label>
          </div>
          <div>
            <p>{{ c.commentcontent }}</p>
          </div>
          <div class="row row-comment">
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
  </div>
</template>


<style scoped>

  .navbar-default {
    background-color: #fff;
    border-bottom: solid 1px #eeeeee;
  }

  .headline {
    text-align: center;
    font-size: 14px;
    font-weight: 400;
  }

  .header {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .glyphicon-menu-left,
  .glyphicon-sort-by-attributes-alt {
    font-size: 18px;
  }

  span {
    white-space: nowrap;
  }

  .right {
    padding-bottom: 5px;
    padding-left: 10px;
  }

  p {
    padding-top: 5px;
    margin-bottom: 5px;
    font-size: 12px;
  }

  .row-comment {
    font-size: 12px;
  }

  .comment-user {
    font-size: 18px;
  }

  .div-content {
    padding-top: 5px;
    padding-bottom: 5px;
    border-bottom: 1px solid #eeeeee;
  }
  .row {
    padding-top: 5px;
    padding-bottom: 5px;
  }
</style>

<script>
  export default {
    name: 'comment',
    data () {
      return {
        anid: '',
        commentData: []
      }
    },
    mounted: function () {
      this.questionTitle = this.$route.params.questionTitle
      this.anid = this.$route.params.id
      let local = this
      let formd = new window.FormData()
      formd.append('anid', this.anid)
      this.$http.post('http://139.199.5.64/bjtu/index.php/home/index/displayComment', formd).then((response) => {
        console.log(response)
        local.commentData = response.data
      }, (response) => {
      })
    },
    methods: {
      back () {
        window.history.back()
      }
    }
  }
</script>

