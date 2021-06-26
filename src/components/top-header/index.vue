<template>
  <div id="top-header">
    <dv-decoration-8 class="header-left-decoration" v-if="line"/>
    <dv-decoration-5 class="header-center-decoration"  v-if="line" />
    <dv-decoration-8 class="header-right-decoration" :reverse="true"  v-if="line"/>
    <!-- <div class="header-title">{{time}}</div> -->
    <div class="center-title">{{title}}</div>
  </div>
</template>

<script>
export default {
  name: 'TopHeader',
  data() {
      return {
       time:"",
       timer:null
      }
  },
  props:{
    title:{
      type:String,
      required: true
    },
    line:{
      type:Boolean,
      required: false,
      default:true
    }
  },
   mounted(){
   this.timer = setInterval(() => {
      this.time =this.getTime();
    }, 1000);
  
  },
  destroyed(){
    clearInterval(this.timer)
  },
  methods:{
    getTime(){
      var d = new Date();
      return `${d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日 ${this.addZero(d.getHours())}:${this.addZero(d.getMinutes())}:${this.addZero(d.getSeconds())}`;
    },
    addZero(time){
       return time < 10 ?`0${time}`:`${time}`
    }
  }
}

</script>

<style lang="less">
#top-header {
  position: relative;
  width: 100%;
  height: 60PX;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
 
  .header-center-decoration {
    width: 40%;
    height: 60PX;
    margin-top: 30PX;
  }
  .header-title{
    color:#fff;
    position: absolute;
    font-size: 20PX;
    font-weight: bold;
    bottom:0;
    left:20PX;
  }

  .header-left-decoration, .header-right-decoration {
    width: 25%;
    height: 60PX;
  }

  .center-title {
    position: absolute;
    font-size: 30PX;
    font-weight: bold;
    left: 50%;
    top: 15PX;
    transform: translateX(-50%);
  }
}
</style>
