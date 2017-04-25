<template>
  <div>
    <search-header></search-header>
    <home-content></home-content>
  </div>
</template>

<script>
  import HomeContent from './HomeContent'
  import SearchHeader from '../search/SearchHeader'
  export default {
    components: {
      SearchHeader,
      HomeContent
    },
    name: 'home'
  }
</script>

<style scoped>

</style>
