<template>
  <div class="container-fluid">
    <nav class="navbar-default navbar-fixed-top">
      <div class="row">
        <div class="col-xs-2">
          <span @click="back" class="glyphicon glyphicon-menu-left"></span>
        </div>
        <div class="col-xs-8 headline">
          <span>评论</span>
        </div>
        <div class="col-xs-2">
          <span class="glyphicon glyphicon-sort-by-attributes-alt"></span>
        </div>
      </div>
    </nav>
    <div style="margin-top: 20px"></div>
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

  .navbar-default{
    background-color: #fff;
    border-bottom: solid 1px #eeeeee;
  }

  .container-fluid {
    padding-top: 8px;
    padding-bottom: 8px;
    border-bottom: solid;
    border-width: 1px;
    border-color: #eeeeee;
  }
  .headline {
    text-align: center;
    font-size: 16px;
    font-weight: 400;
  }

  .row {
    margin: 5px 0 5px 0;
  }

  .glyphicon {
    font-size: 18px;
  }
  .back {
    /*margin-top: 5px;*/
  }
</style>
