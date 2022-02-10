<template>
  <!-- 用户输入 -->
  <div>
    <p>
      <input type="text" :value="value" @input="onInput" v-on:keydown.enter="addCourse" ref="inp">
      <button @click="addCourse">add</button>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'CourseAdd',
    props: ['value'],
      methods: {
        addCourse() {
          // 派发事件，通知父组件更新courses
          this.$emit('add-course');
        },
        onInput(e) {
          this.$emit("input", e.target.value);
        }
      },
      mounted () {
        this.$refs.inp.focus(); 
      },
  }
</script>

<style scoped>

</style>