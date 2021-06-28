<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
// import  HelloWorld  from './components/HelloWorld.vue'

export default {
  data() {
    return {};
  },
  components: {
    // HelloWorld
  },
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
  text-align: center;
  color: #2c3e50;
  font-weight: bold;
  height: 100%;
  min-height: 100%;
}

html {
  font-size: calc(100vw / 7.5);
}
.title{
    text-align: center;
    padding:0.26rem 0;
    font-size: 0.53rem;
}
</style>
