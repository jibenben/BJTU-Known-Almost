<template>
  <div class="container-fluid">
    <div class="head">
      <div style="float: left;" class="menu">
        <a @click="cancel()">取消</a>
      </div>
      <div style="float: right;" class="menu">
        <span @click="setTitle()">下一步</span>
      </div>
    </div>
    <div>
      <textarea placeholder="请写下你的问题，并用问号结尾" class="form-control" v-model="title"></textarea>
    </div>
  </div>
</template>

<style scoped>
  .head {
    /*display: flex;*/
    width: 100%;
  }
  a {
    font-size: 14px;
  }
  .menu {
    margin-top: 10px;
    margin-bottom: 10px;
    color: #0e7bef;
  }
</style>

<script>
  import { mapMutations, mapGetters } from 'vuex'
  export default {
    name: 'askQuestion',
    methods: {
      ...mapMutations([
        'setQTitle'
      ]),
      setTitle () {
        this.setQTitle(this.title)
        this.$router.push('/ask/detail')
      },
      cancel () {
        window.history.back()
      }
    },
    mounted: function () {
      this.title = this.qInfo.qTitle
    },
    data () {
      return {
        title: ''
      }
    },
    computed: {
      ...mapGetters([
        'qInfo'
      ])
    }
  }
</script>
