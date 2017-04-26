<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-2">
        <img @click="back" class="back" src="/static/back.png" width="15px" height="20px"/>
      </div>
      <div class="col-xs-8 headline">
        <p>评论</p>
      </div>
      <div class="col-xs-2">
        <img src="/static/sort.png" width="32px" height="30px"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'commentHeader',
    methods: {
      back () {
        window.history.back()
      }
    }
  }
</script>

<style scoped>
  .container-fluid {
    padding-top: 8px;
    padding-bottom: 8px;
    border-bottom: solid;
    border-width: 1px;
    border-color: #eeeeee;
  }
  .headline {
    text-align: center;
    font-size: 21px;
    font-weight: 400;
  }
  p {
    margin: 0;
  }
  .back {
    margin-top: 5px;
  }
</style>
