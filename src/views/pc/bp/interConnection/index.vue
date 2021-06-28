<template>
  <div id="data-view">
    <base-container>
      <top-header title="部品工业互联注塑实时产量看板" />

      <div class="main-content">
        <div class="main-top-bp">
          <digital-flop-bp />
        </div>
      </div>
    </base-container>
  </div>
</template>

<script>

import digitalFlopBp from "./components/digitalFlopBp";

export default {
  name: "bpInterConnection",
  components: {
    digitalFlopBp,
  },
  data() {
    return {};
  },
  methods: {},
  created() {
    document.title = "部品工业互联注塑实时产量看板";
  },
  mounted() {},
};
</script>

<style lang="less">
#data-view {
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #fff;

  #dv-full-screen-container {
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
    background-color: #0c1a2d;
  }

  .main-content {
    display: flex;
    flex-direction: column;
    height: calc(100% - 60px);
    margin: 0 0 0 0.5%;
  }

  .block-left-right-content {
    flex: 1;
    display: flex;
    margin-top: 20px;
  }

  .block-top-bottom-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding-left: 20px;
  }

  .block-top-content {
    height: 55%;
    display: flex;
    flex-grow: 0;
    box-sizing: border-box;
    padding-bottom: 20px;
  }
}
.main-top-bp {
  width: 100%;
  display: flex;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  flex-direction: column;
}
.main-top-title1 {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  text-align: center;
}
</style>
