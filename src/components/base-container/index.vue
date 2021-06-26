<!--  -->
<template>
  <dv-full-screen-container :full="isFullScreen">
    <slot />
  </dv-full-screen-container>
</template>

<script>
export default {
  data() {
    return {
      isFullScreen: false,
    };
  },

  components: {},

  computed: {},

  created() {},

  mounted() {
    const {
      $route: { query },
    } = this;

    const { full } = query;
    this.isFullScreen = full ? true : false;
  },

  methods: {},
};
</script>
<style scoped></style>
