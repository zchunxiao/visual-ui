<!-- 动力能源 -->
<template>
  <div id="data-view-power">
    <base-container>
      <top-header title="动力能源工业互联网数据驾驶舱" />

      <div class="power-main">
        <div class="power-main-left" style="width:25%">
          <div class="top" style="height:24%">
            <dv-border-box-13 backgroundColor="transparent">
              <div class="title">
                <div class="title-top">
                  连铸连轧铅材料耗用
                  <div class="line" />
                </div>

                <div class="item-info">
                  <div class="item-info-box bg">
                    <div class="item-content">
                      <div class="item-content-title">铅日耗用</div>
                      <dv-digital-flop
                        :config="qdDayQtyConfig"
                        style="width:100%;height:50px;"
                      />
                      <!-- <span class="item-content-num">{{qdReportDto.qdDayQty}}吨</span> -->
                    </div>
                  </div>
                  <div class="item-info-box bg">
                    <div class="item-content">
                      <div class="item-content-title">月度累计耗用</div>
                      <dv-digital-flop
                        :config="qdMonthQtyConfig"
                        style="width:100%;height:50px;"
                      />

                      <!-- <span class="item-content-num">{{qdReportDto.qdMonthQty}}吨</span> -->
                    </div>
                  </div>
                  <div class="item-info-box bg">
                    <div class="item-content">
                      <div class="item-content-title">库存量</div>
                      <dv-digital-flop
                        :config="stockDataConfig"
                        style="width:100%;height:50px;"
                      />
                      <!-- <span class="item-content-num">{{stockData}}吨</span> -->
                    </div>
                  </div>
                </div>
              </div>
            </dv-border-box-13>
          </div>

          <div class="top" style="height:24%">
            <div style="height:100%;display:flex;">
              <dv-border-box-13 style="margin-right:20px">
                <div class="title">
                  <div class="title-top">
                    球磨工序
                    <div class="line" />
                  </div>

                  <div class="item-info-qm">
                    <div class="bg more1">
                      实时产量：<span class="green">{{
                        formatNum(qmObj.realTimeOutput)
                      }}</span
                      >吨
                    </div>
                    <div class="bg more1">
                      铅粉库存：<span class="green">{{
                        formatNum(qmObj.stack)
                      }}</span
                      >吨
                    </div>
                    <div class="bg more1">
                      累计产量：<span class="green">{{
                        formatNum(qmObj.accumulateOutput)
                      }}</span
                      >吨
                    </div>
                  </div>
                </div>
              </dv-border-box-13>
              <dv-border-box-13>
                <div class="title">
                  <div class="title-top">
                    合膏工序
                    <div class="line" />
                  </div>

                  <div class="item-info-qm">
                    <div class="bg more2">
                      正合膏产量：<span class="green">{{
                        formatNum(hgReportDto.positiveWeight)
                      }}</span
                      >吨
                    </div>
                    <div class="bg more2">
                      负合膏产量：<span class="green">{{
                        formatNum(hgReportDto.negativeWeight)
                      }}</span
                      >吨
                    </div>
                    <div class="bg more2">
                      正合膏锅数：<span class="green">{{
                        hgReportDto.positiveQty
                      }}</span>
                    </div>
                    <div class="bg more2">
                      负合膏锅数：<span class="green">{{
                        hgReportDto.negativeQty
                      }}</span>
                    </div>
                  </div>
                </div>
              </dv-border-box-13>
            </div>
          </div>

          <div class="top" style="height:52%">
            <dv-border-box-13>
              <div class="title">
                <div class="title-top">
                  连铸连轧
                  <div class="line" />
                </div>

                <div class="item-machine">
                  <div
                    class="item-machine-box bg"
                    v-for="(item, index) in lzlzReportDto.qdData"
                    :key="index"
                  >
                    <div class="item-machine-text">
                      {{ item.materialDescription }}
                    </div>
                    <dv-digital-flop
                      :config="item.number"
                      style="width:100%;height:48px;"
                    />
                  </div>
                </div>
                <div class="rate-box">
                  <dv-percent-pond
                    v-for="(data, index) in lzlzReportDto.qdData"
                    :key="index"
                    :config="data.config"
                    style="width:49%;height:45px;margin:10px auto 0"
                  />
                </div>

                <div class="title-top mt">
                  冲网
                  <div class="line" />
                </div>
                <div class="item-machine">
                  <div
                    class="item-machine-box bg"
                    v-for="(item, index) in lzlzReportDto.wdData"
                    :key="index"
                  >
                    <div class="item-machine-text">
                      {{ item.materialDescription }}
                    </div>
                    <dv-digital-flop
                      :config="item.number"
                      style="width:100%;height:48px;"
                    />
                  </div>
                </div>

                <div class="rate-box">
                  <dv-percent-pond
                    v-for="(data, index) in lzlzReportDto.wdData"
                    :key="index"
                    :config="data.config"
                    style="width:49%;height:45px;margin:10px auto 0"
                  />
                </div>
              </div>
            </dv-border-box-13>
          </div>
        </div>
        <div class="power-main-center" style="width:42%">
          <div class="top" style="height:24%">
            <dv-border-box-13>
              <div class="title">
                <div class="title-top">
                  涂片工序
                  <div class="line" />
                </div>
                <div class="top-info" style="padding-left:2%">
                  <div class="item-info1">
                    <div
                      class="item-info1-box bg"
                      v-for="(data, index) in tpReportDtoList"
                      :key="index"
                      style="margin-top:5px;"
                    >
                      <div class="item-content">
                        <div class="item-content-title" style="font-size:16px;">
                          {{ data.name }}
                        </div>
                        <div style="height:40%">
                          <dv-digital-flop
                            :config="data.number"
                            style="width:100%;height:42px;"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- <dv-scroll-board :config="tpTableConfig" style="width:100%;height:100%" /> -->
                  <!-- <dv-scroll-ranking-board :config="tpConfig" /> -->
                </div>
              </div>
            </dv-border-box-13>
          </div>

          <!-- 固化 -->
          <div class="top" style="height:25%">
            <dv-border-box-13>
              <div class="title">
                <div class="title-top">
                  固化
                  <div class="line" />
                </div>
                <div class="top-info" style="padding-left:2%">
                  <div class="item-info1">
                    <div
                      class="item-info1-box bg"
                      v-for="(data, index) in solidifyRecordQtyVoList"
                      :key="index"
                      style="margin-top:5px;"
                    >
                      <div class="item-content">
                        <div class="item-content-title" style="font-size:18px;">
                          {{ data.name }}
                        </div>
                        <div style="height:40%">
                          <dv-digital-flop
                            :config="data.number"
                            style="width:100%;height:42px;"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dv-border-box-13>
          </div>

          <div class="bottom" style="height:51%">
            <dv-border-box-13>
              <div class="title">
                <div class="title-top">
                  装配工序
                  <div class="line" />
                </div>

                <div style="font-size:18px;margin:0 20px">
                  <div class="bottom-data">
                    <div class="model-title">
                      <div class="bg more">
                        下槽数
                        <div>
                          <dv-digital-flop
                            :config="xcConfig"
                            style="width:100%;height:28px;"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="model-title">
                      <div class="bg more">
                        铸焊数
                        <div>
                          <dv-digital-flop
                            :config="zhConfig"
                            style="width:100%;height:28px;"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="model-title">
                      <div class="bg more">
                        封装
                        <div>
                          <dv-digital-flop
                            :config="fzConfig"
                            style="width:100%;height:28px;"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="model-title">
                      <div class="bg more">
                        入库
                        <dv-digital-flop
                          :config="rkConfig"
                          style="width:100%;height:28px;"
                        />
                      </div>
                    </div>

                    <div class="model-title" style="margin:5px 0 0 0">
                      <div class="bg more">
                        占用储位数
                        <div>
                          <dv-digital-flop
                            :config="hadConfig"
                            style="width:100%;height:28px;"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="model-title" style="margin:5px 0 0 0">
                      <div class="bg more">
                        总储位数
                        <div>
                          <dv-digital-flop
                            :config="locationConfig"
                            style="width:100%;height:28px;"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="model-title" style="margin:5px 0 0 0">
                      <div class="bg more">
                        储位利用率
                        <div>
                          <dv-digital-flop
                            :config="ghRateConfig"
                            style="width:100%;height:28px;"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="model-title" style="margin:5px 0 0 0;">
                      <div class="bg more">
                        平面库库存
                        <div>
                          <dv-digital-flop
                            :config="totalConfig"
                            style="width:100%;height:28px;"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="bottom-scroll" style="margin:0 20px">
                  <div class="bottom-scroll-data">
                    <div style="width:25%;margin-right:10px;">
                      <dv-scroll-board
                        :config="briefTableConfig"
                        style="width:100%;height:100%;"
                      />
                    </div>
                    <div style="width:30%;margin-right:10px;">
                      <dv-scroll-board
                        :config="armTableConfig"
                        style="width:100%;height:100%;"
                      />
                    </div>
                    <div style="width:45%;">
                      <dv-scroll-board
                        :config="wareTableConfig"
                        style="width:100%;height:100%;"
                      />
                    </div>
                  </div>
                </div>

                <div style="font-size:18px;margin:0 20px">
                  <div class="bottom-data">
                    <div
                      v-for="(item, index) in modelList"
                      :key="index"
                      class="model-title1"
                    >
                      <div class="bg more">
                        {{ item.model }}
                        <!-- <div>{{item.output}}</div> -->
                        <div>
                          <dv-digital-flop
                            :config="item.number"
                            style="width:100%;height:28px;"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dv-border-box-13>
          </div>
        </div>

        <div class="power-main-right" style="width:30%">
          <div class="top" style="height:23%;">
            <dv-border-box-13>
              <div class="title">
                <div class="title-top">
                  加酸工序
                  <div class="line" />
                </div>

                <div class="item-machine">
                  <div class="item-machine-box bg item-machine-box--small">
                    <div class="item-machine-text ">开工人数</div>
                    <dv-digital-flop
                      :config="cdEmploymentCountConfig"
                      style="width:100%;height:48px;"
                    />
                  </div>
                  <div class="item-machine-box bg item-machine-box--small">
                    <div class="item-machine-text">今日加酸总量</div>
                    <dv-digital-flop
                      :config="cdPerQtyConfig"
                      style="width:100%;height:48px;"
                    />
                  </div>
                  <div class="item-machine-box bg item-machine-box--small">
                    <div class="item-machine-text">人均产出</div>
                    <dv-digital-flop
                      :config="cdQty"
                      style="width:100%;height:48px;"
                    />
                  </div>
                </div>
                <div class="rate-box">
                  <dv-percent-pond
                    :config="cdRateConfig"
                    style="width:80%;height:45px;margin:10px auto 0"
                  />
                </div>
              </div>
            </dv-border-box-13>
          </div>

          <div class="top" style="height:54%;">
            <dv-border-box-13>
              <div class="title">
                <div class="title-top">
                  充放电
                  <div class="line" />
                </div>

                <div class="charge-box">
                  <div class="charge-box__info">
                    <div class="charge-box__card--small-top bg">
                      <div class="charge-box__title">总架数</div>
                      <dv-digital-flop
                        :config="zjsConfig"
                        style="width:100%;height:40px;"
                      />
                    </div>
                    <div class="charge-box__card--small-top bg">
                      <div class="charge-box__title">在用架数</div>
                      <dv-digital-flop
                        :config="zyjsConfig"
                        style="width:100%;height:40px;"
                      />
                    </div>
                    <div class="charge-box__card--small-top bg">
                      <div class="charge-box__title">利用率</div>
                      <dv-digital-flop
                        :config="lylConfig"
                        style="width:100%;height:40px;"
                      />
                    </div>
                  </div>
                  <div class="charge-box__item">
                    <div class="charge-box__top">
                      <div class="charge-box__card bg">
                        <div class="charge-box__title">当日开机数</div>
                        <dv-digital-flop
                          :config="launchCountConfig"
                          style="width:100%;height:40px;"
                        />
                      </div>
                      <div class="charge-box__card bg">
                        <div class="charge-box__title">在充(总量)</div>
                        <dv-digital-flop
                          :config="chargingCountConfig"
                          style="width:100%;height:40px;"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="charge-box__table">
                    <div class="charge-box__table-item">
                      <dv-scroll-board
                        :config="launchTableConfig"
                        style="width:100%;height:100%;"
                      />
                    </div>

                    <div class="charge-box__table-item">
                      <dv-scroll-board
                        :config="chargingTableConfig"
                        style="width:100%;height:100%;"
                      />
                    </div>
                    <!-- <div class="charge-box__table-item">
                                 <dv-scroll-board :config="finishTableConfig" style="width:100%;height:100%;" />
                            </div>  -->
                  </div>
                  <div class="charge-box__bottom">
                    <div class="charge-box__card--small bg">
                      <div class="charge-box__title">当天下架量</div>
                      <dv-digital-flop
                        :config="finishCountConfig1"
                        style="width:100%;height:50px;"
                      />
                    </div>
                    <div class="charge-box__card--small bg">
                      <div class="charge-box__title">昨天下架量</div>
                      <dv-digital-flop
                        :config="finishCountConfig2"
                        style="width:100%;height:50px;"
                      />
                    </div>
                    <div class="charge-box__card--small bg">
                      <div class="charge-box__title">前天下架量</div>
                      <dv-digital-flop
                        :config="finishCountConfig3"
                        style="width:100%;height:50px;"
                      />
                    </div>
                  </div>
                  <div class="charge-box__table">
                    <div class="charge-box__table-item--three">
                      <dv-scroll-board
                        :config="finishTableConfig1"
                        style="width:100%;height:100%;"
                      />
                    </div>

                    <div class="charge-box__table-item--three">
                      <dv-scroll-board
                        :config="finishTableConfig2"
                        style="width:100%;height:100%;"
                      />
                    </div>
                    <div class="charge-box__table-item--three">
                      <dv-scroll-board
                        :config="finishTableConfig3"
                        style="width:100%;height:100%;"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </dv-border-box-13>
          </div>
          <div class="top" style="height:23%">
            <dv-border-box-13>
              <div class="title">
                <div class="title-top">
                  包装出库(只)
                  <div class="line" />
                </div>

                <div class="top-text-box">
                  <div class="top-text bg">
                    <span>待打码数</span>
                    <dv-digital-flop
                      :config="planConfig"
                      style="width:100%;height:50px;"
                    />
                  </div>
                  <div class="top-text bg">
                    <span>实时打码</span>
                    <dv-digital-flop
                      :config="finishConfig"
                      style="width:100%;height:50px;"
                    />
                  </div>
                  <div class="top-text bg">
                    <span>未提货</span>

                    <dv-digital-flop
                      :config="unShippedConfig"
                      style="width:100%;height:50px;"
                    />
                  </div>
                  <div class="top-text bg">
                    <span>已提货</span>
                    <dv-digital-flop
                      :config="shippedConfig"
                      style="width:100%;height:50px;"
                    />
                  </div>
                </div>
              </div>
            </dv-border-box-13>
          </div>
        </div>
      </div>
    </base-container>
  </div>
