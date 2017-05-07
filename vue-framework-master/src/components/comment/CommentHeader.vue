<template>
  <div class="container-fluid">
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
    font-size: 18px;
    font-weight: 400;
  }
  .glyphicon {
    font-size: 22px;
  }
  .back {
    /*margin-top: 5px;*/
  }
</style>
