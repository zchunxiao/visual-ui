<!--  -->
<template>
 <div id="data-view-platform">
  <base-container>
      <top-header title="基于工业互联的供应链协同平台"/>
      <div class="platform-main">
        <div class="platform-left ">
            <div class="platform">
              <dv-border-box-7>
                <div class="dv-box">
                  <div class="platform-head platform-card-title">
                    <div class="platform-title">吴山基地</div>
                    <div class="platform-num">
                        <span style="margin-right:15px">开工人数: <i class="orange">{{ws.workerNum}}</i></span>
                        <span>开工机台数:<i class="orange">{{ws.workStationNum}}</i></span>
                    </div>
                  </div>
              
                  <div class="platform-bottom ">
                    <scroll-board :config="wsConfig"/>
                  </div>
                </div>
              </dv-border-box-7>
          
            </div>
            <div class="platform">
              <dv-border-box-7>
                <div class="dv-box">
                  <div class="platform-head platform-card-title">
                    <div class="platform-title">煤山基地电池工厂</div>
                    <div class="platform-num">
                        <span style="margin-right:15px">开工人数: <i class="orange">{{ms.workerNum}}</i></span>
                        <span>开工机台数:<i class="orange">{{ms.workStationNum}}</i></span>
                    </div>
                  </div>
                  <div class="platform-bottom">
                    <scroll-board :config="msConfig"/>
                  </div>
                </div>
              </dv-border-box-7>
            </div>
        </div>
        <div style="width:5%;height:100%">
           <div class="platform-arrow right1"/>
           <div class="platform-arrow right2"/>
        </div>
       
        <div class="platform-center">
  
           <div class="platform-center-warn">
               <div class="platform-title md-10 orange">预警</div>
               <scroll-board-warn :config="wariningsConfig"/>
           </div>
            <div class="platform-cirlce-box">
              <div class="platform-circle"/>
              <div class="platform-circle-content">
              
                <div class="platform-circle-desc1">
                  <div class="platform-title platform-title-md">JIT拉料</div>
                  <div  class="platform-circle-desc">
                     <scroll-board :config="safetyStockConfig"/>
                  </div>
                </div>
              </div>
           
          </div>
        </div>
         <div style="width:5%;height:100%">
           <div class="platform-arrow left1"/>
           <div class="platform-arrow left2"/>
        </div>
        <div class="platform-right">
           <div class="platform">
             <dv-border-box-7>
                <div class="dv-box">
                  <div class="platform-head platform-card-title">
                    <div class="platform-title ">部品事业部浙江昊杨</div>
                    <div class="platform-num">
                        <span style="margin-right:15px">开工人数: <i class="orange">{{bp.workerNum}}</i></span>
                        <span>开工机台数:<i class="orange">{{bp.workStationNum}}</i></span>
                    </div>
                  </div>
                  <div class="platform-bottom">
                     <scroll-board :config="wsConfig"/>
                  </div>
                </div>
              </dv-border-box-7>
            </div>
            <div style="height:50%">
               <dv-border-box-12>
                 <div class="platform-title md-10">拉料需求</div>
                 <div class="platform-draw-box">
                    <scroll-board :config="drawNeedsConfig"/>
                 </div>
                
                </dv-border-box-12>
            </div>
        </div>
      </div>
  </base-container>
  </div>
</template>

<script>

import scrollBoard from '@/components/before/scrollBoard'
import scrollBoardWarn from '@/components/before/scrollBoardWarn'
import api from "@/api"

export default {
  data () {
    return {
      config:{
         number: [100],
         content: '{nt}个',
         style:{
           fontSize:20
         }
      },
      ws:{},
      ms:{},
      bp:{},
      drawNeeds:{},
      safetyStock:{},
      warinings:{},
      wariningsConfig: {},
      drawNeedsConfig: {},
      safetyStockConfig:{},
      wsConfig:{},
      msConfig:{},
      bpConfig:{}
    };
    
  },

  components: {

      scrollBoardWarn,
      scrollBoard
  },

  computed: {},

  mounted() {

    const { createData } = this
    createData()

    setInterval(createData, 300*1000)
  },
  created(){
    document.title = '基于工业互联的供应链协同平台'
  },
  methods: {
    createData(){
      api.getSupplyChain().then(res=>{
        const {data=""}= res;
        if(!data) return false;
        const {ws={},ms={},bp={},drawNeeds={},safetyStock={},warinings={}} = data.data;
        this.ms = ms;
        this.ws = ws;
        this.bp = bp;
        this.drawNeeds = drawNeeds;
        this.safetyStock = safetyStock;
        this.warinings=warinings;

        // 预警
        let wariningsList =[];
        (warinings||[]).map(item=>{
           wariningsList.push([item.content])
        })
        this.wariningsConfig={
            // header: ['内容'],
            data: wariningsList,
            index: true,
            columnWidth: [50],
            align: ['center'],
            rowNum: 4,
            headerBGC: 'transparent',
            headerHeight: 45,
            oddRowBGC:'rgba(64, 72, 91,0.5)',
            evenRowBGC: '171a30'
        };

        // 拉料需求
        let drawNeedsList = [];
        (drawNeeds || []).map(item=>{
          drawNeedsList.push([
            item.base,
            item.model,
            item.num,
            item.planTime
          ])
        }) 
        this.drawNeedsConfig={
            header: ['基地','型号','数量','计划到货日期'],
            data: drawNeedsList,
            index: true,
            columnWidth: [50,100,100,100,200],
            align: ['center'],
            rowNum: 5,
            headerBGC: 'transparent',
            headerHeight: 45,
            oddRowBGC:'rgba(64, 72, 91,0.5)',
            evenRowBGC: '171a30'
        }

        // JIT拉料
        let safetyStockList = [];
        (safetyStock || []).map(item=>{
          safetyStockList.push([
            item.model,
            item.safetyStock,
          ])
        })
        this.safetyStockConfig = {
          header: ['型号','安全库存'],
          data: safetyStockList,
          // index: true,
          columnWidth: [300,100],
          align: ['center'],
          rowNum: 5,
          headerBGC: 'transparent',
          headerHeight: 45,
          oddRowBGC:'transparent',
          evenRowBGC: 'transparent'
        }
        // 吴山基地
        let wsList=[];
        (ws.prodData || []).map(item=>{
          wsList.push([
            item.model,
            item.yield,
            item.stock
          ])
        })
        this.wsConfig = {
           header: ['型号','产量','库存'],
          data: wsList,
          index: true,
          columnWidth: [50,300,100,100],
          align: ['center'],
          rowNum: 5,
          headerBGC: 'transparent',
          headerHeight: 45,
          oddRowBGC:'rgba(64, 72, 91,0.5)',
          evenRowBGC: '171a30'
        }
        // 煤山基地
        let msList=[];
        (ms.prodData || []).map(item=>{
          msList.push([
            item.model,
            item.yield,
            item.stock
          ])
        })
        this.msConfig = {
           header: ['型号','产量','库存'],
          data: wsList,
          index: true,
          columnWidth: [50,300,100,100],
          align: ['center'],
          rowNum: 5,
          headerBGC: 'transparent',
          headerHeight: 45,
          oddRowBGC:'rgba(64, 72, 91,0.5)',
          evenRowBGC: '171a30'
        }
          // 部品基地
        let bpList=[];
        (bp.prodData || []).map(item=>{
          bpList.push([
            item.model,
            item.yield,
            item.stock
          ])
        })
        this.bpConfig = {
           header: ['型号','产量','库存'],
          data: wsList,
          index: true,
          columnWidth: [50,300,100,100],
          align: ['center'],
          rowNum: 5,
          headerBGC: 'transparent',
          headerHeight: 45,
          oddRowBGC:'rgba(64, 72, 91,0.5)',
          evenRowBGC: '171a30'
        }
      })
    }
  }
}

