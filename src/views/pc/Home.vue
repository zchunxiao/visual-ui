<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png" />
    222211
    <div @click="goMobile" class="demo">跳转到移动端页面</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  methods: {
    goMobile() {
      window.location.href = window.location.href.replace("/pc", "/mobile");
    },
  },
};
</script>
<style scoped>
.demo {
  width: 100PX;
  height: 100PX;
  background: #ccc;
  color: #fff;
}
</style>
