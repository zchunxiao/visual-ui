<!-- 吴山质检 -->
<template>
  <div class="pc-ws__quality">
    <dv-full-screen-container :full="isFullScreen">
      <top-header title="吴山未来工厂质量管理平台" />
      <div class="pc-ws-qt">
        <div class="pc-ws-qt__left">
          <div class="left__top">
            <dv-border-box-13>
              <div class="pc-ws-qt__title">连铸连轧在线检测</div>
              <table-scroll :config="lzlzconfig" />
            </dv-border-box-13>
          </div>

          <div class="left__center">
            <dv-border-box-13>
              <div class="pc-ws-qt__title">合膏工艺控制</div>
              <table-scroll :config="hgconfig" />
            </dv-border-box-13>
          </div>

          <div class="left__bottom">
            <dv-border-box-13>
              <div class="pc-ws-qt__title">连涂连分在线监测</div>
              <table-scroll :config="ltconfig" />
            </dv-border-box-13>
          </div>
        </div>
        <div class="pc-ws-qt__center">
          <div class="center__top">
            <dv-border-box-13>
              <lineChart :config="chartConfig1"></lineChart>
            </dv-border-box-13>
          </div>

          <div class="center__center">
            <dv-border-box-13>
              <lineChart :config="chartConfig2"></lineChart>
            </dv-border-box-13>
          </div>

          <div class="center__bottom">
            <dv-border-box-13>
              <div class="center__bottom-info">
                <div class="center__bottom-table">
                  <lineChart :config="chartConfig3"></lineChart>
                </div>
                <div class="center__bottom-ranking">
                  <scrollRanking></scrollRanking>
                </div>
              </div>
            </dv-border-box-13>
          </div>
        </div>
        <div class="pc-ws-qt__right">
          <div class="right__top">
            <dv-border-box-13>
              <lineChart :config="chartConfig4"></lineChart>
            </dv-border-box-13>
          </div>

          <div class="right__center">
            <dv-border-box-13>
              <div class="pc-ws-qt__title">安全阀在线AI监测</div>
              <div class="right__center-swiper">
                <swiper :options="swiperOption" ref="mySwiper">
                  <swiper-slide v-for="(data, index) in banner" :key="index">
                    <div
                      class="swiper-img"
                      :style="{
                        backgroundImage:
                          'url(http://192.168.79.125:10001/?t=img&idx=' +
                          (index + 1) +
                          ')',
                      }"
                    ></div>
                  </swiper-slide>
                </swiper>
              </div>
              <div class="right__center-box">
                <div class="right__center-item">
                  <digital-flop
                    text="合格率"
                    :config="rateConfig"
                  ></digital-flop>
                </div>
                <div class="right__center-item">
                  <digital-flop
                    text="过检电池总数"
                    :config="allConfig"
                  ></digital-flop>
                </div>
                <div class="right__center-item">
                  <digital-flop text="NG数据" :config="ngConfig"></digital-flop>
                </div>
              </div>
            </dv-border-box-13>
          </div>

          <div class="right__bottom">
            <dv-border-box-13>
              <dv-charts :option="chartsOption" />
            </dv-border-box-13>
          </div>
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
import topHeader from "@/components/views/topHeader";
import tableScroll from "@/components/views/tableScroll";
import lineChart from "@/components/views/lineChart";
import digitalFlop from "@/components/views/digitalFlop";
import scrollRanking from "@/components/views/scrollRanking";
import api from "@/api";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  data() {
    return {
      isFullScreen: false,
      lzlzconfig: {
        header: ["保温锅容量", "铅锅温度", "成型速度"],
        data: [],
        columnWidth: [50],
      },
      hgconfig: {
        header: ["温度", "酸量", "水", "铅粉"],
        data: [],
      },
      ltconfig: {
        header: ["涂板速度反馈", "干燥箱温度", "蜂鸣器", "燃烧器状态"],
        data: [],
        columnWidth: [50],
      },
      chartConfig1: {
        title: {
          text: "装配内部退货率",
          style: {
            fill: "#fff",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            textBaseline: "bottom",
          },
        },
        xAxis: {
          name: "第一周",
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          axisLine: {
            style: {
              stroke: "#fff",
              lineWidth: 1,
            },
          },
          nameTextStyle: {
            stroke: "#fff",
            fontSize: 12,
          },
          axisLabel: {
            style: {
              rotate: 20,
              textAlign: "left",
              textBaseline: "top",
              fill: "#fff",
              fontSize: 10,
            },
          },
          axisTick: {
            show: false,
          },
        },
        yAxis: {
          name: "销售额",
          data: "value",
          nameTextStyle: {
            stroke: "#fff",
            fontSize: 12,
          },
          axisLine: {
            style: {
              stroke: "#fff",
              lineWidth: 1,
            },
          },
          axisLabel: {
            formatter: "{value}",
            style: {
              fill: "#fff",
              fontSize: 10,
              rotate: 0,
              formatter: "{value} %",
            },
          },
          axisTick: {
            show: false,
          },
        },
        series: [
          {
            data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
            type: "line",
            smooth: true,
          },
        ],
      },
      chartConfig2: {
        title: {
          text: "装配压力数据趋势",
          style: {
            fill: "#fff",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            textBaseline: "bottom",
          },
        },
        xAxis: {
          name: "第一周",
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          axisLine: {
            style: {
              stroke: "#fff",
              lineWidth: 1,
            },
          },
          nameTextStyle: {
            stroke: "#fff",
            fontSize: 12,
          },
          axisLabel: {
            style: {
              rotate: 20,
              textAlign: "left",
              textBaseline: "top",
              fill: "#fff",
              fontSize: 10,
            },
          },
          axisTick: {
            show: false,
          },
        },
        yAxis: {
          name: "销售额",
          data: "value",
          nameTextStyle: {
            stroke: "#fff",
            fontSize: 12,
          },
          axisLine: {
            style: {
              stroke: "#fff",
              lineWidth: 1,
            },
          },
          axisLabel: {
            formatter: "{value}",
            style: {
              fill: "#fff",
              fontSize: 10,
              rotate: 0,
              formatter: "{value} %",
            },
          },
          axisTick: {
            show: false,
          },
        },
        series: [
          {
            data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
            type: "line",
            smooth: true,
          },
        ],
      },
      chartConfig3: {
        title: {
          text: "铸焊返修率趋势",
          style: {
            fill: "#fff",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            textBaseline: "bottom",
          },
        },
        xAxis: {
          name: "第一周",
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          axisLine: {
            style: {
              stroke: "#fff",
              lineWidth: 1,
            },
          },
          nameTextStyle: {
            stroke: "#fff",
            fontSize: 12,
          },
          axisLabel: {
            style: {
              rotate: 20,
              textAlign: "left",
              textBaseline: "top",
              fill: "#fff",
              fontSize: 10,
            },
          },
          axisTick: {
            show: false,
          },
        },
        yAxis: {
          name: "销售额",
          data: "value",
          nameTextStyle: {
            stroke: "#fff",
            fontSize: 12,
          },
          axisLine: {
            style: {
              stroke: "#fff",
              lineWidth: 1,
            },
          },
          axisLabel: {
            formatter: "{value}",
            style: {
              fill: "#fff",
              fontSize: 10,
              rotate: 0,
              formatter: "{value} %",
            },
          },
          axisTick: {
            show: false,
          },
        },
        series: [
          {
            data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
            type: "line",
            smooth: true,
          },
        ],
      },
      chartConfig4: {
        title: {
          text: "充电一次合格率",
          style: {
            fill: "#fff",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            textBaseline: "bottom",
          },
        },
        xAxis: {
          name: "第一周",
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          axisLine: {
            style: {
              stroke: "#fff",
              lineWidth: 1,
            },
          },
          nameTextStyle: {
            stroke: "#fff",
            fontSize: 12,
          },
          axisLabel: {
            style: {
              rotate: 20,
              textAlign: "left",
              textBaseline: "top",
              fill: "#fff",
              fontSize: 10,
            },
          },
          axisTick: {
            show: false,
          },
        },
        yAxis: {
          name: "销售额",
          data: "value",
          nameTextStyle: {
            stroke: "#fff",
            fontSize: 12,
          },
          axisLine: {
            style: {
              stroke: "#fff",
              lineWidth: 1,
            },
          },
          axisLabel: {
            formatter: "{value}",
            style: {
              fill: "#fff",
              fontSize: 10,
              rotate: 0,
              formatter: "{value} %",
            },
          },
          axisTick: {
            show: false,
          },
        },
        series: [
          {
            data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
            type: "line",
            smooth: true,
          },
        ],
      },
      swiperOption: {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
      },
      rateConfig: {},
      allConfig: {},
      ngConfig: {},
      chartsOption: {
        title: {
          text: "档位分布饼图",
          style: {
            fill: "#fff",
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "center",
            textBaseline: "bottom",
          },
        },

        series: [
          {
            type: "pie",
            data: [
              { name: "可口可乐", value: 93 },
              { name: "百事可乐", value: 32 },
              { name: "哇哈哈", value: 65 },
              { name: "康师傅", value: 44 },
              { name: "统一", value: 52 },
            ],
            insideLabel: {
              show: true,
            },
          },
        ],
      },
      banner: [
        "https://gegejia.oss-cn-hangzhou.aliyuncs.com/rubanAdmin/16028189495785.jpg",
        "https://gegejia.oss-cn-hangzhou.aliyuncs.com/rubanAdmin/16028189495785.jpg",
        "https://gegejia.oss-cn-hangzhou.aliyuncs.com/rubanAdmin/16028189495785.jpg",
        "https://gegejia.oss-cn-hangzhou.aliyuncs.com/rubanAdmin/16028189495785.jpg",
        "https://gegejia.oss-cn-hangzhou.aliyuncs.com/rubanAdmin/16028189495785.jpg",
      ],
    };
  },

  components: {
    topHeader,
    tableScroll,
    lineChart,
    digitalFlop,
    scrollRanking,
    Swiper,
    SwiperSlide,
  },

  computed: {},

  created() {
    if (document) {
      document.title = "吴山未来工厂质量管理平台";
    }
  },

  mounted() {
    const {
      createData,
      $route: { query },
    } = this;
    const { full } = query;
    this.isFullScreen = full ? true : false;

    createData();

    setInterval(createData, 30 * 1000);
  },

  methods: {
    createData() {
      api.wsQuality().then((res) => {
        if (!res || !res.data) return false;
        const { success, payload } = res.data;
        if (!success) return false;
        const {
          lzlzQmDetailDtoList = [],
          hgQmDetailDtoList = [],
          ltQmDetailDtoList = [],
          aiDto = {},
        } = payload;
        // 连铸连扎在线检测
        this.lzlzconfig.data = lzlzQmDetailDtoList.map((item) => {
          return [item.ingPotCap, item.ingPotTemp, item.fmtActualSpeed];
        });
        this.lzlzconfig = { ...this.lzlzconfig };

        // 合膏工业控制
        this.hgconfig.data = hgQmDetailDtoList.map((item) => {
          return [item.hgTemp, item.acidQty, item.waterQty, item.leadQty];
        });
        this.hgconfig = { ...this.hgconfig };

        // 连涂连分在线监测
        this.ltconfig.data = ltQmDetailDtoList.map((item) => {
          return [item.speed, item.dryTemp, item.buzzer, item.burner];
        });
        this.ltconfig = { ...this.ltconfig };
        // 利用率

        const { rate, ngQty, sum } = aiDto;
        this.rateConfig = {
          number: [rate],
          content: "{nt}%",
          toFixed: 2,
        };
        this.ngConfig = {
          number: [ngQty],
        };

        this.allConfig = {
          number: [sum],
        };
      });
    },
  },
};
</script>
<style scoped lang="less">



