<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/ws/qualityTesting">吴山未来工厂质量管理平台</router-link>

    </div> -->
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>

<style>
html,body,#app{
  margin:0;
  padding:0;
  height: 100%;
}
body,h1,h2,h3,h4,h5,h6,p,dl,dd,ul,ol,form,input,textarea,th,td,select{ margin:0; padding:0;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  min-height: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
