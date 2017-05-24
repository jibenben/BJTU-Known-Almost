<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-3">
        <span @click="cancel()" class="glyphicon glyphicon-menu-left"></span>
      </div>
      <div class="col-xs-6" align="center">
        <label class="headline">请至少添加一个话题</label>
      </div>
      <div class="col-xs-3">
        <a style="float: right;">发布</a>
      </div>
    </div>
    <div class="block">
      <span></span>
      <input type="text" class="form-control" placeholder="搜索话题"/>
    </div>
    <div class="block">
      <div class="row">
        <div class="col-xs-3">
          <img src="/static/2.jpg" width="40px" height="40px"/>
        </div>
        <div class="col-xs-6" style="padding: 0;">
          <label>读书</label>
        </div>
        <div class="col-xs-3">
          <button @click="addTopic()" class="btn btn-default" :class="{ isAdded: 'btn-added' }">{{ btnText }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .head {
    /*display: flex;*/
    width: 100%;
  }

  .headline {
    color: #000;
    margin: 0;
    font-weight: normal;
    font-size: 14px;
    white-space: nowrap;
  }

  a {
    font-size: 14px;
  }

  .row {
    color: #0e7bef;
    border-bottom: 1px solid #eeeeee;
    padding: 10px 0 10px 0;
  }

  .form-control {
    border:none;
    box-shadow: none;
  }

  .block {
    margin-top: 10px;
  }
  p {
    white-space: normal;
    word-break: break-all;
  }
  .btn {
    color: #fff;
    background-color: #0e7bef;
    border: none;
    vertical-align: middle;
  }
  .btn-added {
    background-color: #eeeeee;
    color: #000;

  }
</style>


<script>
  export default {
    name: 'askTopic',
    data () {
      return {
        topics: [],
        btnText: '添加',
        isAdded: false
      }
    },
    methods: {
      cancel () {
        window.history.back()
      },
      addTopic () {
        this.btnText = '已添加'
      }
    }
  }
</script>
