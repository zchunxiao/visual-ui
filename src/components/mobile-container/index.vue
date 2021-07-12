<!--
 * @Author: your name
 * @Date: 2021-07-10 16:24:55
 * @LastEditTime: 2021-07-12 10:11:50
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \visual-ui\src\components\mobile-container\index.vue
-->
<!--  -->
<template>
  <div class="basic-container">
    <slot/>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
}

</script>
<style scoped>
.basic-container{
   min-height: 100%;
   background:#2189ca;
   background-repeat: no-repeat;
   background-size:cover;
   color:#fff;

}
</style>