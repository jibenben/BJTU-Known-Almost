<template>
  <div>
    <question-item></question-item>
    <question-item></question-item>
    <question-item></question-item>
    <question-item></question-item>
    <question-item></question-item>
    <question-item></question-item>
  </div>
</template>

<script>
  import QuestionItem from '../question/QuestionItem'
  export default {
    components: {QuestionItem},
    name: 'homeContent'
  }
</script>

<style scoped>
</style>