</template>

<script>

import api from "@/api";

export default {
  data() {
    return {
      bzReportDto: {},
      lzlzReportDto: {
        qdData: [
          {
            number: {
              number: [0],
            },
          },
          {
            number: {
              number: [0],
            },
          },
        ],
        wdData: [
          {
            number: {
              number: [0],
            },
          },
          {
            number: {
              number: [0],
            },
          },
        ],
      },
      qdReportDto: {},
      tpReportDto: {},
      hgReportDto: {},
      qmObj: {},
      line: false,
      digitalFlopData: [],
      tpConfig: {},
      tpTableConfig: {},
      armTableConfig: {},
      briefTableConfig: {},
      wareTableConfig: {},
      bzConfig: {},
      modelList: [
        {
          number: {
            number: [0],
          },
        },
        {
          number: {
            number: [0],
          },
        },
        {
          number: {
            number: [0],
          },
        },
        {
          number: {
            number: [0],
          },
        },
      ],
      qdDayQtyConfig: {
        number: [0],
        content: "{nt}吨",
      },
      qdMonthQtyConfig: {
        number: [0],
        content: "{nt}吨",
      },
      stockDataConfig: {
        number: [0],
        content: "{nt}吨",
      },
      shippedConfig: {
        number: [0],
      },
      unShippedConfig: {
        number: [0],
      },
      finishConfig: {
        number: [0],
      },
      planConfig: {
        number: [0],
      },
      fzConfig: {
        number: [0],
      },
      rkConfig: {
        number: [0],
      },
      xcConfig: {
        number: [0],
      },
      zhConfig: {
        number: [0],
      },
      launchCountConfig: {
        number: [0],
      },
      chargingCountConfig: {
        number: [0],
      },
      finishCountConfig1: {
        number: [0],
      },
      finishCountConfig2: {
        number: [0],
      },
      finishCountConfig3: {
        number: [0],
      },
      launchTableConfig: {},
      chargingTableConfig: {},
      finishTableConfig: {},
      finishTableConfig1: {},
      finishTableConfig2: {},
      finishTableConfig3: {},
      solidifyRecordQtyVoList: [
        {
          name: "产量",
          number: { number: [0] },
        },
        {
          name: "高温高湿在库数",
          number: { number: [0] },
        },

        {
          name: "干燥库在库数",
          number: { number: [0] },
        },
        {
          name: "利用率",
          number: {
            number: [0],
          },
        },
      ],
      tpReportDtoList: [
        { number: { number: [0] } },
        { number: { number: [0] } },
        { number: { number: [0] } },
        { number: { number: [0] } },
        { number: { number: [0] } },
        { number: { number: [0] } },
      ],
      config: {
        value: "66",
        formatter: "计划完成率{value}%",
      },
      hadConfig: {
        number: [0],
      },
      locationConfig: {
        number: [0],
      },
      ghRateConfig: {
        number: [0],
      },
      totalConfig: {
        number: [0],
      },
      cdEmploymentCountConfig: {
        number: [0],
      },
      cdPerQtyConfig: {
        number: [0],
      },
      cdQty: {
        number: [0],
      },
      cdRateConfig: {
        value: "0",
        formatter: "计划完成率{value}%",
      },
      workshopCode: "1610_A01",
      zjsConfig: {
        number: [0],
      },
      zyjsConfig: {
        number: [0],
      },
      lylConfig: {
        number: [0.0],
        content: "{nt}%",
        toFixed: 2,
      },
      drkjs: 0,
    };
  },

  components: {

  },

  computed: {},

  mounted() {
    const { createData } = this;

    createData();

    // setInterval(createData, 30*1000)
    setInterval(createData, 5 * 60 * 1000);
  },

  created() {
    document.title = "动力能源工业互联网数据驾驶舱(制造一部)";
  },
  methods: {
    createData() {

      api.getPower().then((res) => {

        if(!res) return false;
        const {code,msg,data}= res;
        if(code !=0){
          console.log(msg);
          return false;
        }
        const {
          bzReportDto,
          lzlzReportDto,
          qdReportDto,
          tpReportDto,
          hgReportDto,
          solidifyRecordQtyVo,
          wareLocationSumaryDto,
          cdReportDto = {},
        } = data;

        const {
          rate = 0,
          employmentCount = 0,
          qty = 0,
          perQty = 0,
        } = cdReportDto;

        this.cdEmploymentCountConfig = this.getDigitalNum(
          this.cdEmploymentCountConfig,
          { number: [employmentCount] }
        );
        this.cdPerQtyConfig = this.getDigitalNum(this.cdPerQtyConfig, {
          number: [qty],
        });
        this.cdQty = this.getDigitalNum(this.cdQty, { number: [perQty] });
        this.cdRateConfig = {
          value: (rate * 100).toFixed(0),
          formatter: "计划完成率{value}%",
        };

        this.solidifyRecordQtyVoList[0].number = {
          number: [solidifyRecordQtyVo.qty],
        };
        this.solidifyRecordQtyVoList[1].number = {
          number: [solidifyRecordQtyVo.temperatureQty],
        };
        this.solidifyRecordQtyVoList[2].number = {
          number: [solidifyRecordQtyVo.dryQty],
        };
        this.solidifyRecordQtyVoList[3].number = {
          number: [solidifyRecordQtyVo.rate * 100],
          content: "{nt}%",
        };
        this.wareLocationSumaryDto = wareLocationSumaryDto;

        this.hadConfig = this.getDigitalNum(this.hadConfig, {
          number: [wareLocationSumaryDto.hadLocationCount],
        });
        this.locationConfig = this.getDigitalNum(this.locationConfig, {
          number: [wareLocationSumaryDto.locationCount],
        });
        this.ghRateConfig = this.getDigitalNum(this.ghRateConfig, {
          number: [wareLocationSumaryDto.rate * 100],
          content: "{nt}%",
        });

        var temp = 0;
        var wareTableList = [];
        wareLocationSumaryDto.warehouseMaterialStockDtoList.map((item) => {
          temp += item.qty;
          wareTableList.push([
            item.materialDescription,
            `<span  style="color:rgb(106,203,182);">${item.qty}</span>`,
          ]);
        });

        this.totalConfig = this.getDigitalNum(this.totalConfig, {
          number: [temp],
        });
        this.wareTableConfig = {
          header: ["型号", "产量"],
          headerHeight: 25,
          headerBGC: "rgba(195,188,188,0.3)",
          oddRowBGC: "rgba(64, 72, 91,0.5)",
          data: wareTableList,
          rowNum: 3,
          columnWidth: [300, 100],
        };

        this.bzReportDto = bzReportDto;
        this.lzlzReportDto = lzlzReportDto;
        lzlzReportDto.qdData.map((item) => {
          item.config = {
            value: (item.rate * 100).toFixed(0),
            formatter: "计划完成率{value}%",
          };
        });
        lzlzReportDto.wdData.map((item) => {
          item.config = {
            value: (item.rate * 100).toFixed(0),
            formatter: "计划完成率{value}%",
          };
        });

        this.tpReportDtoList = tpReportDto.materialDtoList
          .slice(0, 6)
          .map((item) => {
            return {
              name: item.materialDescription,
              number: {
                number: [item.confirmQuantity],
              },
            };
          });

        lzlzReportDto.qdData.map((data, index) => {
          this.lzlzReportDto.qdData[index].number = {
            number: [data.qty],
          };
        });

        lzlzReportDto.wdData.map((data, index) => {
          this.lzlzReportDto.wdData[index].number = {
            number: [data.qty],
          };
        });

        this.qdReportDto = qdReportDto;
        this.tpReportDto = tpReportDto;
        this.hgReportDto = hgReportDto;
        this.qdDayQtyConfig = this.getDigitalNum(this.qdDayQtyConfig, {
          number: [qdReportDto.qdDayQty / 1000],
          toFixed: 2,
        });
        this.qdMonthQtyConfig = this.getDigitalNum(this.qdMonthQtyConfig, {
          toFixed: 2,
          number: [qdReportDto.qdMonthQty / 1000],
        });

        this.shippedConfig = this.getDigitalNum(this.shippedConfig, {
          number: [bzReportDto.shippedNumber],
        });

        this.unShippedConfig = this.getDigitalNum(this.unShippedConfig, {
          number: [bzReportDto.unShippedNumber],
        });

        this.xcConfig = this.getDigitalNum(this.xcConfig, {
          number: [wareLocationSumaryDto.bottomSlot || 0],
        });
        this.zhConfig = this.getDigitalNum(this.zhConfig, {
          number: [wareLocationSumaryDto.castWeld || 0],
        });

        let list = [];
        (bzReportDto.materialDtoList || []).map((item) => {
          list.push([item.materialDescription, item.qty]);
        });
        // 包装工序
        this.bzConfig = {
          header: ["物料描述", "产量"],
          data: list,
          columnWidth: [350],
          rowNum: 10,
        };
        // 涂片
        this.tpConfig = {
          rowNum: 5,
          data: tpReportDto.materialDtoList.map((item) => {
            return {
              name: item.materialDescription,
              value: item.confirmQuantity,
            };
          }),
        };
        var tpTableList = [];
        tpReportDto.materialDtoList.map((item) => {
          tpTableList.push([item.materialDescription, item.confirmQuantity]);
        });
        this.tpTableConfig = {
          data: tpTableList,
        };
      });

      // 球磨
      api.getQmOutput().then((res) => {
         if(!res) return false;
        const {code,msg,data}= res;
        if(code !=0){
          console.log(msg);
          return false;
        }
        this.qmObj = data;
      });

      // 机械手臂
      api.getArmOutput().then((res) => {
      if(!res) return false;
        const {code,msg,data}= res;
        if(code !=0){
          console.log(msg);
          return false;
        }
        let num = 0;
        (data || []).map((item) => {
          num += +item.yield;
        });
        this.rkConfig = this.getDigitalNum(this.rkConfig, { number: [num] });

        var armTableTableList = [];
        data.map((item) => {
          armTableTableList.push([
            item.name,
            `<span  style="color:rgb(106,203,182);">${item.yield}</span>`,
          ]);
        });
        this.armTableConfig = {
          headerBGC: "rgba(195,188,188,0.3)",
          headerHeight: 25,
          header: ["机械臂", "产量"],
          oddRowBGC: "rgba(64, 72, 91,0.5)",
          data: armTableTableList,
          rowNum: 3,
          columnWidth: [230, 80],
        };
      });

      // 封装
      api.getBriefOutput().then((res) => {
       if(!res) return false;
        const {code,msg,data}= res;
        if(code !=0){
          console.log(msg);
          return false;
        }
        this.modelList = data.modelOutput;

        data.modelOutput.slice(0, 5).map((data, index) => {
          this.modelList[index].number = {
            number: [data.output],
          };
        });

        let num = 0;
        (data.devOutput || []).map((item) => {
          num += +item.count;
        });
        this.fzConfig = this.getDigitalNum(this.fzConfig, { number: [num] });

        var briefTableList = [];
        data.devOutput.map((item) => {
          briefTableList.push([
            item.name,
            `<span  style="color:rgb(106,203,182);">${item.count}</span>`,
          ]);
        });
        this.briefTableConfig = {
          header: ["设备", "产量"],
          headerBGC: "rgba(195,188,188,0.3)",
          headerHeight: 25,
          oddRowBGC: "rgba(64, 72, 91,0.5)",
          data: briefTableList,
          rowNum: 3,
          columnWidth: [80, 60],
        };
      });

      // 打码
      api.getCode().then((res) => {
       
         if(!res) return false;
        const {code,msg,data}= res;
        if(code !=0){
          console.log(msg);
          return false;
        }

        const { finish, plan } = data;
        this.finishConfig = this.getDigitalNum(this.finishConfig, {
          number: [finish],
        });
        this.planConfig = this.getDigitalNum(this.planConfig, {
          number: [plan],
        });
      });

      api.getStockInfo().then((res) => {

          if(!res) return false;
        const {code,msg,data}= res;
        if(code !=0){
          console.log(msg);
          return false;
        }
        this.stockDataConfig = this.getDigitalNum(this.stockDataConfig, {
          number: [data],
        });
      });

      // 在充电池数
      const { workshopCode } = this;
      api.getChargingCount({ workshopCode, days: 1 }).then((res) => {
        
          if(!res) return false;
          const {success,message,payload} = res;
          if(!success){
            console.log(message);
            return false;
          }
       

      
        let temp = 0;
        payload.map((item) => {
          temp += item.count;
        });
        this.chargingCountConfig = this.getDigitalNum(
          this.chargingCountConfig,
          { number: [temp || 0] }
        );

        var chargingTableTableList = [];
        payload.map((item) => {
          chargingTableTableList.push([
            item.model || "未知",
            `<span  style="color:rgb(106,203,182);">${item.count}</span>`,
          ]);
        });

        this.chargingTableConfig = {
          headerBGC: "rgba(195,188,188,0.3)",
          headerHeight: 25,
          header: ["在充型号", "数量"],
          oddRowBGC: "rgba(64, 72, 91,0.5)",
          data: chargingTableTableList,
          rowNum: 2,
          columnWidth: [210, 100],
        };
      });

      // 开机数量
      api.getLaunchCount({ workshopCode, days: 1 }).then((res) => {
       
           if(!res) return false;
          const {success,message,payload} = res;
          if(!success){
            console.log(message);
            return false;
          }

   
       
        let temp = 0;
        payload.map((item) => {
          temp += item.count;
        });
        this.drkjs = temp;
        this.launchCountConfig = this.getDigitalNum(this.launchCountConfig, {
          number: [temp || 0],
        });

        var launchTableTableList = [];
        payload.map((item) => {
          launchTableTableList.push([
            item.model,
            `<span style="color:rgb(106,203,182);">${item.count}</span>`,
          ]);
        });
        this.launchTableConfig = {
          headerBGC: "rgba(195,188,188,0.3)",
          headerHeight: 25,
          header: ["开机型号", "数量"],
          oddRowBGC: "rgba(64, 72, 91,0.5)",
          data: launchTableTableList,
          rowNum: 2,
          columnWidth: [210, 100],
        };
      });

      api.getFinishCount({ workshopCode, days: 1 }).then((res) => {

           if(!res) return false;
          const {success,message,payload} = res;
          if(!success){
            console.log(message);
            return false;
          }
        let temp = 0;
        payload.map((item) => {
          temp += item.count;
        });
        this.finishCountConfig2 = this.getDigitalNum(this.finishCountConfig2, {
          number: [temp || 0],
        });
        var finishTableList2 = [];
        payload.map((item) => {
          finishTableList2.push([
            item.model,
            `<span  style="color:rgb(106,203,182);">${item.count}</span>`,
          ]);
        });
        this.finishTableConfig2 = {
          headerBGC: "rgba(195,188,188,0.3)",
          headerHeight: 25,
          header: ["下架型号", "数量"],
          oddRowBGC: "rgba(64, 72, 91,0.5)",
          data: finishTableList2,
          rowNum: 2,
          columnWidth: [210, 100],
        };
      });

      api.getFinishCount({ workshopCode, days: 2 }).then((res) => {
     
           if(!res) return false;
          const {success,message,payload} = res;
          if(!success){
            console.log(message);
            return false;
          }
        let temp = 0;
        payload.map((item) => {
          temp += item.count;
        });
        this.finishCountConfig3 = this.getDigitalNum(this.finishCountConfig3, {
          number: [temp || 0],
        });
        var finishTableList3 = [];
        payload.map((item) => {
          finishTableList3.push([
            item.model,
            `<span  style="color:rgb(106,203,182);">${item.count}</span>`,
          ]);
        });
        this.finishTableConfig3 = {
          headerBGC: "rgba(195,188,188,0.3)",
          headerHeight: 25,
          header: ["下架型号", "数量"],
          oddRowBGC: "rgba(64, 72, 91,0.5)",
          data: finishTableList3,
          rowNum: 2,
          columnWidth: [210, 100],
        };
      });
      api.getFinishCount({ workshopCode, days: 0 }).then((res) => {
  
           if(!res) return false;
          const {success,message,payload} = res;
          if(!success){
            console.log(message);
            return false;
          }

        let temp = 0;
        payload.map((item) => {
          temp += item.count;
        });
        this.finishCountConfig1 = this.getDigitalNum(this.finishCountConfig1, {
          number: [temp || 0],
        });
        var finishTableList1 = [];
        payload.map((item) => {
          finishTableList1.push([
            item.model,
            `<span  style="color:rgb(106,203,182);">${item.count}</span>`,
          ]);
        });
        this.finishTableConfig1 = {
          headerBGC: "rgba(195,188,188,0.3)",
          headerHeight: 25,
          header: ["下架型号", "数量"],
          oddRowBGC: "rgba(64, 72, 91,0.5)",
          data: finishTableList1,
          rowNum: 2,
          columnWidth: [210, 100],
        };
      });

      api.getUtilizationRate({ workshopCode }).then((res) => {

           if(!res) return false;
          const {success,message,payload} = res;
          if(!success){
            console.log(message);
            return false;
          }
        this.utilizationObj = payload;
        const { count, totalCount } = payload;

        let temp = +count + +this.drkjs;

        this.zjsConfig = this.getDigitalNum(this.zjsConfig, {
          number: [totalCount],
        });
        this.zyjsConfig = this.getDigitalNum(this.zyjsConfig, {
          number: [temp],
        });
        const lyl = (+temp / +totalCount) * 100;
        this.lylConfig = this.getDigitalNum(this.lylConfig, { number: [lyl] });
      });
    },
    getDigitalNum(obj, param) {
      return { ...obj, ...param };
    },
    formatNum(num) {
      return (+num / 1000).toFixed(2);
    },
  },
};
</script>
<style lang="less" scoped>
#data-view-power {
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #fff;
  .dv-scroll-board /deep/ .rows .ceil {
    padding: 0;
    text-align: center;
  }
  .dv-percent-pond /deep/ text {
    font-size: 18px;
  }
  #dv-full-screen-container {
    background-image: url("./img/bg.png");
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
  }
  .rate-box {
    display: flex;
    justify-content: space-between;
  }
  .mt {
    margin-top: 20px;
  }
  .bg {
    background: rgba(195, 188, 188, 0.14);
  }
  .more {
    padding: 6px 0;
  }
  .more1 {
    padding: 10px 0 10px 10px;
    margin: 5px 0 0 0;
  }
  .more2 {
    padding: 2px 0 2px 10px;
    margin: 8px 0 0 0;
  }

  .item-info {
    height: 70%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    text-align: center;
    align-items: center;
    &-box {
      width: 32%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      // height: 60%;
    }
  }

  .item-info1 {
    // height: 80%;
    //  padding:20px 0;
    //   display:flex;
    // //  flex-direction: column;
    //   justify-content: space-between;
    font-size: 18px;
    //   text-align: center;
    //   align-items: center;
    //   flex-wrap: wrap;
    // margin: 10px 0 0 0;
    &-box {
      width: 32%;
      // display: flex;
      // align-items: center;
      // justify-content: center;
      // flex-direction: column;
      height: 40%;
      float: left;
      margin-right: 5px;
    }
  }
  .item-content {
    display: flex;
    height: 100%;
    flex-direction: column;
    width: 100%;
  }
  .item-content-title {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    padding: 10px 0 0 6px;
  }
  .item-content-num {
    width: 100%;
    flex: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #00db95;
  }
  .power-main {
    height: calc(100% - 60px);
    display: flex;
    justify-content: space-between;
    margin: 20px;
  }
  .power-main-left,
  .power-main-center,
  .power-main-right {
    width: 32%;
  }
  .title {
    height: 100%;
    font-size: 18px;
    font-weight: bold;
    padding: 10px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    &-top {
      height: 50px;
      padding: 10px 0 0 10px;
    }
  }
  .line {
    width: 60%;
    height: 2px;
    background: #fff;
    margin-top: 4px;
    //  font-size:16px;
  }
  .power-main-left {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0 0 20px 0;
    .top {
      width: 100%;
      height: 30%;
    }
    .item {
      height: 30%;

      &-info-qm {
        padding: 0 0 10px 0;
        font-size: 18px;
        //  text-align: center;
        &-num {
          //  display:flex;
          margin: 20px 0 0 0;
          div {
            margin-right: 20px;
          }
        }
      }
      &-info-lz {
        display: flex;
        font-size: 18px;
        margin: 10px 40px;
        justify-content: space-between;
      }
    }
  }
  .power-main-center {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0 0 20px 0;
    .top {
      width: 100%;
      height: 30%;
      &-info {
        height: 75%;
        margin: 0px 8px 0 8px;
      }
    }
    .bottom {
      width: 100%;
      height: 65%;
      font-size: 18px;
      &-data {
        display: flex;
        flex-flow: wrap;
        margin: 8px 0;
        display: flex;
        justify-content: space-between;
        .model-title {
          width: 23%;
          text-align: center;
        }
        .model-title1 {
          flex: 1;
          text-align: center;
          margin: 0 5px 0 0;
        }
      }
    }

    .bottom-scroll {
      height: 40%;
      margin: 10px 0;
    }
    .bottom-scroll-data {
      display: flex;
      height: 100%;
      justify-content: space-between;
      width: 100%;
    }
    .bottom-scroll-text {
      display: flex;
      span {
        flex: 1;
        display: block;
        width: 100%;
        text-align: center;
      }
    }
  }
  .power-main-right {
    margin: 0 0 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .top {
      height: 30%;
    }
    .top-text-box {
      font-size: 18px;
      margin: 10px 10px 0 10px;
      display: flex;
      height: 60%;
    }
    .top-text {
      display: flex;
      width: 80%;
      justify-content: center;
      margin: 0 auto 0;
      flex-direction: column;
      text-align: center;
      margin: 0 1% 0 0;
    }
  }
}
.item-machine {
  display: flex;
  // height: 60%;
  font-size: 18px;
  justify-content: space-around;

  &-box {
    // flex:1;
    // width:25%;
    width: 48%;
    text-align: center;
    padding: 5px 0;
    //background: rgba(195, 188, 188, 0.14);
    margin: 5px 0 0 0;
    &--small {
      width: 32%;
    }
  }
}

.green {
  color: rgb(106, 203, 182);
}

// 充放电
.charge-box {
  text-align: center;
  margin: 0 10px;
  height: 100%;

  .charge-box__info {
    display: flex;
    justify-content: space-between;
    margin: 0 0 10px 0;
  }
  .charge-box__item {
    height: 18%;
  }
  .charge-box__table {
    height: 20%;
    display: flex;
    justify-content: space-between;
  }
  .charge-box__top {
    display: flex;
    justify-content: space-between;
    height: 100%;
  }
  .charge-box__bottom {
    display: flex;
    justify-content: space-between;
    margin: 10px 0 0 0;
    height: 18%;
  }
  .charge-box__card {
    width: 49%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .charge-box__card--small {
    width: 32%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .charge-box__card--small-top {
    width: 32%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 16px;
  }
  .charge-box__title {
    padding: 10px 0 0 10px;
    font-size: 16px;
  }
  .charge-box__table-item {
    width: 49%;
  }
  .charge-box__table-item--three {
    width: 32%;
  }
}
.iframe-box {
  width: 95%;
  height: 98%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 3% 0 0 0;
  overflow: hidden;
}
</style>
