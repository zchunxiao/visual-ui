<!--  -->
<template>
  <div class="c-card">
    <div class="c-title">{{title}}</div>
    <slot/>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  
  props:{
      title:{
          required:true,
          type:String,
          default:""
      }
  },
  components: {},

  computed: {},

  mounted() {},

  methods: {}
}

</script>
<style  scoped>
.c-card{
    border:1px solid #fff;
    position: relative;
    min-height: 2.67rem;
    display:flex;
    flex-direction: column;
    justify-content: center;
    padding:0.53rem;
    margin:.27rem 0 .53rem 0;
    border-radius: .27rem;
}
.c-title{
   position: absolute;
   left:0.27rem;
   top:-0.27rem;
   background:#2189ca;
   font-size: .48rem;
   padding:0 .27rem;
}

</style>