<template>
  <div class="admin"><!-- 弹窗组件 -->
    <Message ref="msgSuccess" class="success">
      <template v-slot:title>
        <strong>成功</strong>
      </template>
      <template>
        新增课程成功！
      </template>
    </Message>
    <Message ref="msgWarning" class="warning">
      <template v-slot:title>
        <strong>警告</strong>
      </template>
      <template>
        请输入课程名称！
      </template>
    </Message>

    <!-- 插值文本 -->
    <h2 :title="title">{{title}}</h2>
    
    <!-- 工具栏 -->
    <div class="toolbar">
      <button @click="$bus.$emit('message-close')">清空提示框</button>
    </div>

    <CourseAdd v-model="course" @add-course="addCourse"></CourseAdd>
    <CourseList :courses="courses"></CourseList>
    <router-view></router-view>
  </div>
</template>

<script>
import Message from '@/components/Message.vue'
import CourseAdd from '@/components/CourseAdd.vue'
import CourseList from '@/components/CourseList.vue'

import {getCourses} from '@/api/course'

export default {
  components: {
    Message,
    CourseAdd,
    CourseList,
  },
  data() {
    return {
      title: "购物车!",
      course: '',
      courses: [],
    }
  },
  async created () {
    // 获取商品信息
    const courses = await getCourses();
    this.courses = courses;
  },
  methods: {
    addCourse() {
      // 添加course到数组
      if (this.course) {
        this.courses.push({name: this.course});
        this.course = '';
        this.$refs.msgSuccess.toggle();
      } else {
        this.$refs.msgWarning.toggle();
      }
    },
  },    
}
</script>

<style lang="scss" scoped>

</style>
