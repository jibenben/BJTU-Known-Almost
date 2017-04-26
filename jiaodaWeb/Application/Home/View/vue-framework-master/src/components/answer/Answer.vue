<template>
  <div>
    <answer-header></answer-header>
    <answer-detail></answer-detail>
  </div>
</template>

<script>
  import AnswerDetail from './AnswerDetail'
  import AnswerHeader from './AnswerHeader'
  export default {
    components: {
      AnswerHeader,
      AnswerDetail},
    name: 'answer'
  }
</script>
