<template>
  <div>
    <h2>course page</h2>
    <p>{{ $route.params.name }}...</p>
  </div>
</template>

<script>
  export default {
    name: 'course',
    
    mounted () {
      console.log("add component");
    },
  }
</script>

<style lang="scss" scoped>

</style>