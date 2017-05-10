<template>
  <div>
    <nav class="navbar-default navbar-fixed-top">
      <div class="container-fluid">

        <div class="row">
          <div class="col-xs-2">
            <span @click="back" class="glyphicon glyphicon-menu-left"></span>
          </div>
          <div class="col-xs-10">
            <span>{{ questionTitle }}</span>
          </div>
        </div>
      </div>
    </nav>
    <div style="margin-top: 40px"></div>
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
  .navbar-default {
    background-color: #fff;
  }

  .container-fluid {
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: solid;
    border-width: 1px;
    border-color: #eeeeee;
  }

</style>
