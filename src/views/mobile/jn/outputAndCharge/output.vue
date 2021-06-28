<!--  -->
<template>
  <mobile-container>
    <div class="p-assemble" :style="{ 'min-height': heightStyle }">
      <div class="title">晶能装配产量看板</div>
      <div class="search">
        <div class="search__item" @click="openPicker">
          <span>日期</span>
          <span>{{ today }}</span>
        </div>

        <div class="search__item">
          <mt-radio
            title="班次"
            v-model="value"
            :options="options"
            @change="check"
          />
        </div>

        <div>
          <mt-button type="primary" @click="getData" size="small"
            >查询</mt-button
          >
        </div>

        <mt-datetime-picker
          ref="picker"
          type="date"
          v-model="workDate"
          @confirm="handleConfirm"
        >
        </mt-datetime-picker>
      </div>
      <card title="开工确认">
        <div>
          <div class="p-confirm-item">开工人数: {{ employmentCount }}</div>
          <div class="p-confirm-item">开工时间: {{ startTime }}</div>
          <div class="p-confirm-item">站点产量: {{ siteAll }}</div>
          <div class="p-confirm-item">
            人均产出: {{ siteAverage }}
            <!-- <div class="p-confirm-item__line"></div> -->
          </div>
        </div>
      </card>

      <!--
      <card title="铸焊">
        <p class="p-title">今日实时产量: 0</p>
        <customer-table :header="header" :data="modelOutput" />
      </card>
      -->

      <card title="点胶">
        <p class="p-title">今日实时产量: {{ djRealTimeOutput }}</p>
        <div>
          <table>
            <thead>
              <tr>
                <td v-for="(data, index) in header" :key="index">
                  {{ data }}
                </td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in devOutput" :key="index">
                <td>{{ item.siteName }}</td>
                <td>{{ item.devName }}</td>
                <td>{{ item.employeeCount }}</td>
                <td>{{ item.count }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </card>
    </div>
  </mobile-container>
</template>

<script>
import api from "@/api";
import moment from "moment";
export default {
  data() {
    return {
      workShift: "",
      workDate: new Date(),
      today: moment(new Date()).format("YYYY-MM-DD"),
      header: ["站点", "设备", "员工", "产量"],
      djRealTimeOutput: "",
      modelOutput: [],
      devOutput: [],
      heightStyle: "0px",
      employmentCount: 0,
      startTime: "",
      siteAll: 0,
      siteAverage: 0,
      // 存放所选选项（字符串）
      value: "",
      // radio的选项
      options: [
        { label: "白班", value: "day_shift" },
        { label: "夜班", value: "night_shift" },
      ],
    };
  },

  computed: {},

  mounted() {
    this.heightStyle = window.innerHeight + "px";
    const { getData } = this;
    getData();
  },

  methods: {
    check: function() {
      this.workShift = this.value;
    },

    getData() {
      const { getList, getOutput } = this;
      getList();
      getOutput();
    },
    getList() {
      const { workShift, today } = this;
      api.getWorkList({ workShift, workDate: today }).then((res) => {
        if(!res || !res.payload) return false;
        const { startTime = "", employmentCount } = res.payload;
        this.employmentCount = employmentCount;
        this.startTime = startTime;
      });
    },
    getOutput() {
      const { workShift, today } = this;
      api.getOutput({ workShift, workDate: today }).then((res) => {
        const { code, data } = res;
        if (code != 0) return false;
        const { djRealTimeOutput, devOutput } = data;
        this.djRealTimeOutput = djRealTimeOutput;
        this.devOutput = devOutput;

        this.siteAll = 0;
        devOutput.map((item) => {
          this.siteAll += item.count;
        });

        if (this.employmentCount == 0) {
          this.siteAverage = (+this.siteAll).toFixed(2);
        } else {
          this.siteAverage = (+this.siteAll / this.employmentCount).toFixed(2);
        }
      });
    },
    openPicker() {
      this.$refs.picker.open();
    },
    handleConfirm(data) {
      this.workDate = moment(data).format("YYYY-MM-DD");
      this.today = moment(data).format("YYYY-MM-DD");
    },
  },
};
</script>
<style>
.p-assemble {
  margin: 0 0.53rem;
  font-size: 0.53rem;
  overflow: hidden;
}
.p-confirm-item {
  text-align: left;
  padding: .13rem 0 .13rem .27rem;
}
/* .p-confirm-item__line {
  width: 100%;
  background: #fff;
  height: 1px;
} */
.p-title {
  text-align: left;
}

table {
  width: 100%;
}
td {
  border: 1px solid #fff;
}
.search {
  /* display: flex;
  justify-content: space-around; */
  margin: 0 .26rem .53rem .26rem;
  overflow: hidden;
}
.search__item {
  display: flex;
  justify-content: space-between;
  background: #fff;
  color: #000;
  padding: .26rem;
  font-size:.35rem;
  border-radius: .13rem;
  margin: 0 0 .27rem 0;
}
.picker-items {
  width: 100%;
}
/* .p-assemble__date {
  border: 1px solid #fff;
  padding: 10px;
  display: block;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
} */
.mint-radiolist {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.mint-radiolist-title {
  font-size: .32rem;
  font-weight: bold;
  color: #000;
  margin: 0;
}
.mint-cell {
  min-height: 0.53rem;
  display: flex;
  align-items: center;
}
.mint-button {
  width: 60%;
}
.mint-cell::before,
.mint-cell::after {
  display: none;
}
</style>
