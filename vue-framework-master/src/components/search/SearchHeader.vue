<template>
  <div class="container-fluid">
    <input v-model="keyword" type="text" class="form-control" placeholder="搜索"/>
  </div>
</template>

<script>
  export default {
    name: 'searchHeader',
    data () {
      return {
        keyword: ''
      }
    },
    methods: {
      getKeyword () {
        return this.keyword
      }
    }
  }
</script>

<style scoped>
  .container-fluid {
    margin: 0;
    padding: 0;
  }
  input:-ms-input-placeholder{
    text-align: center;
  }
  input::-webkit-input-placeholder{
    text-align: center;
  }
  .form-control {
    margin: 0;
    padding: 0;
  }
</style>
