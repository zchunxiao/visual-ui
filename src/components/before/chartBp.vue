<template>
  <div class="left">
    <div id="rose-chart">
      <div class="rose-chart-title">累计计量资金分布</div>
      <dv-charts :option="option" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoseChart',
  data () {
    return {}
  },
  props:{
   option:{
      type: Object,
      required: true
   },
   config:{
      type: Object,
      required: true
   }
  },
  methods: {
   
  },
  mounted () {}
}
</script>

<style lang="less">
.left{
  width: 25%;
  float: left;
}
#rose-chart {
  width: 100%;
  height: 40%;
  background-color: rgba(6, 30, 93, 0.5);
  border-top: 2px solid rgba(1, 153, 209, .5);
  box-sizing: border-box;

  .rose-chart-title {
    height: 30px;
    font-weight: bold;
    text-indent: 20px;
    font-size: 16px;
    display: flex;
    align-items: center;
  }

  .dv-charts-container {
    height: calc(~"100% - 50px");
  }

}
</style>
