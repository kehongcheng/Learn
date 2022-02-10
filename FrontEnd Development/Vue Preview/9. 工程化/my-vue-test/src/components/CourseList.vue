<template>
  <div>
    <!-- 条件渲染 -->
    <p v-if="courses.length == 0">没有课程信息</p>
    <div class="course-list" v-else>
      <!-- 列表渲染 -->
      <!-- class绑定 -->
      <!-- <div v-for="c in courses" :key="c" :class="{active: selectedCourse === c}" @click="selectedCourse = c">
        {{ c }}
      </div> -->
      <!-- style绑定 -->
      <div v-for="c in courses" :key="c.name" :style="{backgroundColor: (selectedCourse === c ? '#ddd' : 'transparent') }"
        @click="onClick(c)"
      >
        {{ c.name }} - {{ c.price | currency("$") }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CourseList",
    data() {
      return {
        selectedCourse: '',
      }
    },
    props: {
      courses: {
        type: Array,
        default: function() {
          return []
        },
      }
    },
    filters: {
      currency(value, symbol="￥") {
        return symbol + value;
      }
    },
    methods: {
      onClick(c) {
        this.selectedCourse = c;
        this.$router.push(`/admin/course/${c.name}`);
      }
    },
  }
</script>

<style scoped>
  .active {
    background-color: #ddd;
  }
</style>