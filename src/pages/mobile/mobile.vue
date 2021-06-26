<template>
  <div id="app">

      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>


    <router-view/>
  </div>
</template>
<script>
// import  HelloWorld  from './components/HelloWorld.vue'

export default {
  data(){
    return {

    }
  },
  components:{
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html{
        font-size:calc(100vw / 7.5)
}

</style>
