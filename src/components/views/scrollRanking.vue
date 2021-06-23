<!--  -->
<template>
  <div><dv-scroll-ranking-board :config="config" style="width:100%;height:300px" /></div>
</template>

<script>
export default {
  data () {
    return {
        config:{
            data: [
                {
                name: '周口',
                value: 55
                },
                {
                name: '南阳',
                value: 120
                },
                {
                name: '西峡',
                value: 78
                },
               
            ]
        }
    };
  },

  components: {},

  computed: {},

  created() {},

  mounted() {},

  methods: {}
}

</script>
<style scoped>
</style>