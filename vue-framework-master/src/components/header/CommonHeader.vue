<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-2">
        <span @click="back" class="glyphicon glyphicon-menu-left"></span>
      </div>
      <div class="col-xs-8 headline">
        <span>{{ headline }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'commonHeader',
    props: ['headline'],
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
    border-bottom: solid 1px #eeeeee;
  }
  .headline {
    text-align: center;
    font-size: 16px;
    font-weight: 400;
  }
  .glyphicon-menu-left {
    font-size: 18px;
  }
</style>
