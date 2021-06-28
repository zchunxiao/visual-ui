<!--  -->
<template>
  <mobile-container>
    <div class="p-charge" :style="{height:heightStyle}">
        <div class="title">
            晶能充电看板
        </div>
        <card title="充电架">
            <div>
                <div class="p-confirm-item" v-for="(data,index) in chargeFrame" :key="index">{{data.name}}: {{data.num}}</div>
            </div>
        </card>

        <card title="机房利用率">
            <customer-table :header="header" :data="tableList"/>
        </card>
        
         <card title="充电电池">
            <div>
                <div class="p-confirm-item" v-for="(data,index) in data" :key="index">{{data.name}}: {{data.num}}</div>
            </div>
        </card>
    </div>
 </mobile-container>
</template>

<script>
import api from "@/api"

export default {
  data () {
    return {
        header:['机房','利用率'],
        data:[
            {name:"今日产量",num:0},
            {name:"当月产量",num:0}
        ],
        chargeFrame:[
            {name:"今日上架",num:0},
            {name:"今日下架",num:0}
        ],
        tableList:[],
        heightStyle:'0px'
    };
  },



  computed: {},

  mounted() {
      this.heightStyle =  window.innerHeight+'px'
      api.getCharge().then(res=>{
          const {code ,data} =  res;
          if(code !=0) return false;
          const {day,month,offShelf,onShelf,realTimeAvailability} = data;
          this.data[0].num = day;
          this.data[1].num = month;
          this.data = {...this.data};
          this.chargeFrame[0].num = onShelf;
          this.chargeFrame[1].num = offShelf;
          this.chargeFrame = {...this.chargeFrame};
          this.tableList = realTimeAvailability.map(item=>{
              return {
                  name:item.roomId,
                  num:`${(+item.availability*100).toFixed(2)}%`
              }
          })
      })
  },

  methods: {}
}

</script>
<style  scoped>
.p-charge{
    margin:0 .67rem;
    font-size: .48rem;
    overflow: hidden;
}
.p-confirm-item{
    text-align: left;
    padding: .13rem 0 .13rem .26rem
   
}
td{
    border:1px solid #fff;
}
</style>