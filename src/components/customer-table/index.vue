<!--  -->
<template>
  <div>
     <table>
        <thead>
            <tr>
                <td v-for="(data,index) in header" :key="index">{{data}}</td>
                <!-- <td>产量</td> -->
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item,index) in data" :key="index">
              <td>{{item.name}}</td>
              <td>{{item.num}}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  props:{
    header:{
      required:true,
      type:Array
    },
    data:{
      required:true,
      type:Array
    }
  },
  components: {},

  computed: {},

  mounted() {},

  methods: {}
}

</script>
<style scoped>
table{
  width:100%;
}
td{
    border:1px solid #fff;
}
</style>