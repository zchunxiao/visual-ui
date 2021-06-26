<template>
  <div id="rose-chart">
    <dv-border-box-12  backgroundColor='rgba(195,188,188,0.14)'>
      <div class="rose-chart-title">回路状态分布</div>
      <dv-charts :option="option" />
    </dv-border-box-12>
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
    createData () {
    
   
     
    }
  },
  mounted () {
    const { createData } = this

    createData()

    setInterval(createData, 300*1000)
  }
}
</script>

<style lang="less">
#rose-chart {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  border-radius: 20PX;
  .rose-chart-title {
    font-weight: bold;
    display: flex;
    align-items: center;
    font-size: 20PX;
    // justify-content: center;
    padding:20PX 0 20PX 20PX;
  }


  .dv-charts-container {
    height: 80%;
  }
}
</style>
