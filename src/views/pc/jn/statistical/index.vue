<!-- 晶能充放电数据 -->
<template>
  <div id="data-view">
    <base-container>
      <top-header title="晶能充放电数据" />
      <div class="block-top-bottom-content">
        <div class="block-top-content">
          <div class="item-box">
            <digital-flop :config-day="configDay" :config-month="configMonth" />
          </div>
          <div class="item-box">
            <water-level-chart :list="list" />
          </div>
          <div class="item-box">
            <rose-chart :option="option" />
          </div>
        </div>
        <div class="block-bottom-content">
          <div class="item-box">
            <chart :option="trendOption" />
          </div>
          <div class="item-box">
            <loop-chart :option="loopOption" />
          </div>
          <div class="item-box">
            <scroll-board :warn-list="warnList" />
          </div>
        </div>
      </div>
    </base-container>
  </div>
</template>

<script>
import digitalFlop from "@/components/statistical/digitalFlop";
import roseChart from "@/components/statistical/roseChart";
import waterLevelChart from "@/components/statistical/waterLevelChart";
import scrollBoard from "@/components/statistical/scrollBoard";
import chart from "@/components/statistical/chart";
import loopChart from "@/components/statistical/loopChart";
import api from "@/api";

export default {
  name: "DataView",
  components: {
    digitalFlop,
    roseChart,
    waterLevelChart,
    scrollBoard,
    chart,
    loopChart,
  },
  data() {
    return {
      configMonth: {},
      configDay: {},
      list: [],
      option: {},
      trendOption: {},
      loopOption: {},
      warnList: {},
    };
  },
  created() {},
  methods: {
       // 获取当前日期前7天日期
    getListDay(){
      var myDate = new Date(); //获取今天日期
      myDate.setDate(myDate.getDate() - 7);
      var dateArray = []; 
      var dateTemp; 
      var flag = 1; 
      for (var i = 0; i < 7; i++) {
          dateTemp =(myDate.getFullYear())+"-"+(myDate.getMonth()+1)+"-"+myDate.getDate();
          dateArray.push(dateTemp);
          myDate.setDate(myDate.getDate() + flag);
      }
      return dateArray;
   
    },
    // 处理小数数据为百分比展示
    formatNum(value) {
      return (+value * 100).toFixed(1);
    },
    async getData() {
      await api.fetchJnDayNum().then((res) => {

        if(!res)return false;
        const {code,msg,data}= res;
        if(code!=0){
          console.log(msg);
          return false;
        }
  
        const tempList = (data || []).map((item) => {
          return {
            name: `<span class="data-name">${item.room}</span>`,
            value: item.output,
          };
        });
        this.configDay = {
          rowNum: 6,
          data: tempList,
        };
      });
      await api.fetchJnMonthNum().then((res) => {
     
        if(!res)return false;
        const {code,msg,data}= res;
        if(code!=0){
          console.log(msg);
          return false;
        }
     
        const tempList = (data || []).map((item) => {
          return {
            name: `<span class="data-name">${item.room}</span>`,
            value: item.output,
          };
        });

        this.configMonth = {
          rowNum: 6,
          data: tempList,
        };
      });
    },
    createData() {
      // 获取当月当日产量
      this.getData();

      // 机房利用率
      api.fetchJnRealTimeAvailability().then((res) => {


        if(!res)return false;
        const {code,msg,data}= res;
        if(code!=0){
          console.log(msg);
          return false;
        }

    
        this.list = data;
        for (let i = 0, len = data.length; i < len; i++) {
          this.list[i].config = {
            data: [(data[i].availability * 100).toFixed(1)],
            shape: "round",
            waveHeight: 25,
            waveNum: 2,
          };
        }
      });

      // 回路状态分布
      api.fetchJnLoopState().then((res) => {
         if(!res)return false;
        const {code,msg,data}= res;
        if(code!=0){
          console.log(msg);
          return false;
        }
        const { DISCHARGE, ALARM, TIME_OUT, CHARGING, IDLE } = data;

        this.option = {
          series: [
            {
              type: "pie",
              radius: "50%",
              roseSort: false,
              data: [
                { name: "充电", value: +CHARGING },
                { name: "放电", value: +DISCHARGE },
                { name: "暂停", value: +TIME_OUT },
                { name: "报警", value: +ALARM },
                { name: "闲置", value: +IDLE },
              ],
              insideLabel: {
                show: false,
              },
              outsideLabel: {
                formatter: "{name} {percent}%",
                labelLineEndLength: 20,
                style: {
                  fill: "#fff",
                },
                labelLineStyle: {
                  stroke: "#fff",
                },
              },
            },
          ],
          color: ["#1370fb", "#ccc", "#25f3e6", "#fa3600", "#fedb5d"],
        };
      });

      // 最近七天能耗趋势
      api.fetchJnTrend().then((res) => {
          if(!res)return false;
        const {code,msg,data}= res;
        if(code!=0){
          console.log(msg);
          return false;
        }

        const list = data.map((item) => {
          return item.time;
        });

        const energyConsumption = data.map((item) => {
          return item.energyConsumption;
        });

        this.trendOption = {
          title: {
            text: "最近七天能耗趋势",
            style: {
              fill: "#fff",
              fontSize: 20,
              textAlign: "center",
              textBaseline: "bottom",
              fontWeight: "bold",
            },
          },
          xAxis: {
            name: "日期",
            data: list,
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
                fill: "#fff",
                fontSize: 10,
                rotate: 20,
                textAlign: "left",
                textBaseline: "top",
              },
            },
          },
          yAxis: {
            name: "能耗",
            data: "value",
            axisLine: {
              style: {
                stroke: "#fff",
                lineWidth: 1,
              },
            },
            splitLine: {
              show: false,
            },
            nameTextStyle: {
              stroke: "#fff",
              fontSize: 12,
            },
            axisLabel: {
              style: {
                fill: "#fff",
                fontSize: 10,
                rotate: 0,
              },
            },
          },
          series: [
            {
              data: energyConsumption,
              type: "bar",
              gradient: {
                color: ["#37a2da", "#67e0e3"],
              },
              backgroundBar: {
                show: true,
              },
            },
          ],
        };
      });

      // 最近七天回路利用率
      api.fetchJnUtilRate().then((res) => {
         if(!res)return false;
        const {code,msg,data}= res;
        if(code!=0){
          console.log(msg);
          return false;
        }

        // 利用率
        var list = (data || []).map((item) => {
          return +this.formatNum(item.utilization);
        });
        // 产量
        var list1 = (data || []).map((item) => {
          return +this.formatNum(item.output);
        });

        this.loopOption = {
          title: {
            text: "最近七天回路利用率",
            style: {
              fill: "#fff",
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
              textBaseline: "bottom",
            },
          },
          legend: {
            data: ["产量", "利用率"],
            bottom: 10,
            textStyle: {
              fontFamily: "Arial",
              fontSize: 13,
              fill: "#fff",
            },
          },
          xAxis: {
            name: "日期",
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
            data: this.getListDay(),
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
          yAxis: [
            {
              name: "产量",
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
              min: 0,
              max: 10000000,
              interval: 1000000,
              splitLine: {
                style: {
                  lineDash: [3, 3],
                },
                show: false,
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
            {
              name: "利用率 %",
              data: "value",
              position: "right",
              min: 0,
              max: 100,
              interval: 10,
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
              splitLine: {
                show: false,
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
          ],
          series: [
            {
              name: "产量",
              data: list1,
              type: "bar",
              gradient: {
                color: ["#37a2da", "#67e0e3"],
              },
              backgroundBar: {
                show: true,
              },
              nameTextStyle: {
                stroke: "#fff",
                fontSize: 12,
              },
              animationCurve: "easeOutBounce",
            },
            {
              name: "利用率",
              data: list,
              type: "line",
              yAxisIndex: 1,
              animationCurve: "easeOutBounce",
            },
          ],
        };
      });
      // 异常列表
      api.fetchJnListAlarmInfo().then((res) => {
       if(!res)return false;
        const {code,msg,data}= res;
        if(code!=0){
          console.log(msg);
          return false;
        }
        this.warnList = {
          header: ["机房编号", "电脑编号", "回路编号"],
          data: data,
          index: true,
          columnWidth: [50, 100, 200, 100],
          align: ["center"],
          rowNum: 6,
          headerBGC: "rgba(195,188,188,0.3)",
          headerHeight: 45,
          oddRowBGC: "rgba(64, 72, 91,0.5)",
          evenRowBGC: "171a30",
          // carousel:"page",
          // waitTime:"5000"
        };
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
#data-view {
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #fff;

  #dv-full-screen-container {
    background-image: url("./img/bg.png");
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
    height: 100%;
    box-sizing: border-box;
  }

  .block-top-bottom-content {
    height: calc(100% - 60px);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .block-top-content {
    height: 48%;
    display: flex;
    width: 100%;
    position: relative;
    justify-content: space-between;

    box-sizing: border-box;
  }
}
.block-bottom-content {
  height: 48%;
  width: 100%;
  display: flex;
  // margin:20PX 0 0 0;
  justify-content: space-between;
}
.dv-decoration-10 {
  position: absolute;
  width: 95%;
  left: 2.5%;
  height: 5px;
  bottom: 0px;
}
.item-box {
  width: 32%;
}
</style>
