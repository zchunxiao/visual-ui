<template>
  <div id="chart1">
    <dv-border-box-7>
      <dv-charts :option="option" />
    </dv-border-box-7>
  </div>
</template>

<script>


export default {
  name: 'Chart',
  data () {
    return {
    
      day:[]
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
   
  }
}
</script>

<style lang="less">
#chart1 {
  width: 100%;
  height: 100%;
  background-color: rgba(6, 30, 93, 0.5);
  border-radius: 20PX;
}
</style>
