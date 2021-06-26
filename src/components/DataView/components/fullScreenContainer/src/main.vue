<template>
  <div id="dv-full-screen-container" :ref="ref">
    <template v-if="ready">
      <slot></slot>
    </template>
  </div>
</template>

<script>
import autoResize from '../../../mixin/autoResize.js'

export default {
  name: 'DvFullScreenContainer',
  mixins: [autoResize],
  data () {
    return {
      ref: 'full-screen-container',
      allWidth: 0,
      scale: 0,
      datavRoot: '',
      ready: false
    }
  },
  props:['full'],
  methods: {
    afterAutoResizeMixinInit () {
      const { initConfig, setAppScale } = this

      initConfig()

      setAppScale()

      this.ready = true
    },
    initConfig () {
      const { dom } = this
      const { width, height } = screen
      this.allWidth = width

      dom.style.width = `${width}px`
      dom.style.height = `${height}px`
    },
    setAppScale () {
      const { allWidth, dom } = this
      const currentWidth = document.body.clientWidth
      if(this.full){
        dom.style.transform = `scale(${currentWidth / allWidth})`
      }else{
          currentWidth / allWidth == 1 ?dom.style.transform = `scale(1,0.87)`: dom.style.transform = `scale(${currentWidth / allWidth})`
      }
    },
    onResize () {
      const { setAppScale } = this

      setAppScale()
    }
  }
}
</script>