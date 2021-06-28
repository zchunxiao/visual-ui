<template>
  <div class="tn-content-ms1">
    <div id="digital-flop">
      <div class="digital-flop-item" v-for="item in data" :key="item.title">
        <div class="digital-flop-title">{{ item.title }}</div>
        <div class="digital-flop">
          {{ item.model }}:
          <div class="digital-flop-count green" v-if="item.count > 0">
            {{ item.count }}
          </div>
          <div class="digital-flop-count red" v-else>{{ item.count }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DigitalFlop",
  data() {
    return {
      digitalFlopData: [],
    };
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  methods: {
    createData() {},
  },
  mounted() {
    const { createData } = this;

    createData();

    setInterval(createData, 30000);
  },
};
</script>

<style lang="less" scoped>
#digital-flop {
  width: 100%;
  // height: 100%;
  height: calc(~"100% - 20PX");
  position: relative;
  // flex-shrink: 0;
  display: flex;
  flex-wrap: wrap;
  padding: 0 0 0 1%;
  
  .dv-decoration-10 {
    position: absolute;
    width: 100%;
    left: 0;
    height: 5PX;
    bottom: 0PX;
  }

  .digital-flop-item {
    width: 9.5%;
    height: 24%;
    text-align: center;
    background: rgba(195, 188, 188, 0.14);
    margin: 0 5PX 2PX 0;/*no*/
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .digital-flop-title {
    font-size: 14PX;
    padding: 6PX 0 0 0;
    font-weight: bold;
  }

  .digital-flop {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12PX;
  }

  .unit {
    margin-left: 10PX;
    display: flex;
    align-items: flex-end;
    box-sizing: border-box;
    padding-bottom: 13PX;
  }
  .digital-flop-count {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26PX;
    font-weight: bold;
  }
  .red {
    color: #f84a4a;
  }
  .green {
    color: #25f3e6;
  }
}
.tn-content-ms1 {
  width: 100%;
  box-sizing: border-box;
  height: calc(~"100% - 60PX");
}
</style>
