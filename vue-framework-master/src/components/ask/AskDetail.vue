<template>
  <div class="container-fluid">
    <div class="head">
      <div style="float: left;" class="menu">
        <span @click="cancel()" class="glyphicon glyphicon-menu-left"></span>
      </div>
      <div style="float: right;" class="menu">
        <router-link to="/ask/topic">下一步</router-link>
      </div>
    </div>
    <div>
      <textarea placeholder="请填写问题相关描述信息（选填）" class="form-control"></textarea>
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
    name: 'askDetail',
    methods: {
      cancel () {
        window.history.back()
      }
    }
  }
</script>
