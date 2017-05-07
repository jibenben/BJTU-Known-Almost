<template>
  <div>
    <home-header></home-header>
    <question-item></question-item>
    <question-item></question-item>
    <question-item></question-item>
    <question-item></question-item>
    <question-item></question-item>
  </div>
</template>

<script>
  import HomeHeader from './HomeHeader'
  import QuestionItem from '../question/QuestionItem'
  export default {
    components: {
      QuestionItem,
      HomeHeader
    },
    name: 'home'
  }
</script>

<style scoped>

</style>
