<!--  -->
<template>
  <div class="digital-box bg">
    <div class="title">{{text}}</div>
    <dv-digital-flop :config="getConfig" style="width:200PX;height:35PX;" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      originConfig: {
        number: [0]
        // content: "{nt}个"
      },
    
    };
  },

  components: {},
  props: {
    config: {
      require:true,
      type: Object
    },
    text:{
      require: true,
      type: String
    }
  },
  computed: {
    getConfig() {
      return {
        ...this.originConfig,
        ...this.config
      };
    }
  },

  created() {},

  mounted() {
  },

  methods: {}
};
</script>
<style scoped>
.bg {
  background: rgba(195, 188, 188, 0.14);

}
.title {
  padding: 10PX 0 0 0;
}
.digital-box {
  width: 100%;
  text-align: center;
  font-size: 18PX;
}
</style>
