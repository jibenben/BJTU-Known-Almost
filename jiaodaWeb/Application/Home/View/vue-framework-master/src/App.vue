<template>
  <div class="bg">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    components: {
    }
  }
</script>

<style scoped>
  @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
  @import "style/style.css";

  body {
    margin: 0px;
    padding: 0px;
  }
  .bg {
    background-color: #eeeeee;
    margin: 0;
    padding: 0;
  }
</style>
