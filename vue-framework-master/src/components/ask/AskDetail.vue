<template>
  <div class="container-fluid">
    <div class="head">
      <div style="float: left;" class="menu">
        <span @click="cancel()" class="glyphicon glyphicon-menu-left"></span>
      </div>
      <div style="float: right;" class="menu">
        <span @click="setContent()">下一步</span>
      </div>
    </div>
    <div>
      <textarea placeholder="请填写问题相关描述信息（选填）" class="form-control" rows="10" v-model="content"></textarea>
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
  import { mapGetters, mapMutations } from 'vuex'
  export default {
    name: 'askDetail',
    methods: {
      ...mapMutations([
        'setQContent'
      ]),
      cancel () {
        window.history.back()
      },
      setContent () {
        this.setQContent(this.content)
        this.$router.push('/ask/topic')
      }
    },
    data () {
      return {
        content: ''
      }
    },
    mounted: function () {
      this.content = this.qInfo.qContent
    },
    computed: {
      ...mapGetters([
        'qInfo'
      ])
    }
  }
</script>
