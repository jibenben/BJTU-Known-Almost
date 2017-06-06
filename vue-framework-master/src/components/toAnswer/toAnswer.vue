<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-2 menu">
        <span @click="back">取消</span>
      </div>
      <div class="col-xs-8 headline">
        <label>添加回答</label>
      </div>
      <div class="col-xs-2 menu">
        <span>发布</span>
      </div>
    </div>
    <div style="margin-top: 10px">
      <textarea placeholder="填写回答内容" class="form-control" rows="20"></textarea>
    </div>
  </div>

</template>

<style scoped>
  .headline {
    text-align: center;
    font-size: 16px;
    font-weight: 400;
  }
  .menu {
    white-space: nowrap;
    font-size: 14px;
    color: #0e7bef;
  }
  .row {
    padding: 10px 0 10px 0;
    border-bottom: solid 1px #eeeeee;
  }

  label {
    margin: 0;
  }
</style>


<script>
  export default {
    name: 'toAnswer',
    methods: {
      back () {
        window.history.back()
      }
    }
  }
</script>
