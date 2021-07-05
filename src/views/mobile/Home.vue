<template>
  <div class="home">
    <div v-for="(data, index) in routersList" :key="index">
      <router-link :to="data.path">{{ data.name }}</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      routersList: [],
    };
  },
  components: {},
  mounted() {
    const {
      $router: { options = {} },
    } = this;
    const { routes } = options;
    this.routersList = routes.slice(3);
  },
};
</script>
<style scoped>
.home {
  background: #ccc;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
}
</style>
