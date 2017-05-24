<template>
  <div class="container-fluid">
    <div class="head">
      <div style="float: left;" class="menu">
        <a @click="cancel()">取消</a>
      </div>
      <div style="float: right;" class="menu">
        <router-link to="/ask/detail">下一步</router-link>
      </div>
    </div>
    <div>
      <textarea placeholder="请写下你的问题，并用问号结尾" class="form-control"></textarea>
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
  export default {
    name: 'askQuestion',
    methods: {
      cancel () {
        window.history.back()
      }
    }
  }
</script>