</script>
<style lang='less' scoped>
#data-view-platform {
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #fff;

  #dv-full-screen-container {
    background-image: url('./img/bg.png');
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
  }
  .platform-main{
    height:calc(100% - 60px);
    display: flex;
    justify-content: space-between;
  }
  


  .platform{
    width:100%;
    height: 50%;
    position: relative;
    padding-bottom: 15px;
    box-sizing: border-box;
  }
  .platform-title{
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 22px;
  }
  .platform-head{
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    // padding: 6% 6% 0 7%;
    font-size: 12px;
  }
  .platform-bottom{
    display:flex;
    flex-wrap: wrap;
    height:90%;
    // margin:20px 20px 0;
    box-sizing: border-box;
  }


  .platform-num{
    display: flex;
    align-items: center;
    font-weight: bold;
  }
 
  .platform-left,.platform-right{
    width:30%
  }
  .platform-center{
    width:30%
  }
  .platform-circle{
    width:100%;
    height:100%;
    background-image:url("./img/circle2.png");
    background-repeat: no-repeat;
    background-size:contain;
    box-sizing: border-box;
    background-position: center;
    animation:lds-hourglass  5s infinite linear;
  }
  .platform-card-title{
   // background:rgba(25, 129, 246,.5);
    font-weight: bold;
    margin-bottom: 10px;
  }

  
   @keyframes lds-hourglass {
      // from{transform: rotate(0deg);}
      // to{transform: rotate(360deg);}
      0% {
        transform:rotate(0);
        animation-timing-function:cubic-bezier(.55,.055,.675,.19)
      }
  
      50% {
        transform:rotate(180deg);
        animation-timing-function:cubic-bezier(.215,.61,.355,1)
      }

      100% {
        transform:rotate(360deg);
        animation-timing-function:cubic-bezier(.215,.61,.355,1)
      }
  }
  .platform-circle-content{
    position:absolute;
    text-align:center;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    right:0;
    bottom:0;
    margin:auto;
    // background:red;
    display: flex;
    align-items: center;
  }
  .platform-cirlce-box{
    position: relative;
    height: 75%;
    overflow: hidden;
    margin: -20% 20px 0 20px;
  }

  .platform-circle-desc1{
    display: flex;
    // align-items: center;
    justify-content: center;
    width: 60%;
    flex-wrap: wrap;
    height: 55%;
    margin:0 auto;
  }
  .platform-circle-desc{
    display: flex;
    width: 100%;
    height: 80%;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
  }


  .platform-center-warn{
    height:20%;
    margin:0 20px;
  }
  // .dv-border-box-12{
  //   padding:20px;
  // }
  .md-10{
    margin-bottom:10px;
  }

  .platform-title-md{
    margin-bottom: 5%;
  }
  .platform-draw-box{
    height: 90%;
  }
  .dv-box{
    width:100%;
    height: 100%;
  }
  .dv-border-box-7{
    padding:20px;
    box-sizing: border-box;
  }
  .orange{
    color:#f84a4a;
  }
  .platform-arrow{
    width:100%;
    height: 50%;
    background-image:url('./img/arrow5.png');
    background-size: contain;
    background-repeat: no-repeat;
  
  }
  .right1{
    transform: rotate(-45deg);
    background-position: 0 60%;
  }
  .right2{
    transform: rotate(-135deg);
    background-position: 0 65%;
  }
  .left1{
    transform: rotate(45deg);
    background-position: 0 60%;
  }
  .left2{
    transform: rotate(315deg);
    background-position: 0 30%;
  }
  .dv-border-box-12{
    padding:20px;
    box-sizing: border-box;
  }
}
</style>