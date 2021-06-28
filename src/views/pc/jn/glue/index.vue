<!-- 吴山点胶机 -->
<template>
  <div id="data-view-ws">
    <base-container>
      <top-header title="晶能点胶机实时产量看板" />
      <div class="data-content">
        <div class="data-top">
          <dv-border-box-12>
            <div class="data-top-content">
              <div style="width:40%">
                <rose-chart :option="pieOption" title="开关机情况" />
              </div>
              <div class="data-top-info">
                <div class="data-title">型号产量</div>
                <div class="data-list-content">
                  <div
                    class="data-list"
                    v-for="(item, index) in modelOutputList"
                    v-bind:key="index"
                  >
                    <dv-border-box-2 backgroundColor="#009eff">
                      <div class="data-item">
                        <div class="data-item-title">{{ item.key }}</div>
                        <div class="data-item-value">{{ item.value }}</div>
                      </div>
                    </dv-border-box-2>
                  </div>
                </div>
              </div>
            </div>
          </dv-border-box-12>
        </div>
        <div class="data-bottom">
          <dv-border-box-12>
            <div class="data-bottom-info">
              <div class="data-title">设备产量</div>
              <div class="data-list-content">
                <div
                  class="data-list-bottom"
                  v-for="(item, index) in devOutput"
                  v-bind:key="index"
                >
                  <dv-border-box-13>
                    <div class="data-item-bottom">
                      <div class="data-item-title-bottom">{{ item.mac }}</div>
                      <div
                        v-if="
                          item.modelOutputVoList &&
                            item.modelOutputVoList.length > 0
                        "
                      >
                        <div
                          v-for="(data, i) in item.modelOutputVoList"
                          v-bind:key="i"
                          class="data-item-info"
                        >
                          <div>型号:{{ data.model }}</div>
                          <div>产量:{{ data.output }}</div>
                        </div>
                      </div>
                      <div v-else class="data-item-info">
                        暂无产量
                      </div>
                    </div>
                  </dv-border-box-13>
                </div>
              </div>
            </div>
          </dv-border-box-12>
        </div>
      </div>
    </base-container>
  </div>
</template>

<script>

import roseChart from "@/components/glue/roseChart.vue";
import api from "@/api";

export default {
  data() {
    return {
      devOutput: [],
      modelOutputList: [],
      pieOption: {},
    };
  },

  components: {
    roseChart,
  },

  computed: {},

  mounted() {
    const { createData } = this;

    createData();

    setInterval(createData, 300 * 1000);
  },

  methods: {
    createData() {
      const _this = this;
      api.getJnOutput().then((res) => {
          if(!res)return false;
        const {code,msg,data}= res;
        if(code!=0){
          console.log(msg);
          return false;
        }
  
        const { devOutput, modelOutput } = data;
        _this.devOutput = devOutput;
        _this.modelOutput = modelOutput;
        const keys = Object.keys(modelOutput),
          values = Object.values(modelOutput);
        let list = keys.map((item, index) => {
          return {
            key: item,
            value: values[index],
          };
        });
        _this.modelOutputList = list;
      });
      api.getJnStatus().then((res) => {
        if(!res)return false;
        const {code,msg,data}= res;
        if(code!=0){
          console.log(msg);
          return false;
        }

        const { onlineDev, allDev } = data;

        _this.pieOption = {
          data: [
            { name: "在线", value: +onlineDev },
            { name: "离线", value: +(allDev - onlineDev) },
          ],
          color: ["#D9523F", "#009eff"],
          digitalFlopStyle: {
            fontSize: 16,
            fill: "#fff",
          },
        };
      });
    },
  },
  created() {},
};
</script>
<style lang="less" scoped>
#data-view-ws {
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #fff;
  .data-top-content {
    display: flex;
    height: 100%;
  }
  .data-content {
    height: 90%;
    margin: 0 20px;
  }
  .data-top {
    height: 50%;
    width: 100%;
    padding-bottom: 20px;
  }
  .data-bottom {
    height: 50%;
    width: 100%;
    padding-bottom: 20px;
    overflow: hidden;
  }
  .data-list-content {
    margin: 0 20px;
    height:calc(100% - 60px);
    display: flex;
    justify-content: space-around;
    // align-items: center;
    .data-list {
      // width:30%;
      flex: 1;
      height: 100%;
    }
  }
  .data-top-info {
    margin: 20px 0;
    width: 60%;
  }
  .data-title {
    font-size: 22px;
    font-weight: bold;
    text-indent: 20px;
  }
  .dv-border-box-12 .border-box-content {
    overflow: hidden !important;
  }
  .data-bottom-info {
    width: 100%;
    height: 100%;
    padding: 20px;
  }
  .data-list-bottom {
    //    flex:1;
    height: 90%;
    width: 15%;
  }
  .data-item {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px 10px;
    text-align: center;
  }
  .data-item-bottom {
    width: 100%;
    height: 100%;
    padding: 20px 10px;
    text-align: center;
    box-sizing: border-box;
  }
  .data-item-title {
    font-weight: bold;
    font-size: 60px;
  }
  .data-item-title-bottom {
    font-weight: bold;
    font-size: 20px;
    padding-top: 5px;
  }
  .data-item-info {
    text-align: left;
    padding: 10px 20px;
    font-weight: bold;
    background: rgba(195, 188, 188, 0.14);
    margin: 5px 0 0 0;
  }
  .data-item-value {
    font-weight: bold;
    font-size: 60px;
  }
}
</style>
