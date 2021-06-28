<template>
  <div class="left">
    <div id="rose-chart">
      <div class="rose-chart-title">{{title}}</div>
      <!-- <dv-charts :option="option" /> -->
      <dv-active-ring-chart :config="option" />
    </div>
    <div class="rose-bottom">
     <!-- <span>当班人数</span>
     <dv-digital-flop :config="config" style="width:200px;height:50px;" /> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoseChart',
  data () {
    return {
      config:{
       
      }
    }
  },
  props:{
   option:{
      type: Object,
      required: true
   },
   title:{
      type: String,
      required: true
   }
  //  config:{
  //     type: Object,
  //     required: true
  //  }
  },
  methods: {
   
  },
  mounted () {}
}
</script>

<style lang="less">
.left{
  width: 100%;
  height: 100%;
}
#rose-chart {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  .dv-active-ring-chart{
    width:80%;
    height: 80%;
    margin:0 auto;
  }
  .rose-chart-title {
    font-weight: bold;
    text-indent: 20px;
    display: flex;
    align-items: center;
    margin:20px 0 0 20px;
    font-size: 20px;
  }

  .dv-charts-container {
    height: calc(~"100% - 50px");
  }

}
.rose-bottom{
  display:flex;
  justify-content:space-between;
  align-items: center;
  font-size: 18px;
  background-color: rgba(6, 30, 93, 0.5);
  // margin:0 20px;
}
</style>
