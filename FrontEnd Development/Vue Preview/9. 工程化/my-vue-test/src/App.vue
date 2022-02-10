<template>
  <div id="app">
    <!-- 导航链接 -->
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/admin">Admin</router-link>
    </nav>
    <!-- 路由出口 include 是组件名-->
    <keep-alive include="admin"> <router-view></router-view></keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  color: #2c3e50;
}
</style>
