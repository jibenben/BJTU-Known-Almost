<template>
  <div class="container-fluid">
    <nav class="navbar-default navbar-fixed-top">
      <div class="row">
        <div class="col-xs-2">
          <span @click="back" class="glyphicon glyphicon-menu-left"></span>
        </div>
        <div class="col-xs-8">
          <input v-model="keyword" type="text" class="form-control" placeholder="搜索"/>
        </div>
        <div class="col-xs-2">
          <span @click="back" class="glyphicon glyphicon-share"></span>
        </div>
      </div>
    </nav>
    <div style="margin-top: 40px">
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
  .navbar-default{
    background-color: #fff;
    border-bottom: solid 1px #eeeeee;
  }
  .container-fluid {
    padding: 0;
  }

  .row {
    margin: 5px 0 5px 0;
  }

  .form-control {
    height: 24px;
  }

  .col-xs-8 {
    padding: 0;
  }

  input:-ms-input-placeholder {
    text-align: center;
  }

  input::-webkit-input-placeholder {
    text-align: center;
  }

  .glyphicon {
    font-size: 20px;
  }
</style>
