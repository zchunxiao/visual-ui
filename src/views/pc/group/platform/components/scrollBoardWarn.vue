<template>
  <div id="scroll-board-warn">
    <dv-scroll-board :config="config" />
  </div>
</template>

<script>
export default {
  name: 'ScrollBoardWarn',
  data () {
    return {
    
    }
  },
  props:{
    config:{
      type:Object,
      required:true
    }
  }
}
</script>

<style lang="less">
#scroll-board-warn {
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
   .dv-scroll-board{
    font-weight: bold;
  }
  .dv-scroll-board .rows .row-item{
    span{
      color:#fff !important; 
    }
  }
  .dv-scroll-board .rows .ceil{
     font-size: 16px;
      color:#f84a4a !important;
  }
 
}
</style>
