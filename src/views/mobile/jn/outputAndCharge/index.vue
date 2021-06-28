<!--home  -->
<template>
  <mobile-container>
       <div class="p-jn" :style="{height:heightStyle}">
        <div class="btn" @click="goOutput">装配产量看板</div>
        <div class="btn" @click="goCharge">充电看板</div>
      </div>
  </mobile-container>
</template>

<script>
export default {
  data () {
    return {
      heightStyle:'0px'
    };
  },

  components: {},

  computed: {},

  mounted() {
    this.heightStyle =  window.innerHeight+'px'
  },

  methods: {
    goOutput(){
      this.$router.push({
        path:'/jn/outputAndCharge/output'
      })
    },
    goCharge(){
      this.$router.push({
        path:'/jn/outputAndCharge/charge'
      })
    }
  }
}

</script>
<style scoped>
.p-jn{
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding:0 0.4rem;
   height: 100%;
   font-size:0.8rem;
}
.btn{
  border:1px solid #fff;
  margin:0.5rem 0 0 0;
  border-radius: 0.6rem;
  box-shadow: 0.1rem 0.1rem 0.1rem #fff;
  padding:0.4rem 0;
}
</style>