.pc-ws__quality {
  width: 100%;
  height: 100%;
  background: #030409;
  color: #fff;
}
.dv-border-box-13 {
  padding: 20PX;
  box-sizing: border-box;
}
.dv-border-box-13 /deep/ .border-box-content {
  overflow: hidden;
}
/deep/ .dv-scroll-ranking-board {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10PX;
}
#dv-full-screen-container {
  background-image: url("./img/bg.png");
  background-size: 100% 100%;
  box-shadow: 0 0 3PX blue;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.pc-ws-qt {
  display: flex;
  justify-content: space-between;
  height: calc(100% - 60PX);
  box-sizing: border-box;
}
.pc-ws-qt__left {
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.pc-ws-qt__center {
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.pc-ws-qt__right {
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.pc-ws-qt__title {
  font-size: 20PX;
  font-weight: bold;
  padding: 0 0 20PX 0;
  text-align: left;
}

// 左边
// 上
.left__top {
  box-sizing: border-box;
  // padding: 0 20PX;
  height: 32%;
}
.left__center {
  box-sizing: border-box;
  height: 32%;
}
.left__bottom {
  // width: 100%;
  box-sizing: border-box;

  height: 32%;
}
// 中
.center__top {
  box-sizing: border-box;
  height: 32%;
}
.center__center {
  box-sizing: border-box;
  height: 32%;
}
.center__bottom {
  box-sizing: border-box;
  height: 32%;
}
.center__bottom-info {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.center__bottom-table {
  flex: 2;
}
.center__bottom-ranking {
  flex: 1;
}
// 右
.right__top {
  box-sizing: border-box;
  height: 32%;
}
.right__center {
  box-sizing: border-box;
  height: 32%;
}
.right__center-swiper {
  height: 50%;
}
.swiper-container {
  height: 100%;
}
.swiper-img {
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20PX;
}
.right__center-box {
  display: flex;
  justify-content: space-between;
  margin: 10PX 0 0 0;
}
.right__center-item {
  // flex:1;
  width: 33%;
}
.right__bottom {
  box-sizing: border-box;
  height: 32%;
}


</style>
