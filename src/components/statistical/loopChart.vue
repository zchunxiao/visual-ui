<template>
  <div id="chart2">
    <dv-border-box-7>
      <dv-charts :option="option" />
    </dv-border-box-7>
  </div>
</template>

<script>


export default {
  name: 'RoseChart',
  data () {
    return {
    
    }
  },
  props:{
    option:{
      required:true,
      type:Object
    }
  },
  methods: {
   
  },
  mounted () {
    
  }
}
</script>

<style lang="less">
#chart2 {
  width:100%;
  height: 100%;
  border-radius: 20PX;
  background-color: rgba(6, 30, 93, 0.5);
}
</style>
