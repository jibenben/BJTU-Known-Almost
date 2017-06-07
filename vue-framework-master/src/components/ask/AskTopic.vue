<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-3">
        <span @click="cancel()" class="glyphicon glyphicon-menu-left"></span>
      </div>
      <div class="col-xs-6" align="center">
        <label class="headline">请至少添加一个话题</label>
      </div>
      <div class="col-xs-3">
        <a style="float: right;">发布</a>
      </div>
    </div>
    <div class="block">
      <span></span>
      <input type="text" class="form-control" placeholder="搜索话题"/>
    </div>
    <div class="block" v-for="(t, index) in topics">
      <div class="row">
        <div class="col-xs-3">
          <img :src="t.image" width="40px" height="40px"/>
        </div>
        <div class="col-xs-6" style="padding: 0; line-height: 40px;">
          <label style="margin: 0;">{{ t.tconent }}</label>
        </div>
        <div class="col-xs-3" style="padding-left: 0; padding-top: 3px">
          <button @click="addTopic(index)" class="btn btn-default" :class="{ 'btn-added': t.isAdded }">
            {{ '添加' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .head {
    /*display: flex;*/
    width: 100%;
  }

  .headline {
    color: #000;
    margin: 0;
    font-weight: normal;
    font-size: 14px;
    white-space: nowrap;
  }

  a {
    font-size: 14px;
  }

  .row {
    color: #0e7bef;
    border-top: 1px solid #eeeeee;
    padding: 15px 0 15px 0;
  }

  .form-control {
    border: none;
    box-shadow: none;
  }

  p {
    white-space: normal;
    word-break: break-all;
  }

  .btn {
    color: #fff;
    background-color: #0e7bef;
    border: none;
    vertical-align: middle;
  }

  .btn-added {
    background-color: #eeeeee;
    color: #000;

  }
</style>


<script>
  import { mapGetters, mapMutations } from 'vuex'
  export default {
    name: 'askTopic',
    data () {
      return {
        topics: [],
        topicToAdd: [],
        btnStatus: ''
      }
    },
    methods: {
      ...mapMutations([
        'setQTopic'
      ]),
      setBtn (index) {
//        this.topics[index].isAdded = true
        return this.topics[index].isAdded
      },
      cancel () {
        window.history.back()
      },
      addTopic (index) {
        this.topics[index].isAdded = true
        this.topicToAdd.push(this.topics[index].tid)
        console.log(this.topics)
      },
      setTopic () {
        this.setQTopic(this.topics)
      }
    },
    computed: {
      ...mapGetters([
        'qInfo'
      ])
    },
    mounted: function () {
      let local = this
      this.$http.post('http://139.199.5.64/bjtu/index.php/home/index/topic').then((response) => {
        local.topics = response.data
        for (let i = 0; i < local.topics.length; i++) {
          local.topics[i].isAdded = false
        }
        console.log(local.topics)
      }, (response) => {
      })
    }
  }
</script>
