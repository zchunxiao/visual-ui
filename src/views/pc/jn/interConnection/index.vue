<template>
  <div id="data-view-ms">
    <base-container>
      <top-header title="晶能工业互联实时产量看板" />

      <div class="main-content">
        <div class="main-top">
          <div class="main-top-content">
            <div class="main-num">
              <dv-border-box-13>
                <div class="main-top-title main-title1">铸焊机实时产量</div>
                <digital-flop :data="digitalFlopData" />
              </dv-border-box-13>
            </div>
          </div>
        </div>
        <div class="main-bottom">
          <dv-border-box-7>
            <div class="after-box">
              <div class="after-box__item">
                <div class="main-top-title main-title">充放电实时信息</div>
                <div class="main-bottom-content">
                  <div
                    v-for="(item, index) in chargeDischarge"
                    v-bind:key="index"
                    class="main-item"
                  >
                    <div
                      :class="{
                        'main-bottom-item': index != 5,
                        'main-bottom-item main-bottom-item-no': index == 5,
                      }"
                    >
                      <div class="main-title">{{ item.roomId }}机房</div>

                      <div class="main-bottom-list-top">
                        <div class="main-bottom-item-box">
                          <div class="main-bottom-data">
                            <div class="main-bottom-data-desc">
                              <span>今日上架</span>
                              <div>{{ item.grounding }}</div>
                            </div>
                            <div class="main-bottom-data-desc1">
                              <span>今日下架</span>
                              <div>{{ item.underCarriage }}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="main-bottom-list-bottom">
                        <div class="main-title">
                          正在充电 {{ item.charging }}
                        </div>
                        <dv-percent-pond :config="item.config1" />
                        <div class="main-title">
                          正在放电 {{ item.disCharging }}
                        </div>
                        <dv-percent-pond :config="item.config2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="after-box__item">
                <!-- 点胶信息开始 -->
                <div class="data-bottom-info">
                  <div class="data-title main-title">封装</div>
                  <div class="data-list-content">
                    <div
                      class="data-list-bottom"
                      v-for="(item, index) in devOutput"
                      v-bind:key="index"
                    >
                      <dv-border-box-13>
                        <div class="data-item-bottom">
                          <div class="data-item-title-bottom">
                            {{ item.mac }}
                          </div>
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
                              <span>型号:{{ data.model }}</span>
                              <span>产量:{{ data.output }}</span>
                            </div>
                          </div>
                          <div class="data-item-info" v-else>暂无产量</div>
                        </div>
                      </dv-border-box-13>
                    </div>
                  </div>
                </div>
                <!-- 点胶信息结束 -->
              </div>
            </div>
          </dv-border-box-7>
        </div>
      </div>
    </base-container>
  </div>
</template>

<script>
import digitalFlop from "@/components/interConnection/digitalFlop";
import api from "@/api";

export default {
  name: "DataView",
  components: {
    digitalFlop,
  },
  data() {
    return {
      chargeDischarge: {},
      // 环形图
      pieOption: {},
      //数字
      digitalFlopData: [],
      devOutput: [],
    };
  },
  methods: {
    createData() {
      const _this = this;
      api.getJnBaseMap().then((res) => {
     
        const {code,msg,data}= res;
        if(code!=0){
          console.log(msg);
          return false;
        }

 
        const { chargeDischarge, machineStartup, castWeldOutput } = data;
        _this.chargeDischarge = chargeDischarge;
        (chargeDischarge || []).map((item) => {
          item.config1 = {
            value: ((item.charging / item.totalLoop) * 100).toFixed(0),
            borderWidth: 5,
            borderRadius: 10,
            borderGap: 5,
          };
          item.config2 = {
            value: ((item.disCharging / item.totalLoop) * 100).toFixed(0),
            borderWidth: 5,
            borderRadius: 10,
            borderGap: 5,
          };
        });

        _this.pieOption = {
          data: [
            { name: "在线", value: machineStartup.onLine },
            { name: "离线", value: machineStartup.offLine },
          ],
          color: ["#13D0B2", "#D9523F"],
          digitalFlopStyle: {
            fontSize: 16,
            fill: "#fff",
          },
        };
        _this.digitalFlopData = (castWeldOutput || []).map((item) => {
          item.title = item.id;
          item.number = {
            number: [item.count],
            content: "{nt}",
            textAlign: "center",
            style: {
              fill: "#4d99fc",
              fontWeight: "bold",
            },
          };
          return item;
        });
      });

      api.getMsOutput().then((res) => {
          if(!res)return false;
        const {code,msg,data}= res;
        if(code!=0){
          console.log(msg);
          return false;
        }
        const { devOutput, modelOutput } =data;
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
    },
  },
  created() {},
  mounted() {
    const { createData } = this;

    createData();

    setInterval(createData, 120 * 1000);
  },
};
</script>

<style lang="less">
#data-view-ms {
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #fff;

  .main-num {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    .border-box-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  #dv-full-screen-container {
    background-image: url("./img/bg-ms.png");
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
  }

  .main-content {
    height: calc(100% - 60px);
    margin: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
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
  .main-top {
    width: 100%;
    height: 40%;
    position: relative;
    box-sizing: border-box;
  }
  .main-top-title {
    font-size: 20px;
    font-weight: bold;
    text-indent: 20px;
  }

  .main-bottom {
    width: 100%;
    height: 56%;
    position: relative;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
  }
  .main-bottom-item {
    text-align: center;
    border-right: 2px solid rgba(1, 153, 209, 0.5);
    flex: 1;
  }
  .main-bottom-item-box {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  .main-bottom-item-no {
    border: none;
  }
  .main-item {
    flex: 1;
    text-align: center;
    box-sizing: border-box;
    display: flex;
    align-items: center;
  }
  .main-item-name {
    display: inline-block;
    width: 50%;
  }
  .main-title {
    font-weight: bold;
    padding: 10px 0;
  }
  .main-top-content {
    display: flex;
    height: 100%;
  }
  .main-bottom-content {
    display: flex;
    height: calc(100% - 60px);
  }
  .main-title1 {
    padding: 20px 0 0 0;
  }
  .main-bottom-data {
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    margin: 10px;

    &-desc,
    &-desc1 {
      width: 45%;
      height: 50%;
      border-radius: 10px;
      background: #0abdeb;
      span {
        font-weight: bold;
        font-size: 16px;
        display: inline-block;
        padding: 10px 0 5px 0;
      }
      div {
        font-size: 26px;
        padding: 0 0 5px 0;
      }
    }
    &-desc1 {
      background: #13d0b2;
    }
  }
  .main-bottom-list-top,
  .main-bottom-list-bottom {
    height: 50%;
  }
  .main-bottom-list-bottom {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }
  .dv-percent-pond {
    margin: 0 20px 10px 20px;
    height: 50px;
  }
  .dv-border-box-7 {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .dv-border-box-13 {
    display: flex;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .after-box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .after-box__item {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  // 点胶信息
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
    // height:30%;
    display: flex;
    justify-content: space-around;
    .data-list {
      flex: 1;
      height: 90%;
    }
  }
  .data-top-info {
    margin: 20px 0;
    width: 35%;
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
    height: 100%;
  }
  .data-list-bottom {
    height: 100%;
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
    display: flex;
    justify-content: space-around;
    border-radius: 5px;
  }
  .data-item-value {
    font-weight: bold;
    font-size: 60px;
  }
}
</style>
