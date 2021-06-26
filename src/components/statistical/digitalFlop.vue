<template>
  <div class="digital-flop-content">
    <dv-border-box-12 backgroundColor="rgba(195,188,188,0.14)">
      <div id="digital-flop">
        <div class="digital-flop-item">
          <div class="digital-flop-title">当日产量</div>
          <dv-scroll-ranking-board :config="configDay" />
        </div>
        <div class="digital-flop-item">
          <div class="digital-flop-title">当月产量</div>
          <dv-scroll-ranking-board :config="configMonth" />
        </div>
      </div>
    </dv-border-box-12>
  </div>
</template>

<script>
export default {
  name: "DigitalFlop",
  data() {
    return {};
  },
  props: {
    configDay: {
      required: true,
      type: Object,
    },
    configMonth: {
      required: true,
      type: Object,
    },
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="less">
#digital-flop {
  position: relative;
  height: 100%;
  // flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  border-radius: 20px;
  // padding:20px;
  .data-name {
    font-size: 16px;
    color: #25f3e6;
    font-weight: bold;
  }

  .dv-scroll-ranking-board {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 80%;
  }
  .digital-flop-item {
    width: 40%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .digital-flop-title {
    font-size: 20px;
    font-weight: bold;
    // padding-bottom: 20px;
  }

  .digital-flop {
    display: flex;
    width: 70%;
  }

  .unit {
    margin-left: 10px;
    display: flex;
    align-items: flex-end;
    box-sizing: border-box;
    padding-bottom: 13px;
  }
}

.digital-flop-content {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.digital-box {
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  font-size: 16px;
  span {
    display: inline-block;
    width: 50%;
    text-align: center;
  }
}
</style>
