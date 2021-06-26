<!--  -->
<template>
  <dv-charts :option="getConfig" />
</template>

<script>
export default {
  data() {
    return {
      option: {
        title: {
          text: "最近七天回路利用率",
          style: {
            fill: "#fff",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            textBaseline: "bottom"
          }
        },
        legend: {
          data: ["产量", "利用率"],
          bottom: 10,
          textStyle: {
            fontFamily: "Arial",
            fontSize: 13,
            fill: "#fff"
          }
        },
        xAxis: {
          name: "日期",
          axisLine: {
            style: {
              stroke: "#fff",
              lineWidth: 1
            }
          },
          nameTextStyle: {
            stroke: "#fff",
            fontSize: 12
          },
          data: [1, 2, 3],
          axisLabel: {
            style: {
              rotate: 20,
              textAlign: "left",
              textBaseline: "top",
              fill: "#fff",
              fontSize: 10
            }
          },
          axisTick: {
            show: false
          }
        },
        yAxis: [
          {
            name: "产量",
            data: "value",
            nameTextStyle: {
              stroke: "#fff",
              fontSize: 12
            },
            axisLine: {
              style: {
                stroke: "#fff",
                lineWidth: 1
              }
            },
            min: 0,
            max: 10000000,
            interval: 1000000,
            splitLine: {
              style: {
                lineDash: [3, 3]
              },
              show: false
            },
            axisLabel: {
              formatter: "{value}",
              style: {
                fill: "#fff",
                fontSize: 10,
                rotate: 0,
                formatter: "{value} %"
              }
            },
            axisTick: {
              show: false
            }
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
                lineWidth: 1
              }
            },
            nameTextStyle: {
              stroke: "#fff",
              fontSize: 12
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              formatter: "{value}",
              style: {
                fill: "#fff",
                fontSize: 10,
                rotate: 0,
                formatter: "{value} %"
              }
            },
            axisTick: {
              show: false
            }
          }
        ],
        series: [
          {
            name: "产量",
            data: [7, 8, 9],
            type: "bar",
            gradient: {
              color: ["#37a2da", "#67e0e3"]
            },
            backgroundBar: {
              show: true
            },
            nameTextStyle: {
              stroke: "#fff",
              fontSize: 12
            },
            animationCurve: "easeOutBounce"
          },
          {
            name: "利用率",
            data: [4, 5, 6],
            type: "line",
            yAxisIndex: 1,
            animationCurve: "easeOutBounce"
          }
        ]
      }
    };
  },
  props: {
    config: {
      required: true,
      type: Object
    }
  },
  components: {},

  computed: {
    getConfig() {
      return {
        ...this.option,
        ...this.config
      };
    }
  },

  created() {},

  mounted() {},

  methods: {}
};
</script>
<style scoped></style>
