<template>
  <div>
    <comment-header></comment-header>
    <comment-item></comment-item>
    <comment-item></comment-item>
    <comment-item></comment-item>
    <comment-item></comment-item>
    <comment-item></comment-item>
    <comment-item></comment-item>
    <comment-item></comment-item>
    <comment-item></comment-item>
  </div>
</template>

<script>
  import CommentItem from './CommentItem'
  import CommentHeader from './CommentHeader'
  export default {
    components: {
      CommentHeader,
      CommentItem},
    name: 'comment'
  }
</script>

