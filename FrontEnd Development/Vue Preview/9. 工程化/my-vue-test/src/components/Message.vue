<template>
  <div class="message-box" v-if="show">
    <slot name="title"></slot>
    <slot></slot>
    <span class="message-box-close" @click="toggle">X</span>
  </div>
</template>

<script>
  export default {
    name: 'Message',
    data() {
        return {
          show: false
        }
      },
      mounted () {
        this.$bus.$on("message-close", () => {
          this.toggle();
        })
      },
      methods: {
        toggle() {
          this.show = !this.show;
        }
      },
  }
</script>

<style scoped>
.message-box {
  padding: 10px 20px;
}
.message-box-close {
  float: right;
}
.success {
  background: #4fc08d;
  border: 1px solid black;
}
.warning {
  background: #EE9900;
  border: 1px solid black;
}
</style>