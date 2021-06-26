<template>
  <div id="scroll-board">
    <dv-border-box-7>
      <div class="title">异常列表</div>
      <div style="height:90%"><dv-scroll-board :config="warnList" /></div>
    </dv-border-box-7>
  </div>
</template>

<script>

export default {
  name: "ScrollBoard",
  data() {
    return {

    };
  },
  props:{
    warnList:{
      required:true,
      type:Object
    }
  },
  methods: {
  
  },
  mounted() {
   
  },
};
</script>

<style lang="less">
#scroll-board {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(6, 30, 93, 0.5);
  .dv-border-box-7 {
    padding: 20PX;
    box-sizing: border-box;
  }
  .title {
    font-weight: bold;
    display: flex;
    align-items: center;
    font-size: 20PX;
    padding-bottom: 20PX;
  }
}
</style>
