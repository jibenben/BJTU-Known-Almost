<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-2">
        <img @click="back" class="back" src="/static/back.png" width="15px" height="20px"/>
      </div>
      <div class="col-xs-8">
        <input v-model="keyword" type="text" class="form-control" placeholder="搜索"/>
      </div>
      <div class="col-xs-2">
        <img class="share" src="/static/share.png" width="20px" height="25px"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'questionHeader',
    methods: {
      back () {
        window.history.back()
      }
    }
  }
</script>

<style scoped>
  .container-fluid {
    padding: 5px 0 5px 0;
    border-bottom: solid;
    border-width: 1px;
    border-color: #eeeeee;
  }
  .col-xs-2 {
    padding: 0;
    margin: 0;
    display: flex;
  }
  .col-xs-8 {
    padding: 0;
  }
  .back {
    margin-top: 7px;
    margin-left: 30px;
  }
  .share {
    margin-left: 15px;
    margin-top: 5px;
  }
  input:-ms-input-placeholder{
    text-align: center;
  }
  input::-webkit-input-placeholder{
    text-align: center;
  }
</style>
