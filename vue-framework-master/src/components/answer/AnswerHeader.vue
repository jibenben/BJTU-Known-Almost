<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-2">
        <img @click="back" src="/static/back.png" width="15px" height="20px"/>
      </div>
      <div class="col-xs-10">
        <p>{{ questionTitle }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'answerHeader',
    data () {
      return {
        questionTitle: '微信和苹果，你会选择哪一个？'
      }
    },
    methods: {
      back () {
        window.history.back()
      }
    }
  }
</script>

<style scoped>
  .container-fluid {
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: solid;
    border-width: 1px;
    border-color: #eeeeee;
  }
  p {
    margin: 0;
  }
</style>
