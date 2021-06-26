<template>
 <div class="water">
  <dv-border-box-12  backgroundColor='rgba(195,188,188,0.14)'>
    <div class="water-level-chart-title">机房实时利用率</div>
    <div class="water-main">
      <div class="water-level-chart" v-for="(data,index) in list" v-bind:key="index">
        <div class="water-level-chart-details">{{data.roomId}}</div>
        <div class="chart-container">
          <dv-water-level-pond :config="data.config" />
        </div>
      </div>
      </div>
  </dv-border-box-12>
 </div>
</template>

<script>


export default {
  name: 'WaterLevelChart',
  data () {
    return {
     
    }
  },
  methods:{
 
  },
  props:{
    list:{
      required:true,
      type:Array,
      default:new Array(6).fill({}),
    }
  },
  mounted () {
  
  }
}
</script>

<style lang="less">
.water-level-chart {
  width: 25%;
  box-sizing: border-box;
  margin:0 20PX 7PX 0;
  display: flex;
  flex-direction: column;



  .water-level-chart-details {
    height: 15%;
    display: flex;
    justify-content: center;
    font-size: 17PX;
    align-items: flex-end;
    margin-bottom:10px;
    span {
      font-size: 35PX;
      font-weight: bold;
      color: #58a1ff;
      margin: 0 5PX;
      margin-bottom: -5PX;
    }
  }

  .chart-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .dv-water-pond-level {
    max-width: 100%;
    width: 80PX;
    height: 80PX;
    border: 2PX solid #19c3eb;
    border-radius: 50%;

    ellipse {
      stroke: transparent !important;
    }

    text {
      font-size: 20PX;
    }
  }
}
.water{
  width:100%;

  height: 100%;
  position: relative;
  border-radius: 20PX;
}
.water-main{
  display:flex;
  flex-wrap: wrap;
  margin:4PX 0 0 0;
  justify-content: center;
  padding:0 0 0 5%;
}
.water-level-chart-title {
  font-weight: bold;
  display: flex;
  align-items: center;
  font-size: 20PX;
  // justify-content: center;
  padding:20PX 0 20PX 20PX;
}
</style>
