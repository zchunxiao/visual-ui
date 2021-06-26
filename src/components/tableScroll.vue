<!--  -->
<template>
  <div>
     <dv-scroll-board :config="getConfig" style="width:100%;height:250px" /> 
  </div>
</template>

<script>
export default {
  data () {
    return {
        data:{
            headerBGC: 'rgba(195,188,188,0.3)',
            headerHeight: 45,
            oddRowBGC:'rgba(64, 72, 91,0.5)',
            evenRowBGC: '171a30',
            rowNum: 5,
            index:true,
           
        }
    };
  },
  props:{
    config:{
        required:true,
        type:Object
    }
  },
  components: {},

  computed: {
      getConfig(){
          return {...this.config,...this.data}
      }
  },

  created() {},

  mounted() {},

  methods: {}
}

</script>
<style scoped>
</style>