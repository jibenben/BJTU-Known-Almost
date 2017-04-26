<template>
  <div class="bg">
    <question-header></question-header>
    <question-desc></question-desc>
    <answer-item></answer-item>
    <answer-item></answer-item>
    <answer-item></answer-item>
    <answer-item></answer-item>
    <answer-item></answer-item>

  </div>
</template>

<script>
  import QuestionDesc from './QuestionDesc'
  import AnswerItem from '../answer/AnswerItem'
  import QuestionHeader from './QuestionHeader'
  export default {
    components: {
      QuestionHeader,
      AnswerItem,
      QuestionDesc
    },
    name: 'home'
  }
</script>

<style scoped>
  .bg {
    background-color: #eeeeee;
    margin: 0;
    padding: 0;
  }
</style>
