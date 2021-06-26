<template>
  <div class="tn-content">
    <div id="digital-flop-bp">
      <div
        class="digital-flop-item animated rotateInDownRight"
        v-for="item in data"
        :key="item.title"
      >
        <div class="digital-flop-title">{{ item.id }}</div>
        <div class="digital-flop">
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
import api from "@/api/index";
export default {
  name: "DigitalFlop",
  data() {
    return {
      data: [],
    };
  },
  methods: {
    createData() {
      api.getBpOutput().then((res) => {
        const { data = "" } = res;
        if (!data) return false;

        const _this = this;
        _this.data = data.data;
      });
    },
  },
  mounted() {
    const { createData } = this;

    createData();

    setInterval(createData, 300 * 1000);
  },
};
</script>

<style lang="less">
.tn-content {
  width: 100%;
  height: 100%;
  display: flex;
  // height: calc(~"100% - 50px");
}
#digital-flop-bp {
  // padding: 20px 0 0 0;
  box-sizing: border-box;
  width: 100%;
  position: relative;
  // height: 100%;
  flex-shrink: 0;
  display: flex;
  flex-wrap: wrap;
  .dv-decoration-10 {
    position: absolute;
    width: 100%;
    left: 0;
    height: 5px;
    bottom: 0px;
  }

  .digital-flop-item {
    width: 5.2%;
    // height:60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 5px 5px 0;
    background: rgba(195, 188, 188, 0.14);
    border-radius: 5px;
  }

  .digital-flop-title {
    font-size: 14px;
    height: 20px;
    padding: 5px 0 0 0;
    font-weight: bold;
  }

  .digital-flop {
    display: flex;
    // height: 40%;
  }

  .unit {
    margin-left: 10px;
    display: flex;
    align-items: flex-end;
    box-sizing: border-box;
    padding-bottom: 13px;
  }
  .digital-flop-count {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    font-weight: bold;
  }
  .red {
    color: #f84a4a;
  }
  .green {
    color: #25f3e6;
  }
}
</style>
