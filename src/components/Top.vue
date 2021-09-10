<template>
  <div class="title">
      <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  props:{
    title: String
  }
}
</script>

<style lang="scss" scoped>
.title{
  text-align: center;
  margin: 30px;
  
  }
</style>