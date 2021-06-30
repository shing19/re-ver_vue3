<template>
  <div class="home" ref="home" id="home">
    <Header/>
    <Welcome @start="startVisit"/>
    <div id="exhibition" ref="exhibition" class="hidden">
      <div class="stage" id="future"><Future ref="future" @stop="stopVisit"/></div>
      <div class="stage" id="present"><Present ref="present"/></div>
      <div class="stage" id="past"><Past ref="past"/></div>
      <div class="stage"><Start id="start" @enter="enterExhi"/></div>
      <!-- <iframe src="/background.html" frameborder="0" width="100vw" height="100vh" scrolling="auto"></iframe> -->
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  @import '/style.css'
  .hidden
    display none
  .stop 
    scroll no
  #exhibition
    height 100vh
    overflow auto
    overflow-x hidden
    scroll-snap-type y mandatory
    // scroll-snap-type y proximity
  .stage
    height 100vh
    width 100vw
    scroll-snap-align end
    overflow auto
    position relative
</style>


<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Start from '@/components/Start.vue'
import Welcome from '@/components/Welcome.vue'
import Past from '@/components/Past.vue'
import Present from '@/components/Present.vue'
import Future from '@/components/Future.vue'


export default {
  name: 'Home',
  components: {
    Header, Welcome, Start, Past, Present, Future
  },
  methods: {
    startVisit: function () {
      // 解锁展览
      this.$refs.exhibition.classList.remove('hidden')
      // var future = this.$el.querySelector('#future')
      // var present = this.$el.querySelector('#present')
      // var past = this.$el.querySelector('#past')
      // future.scrollTop = future.scrollHeight
      // present.scrollTop = present.scrollHeight
      // past.scrollTop = past.scrollHeight
      // 初始化各个stage
      this.$refs.future.scrollToBottom()
      this.$refs.present.scrollToBottom()
      this.$refs.past.scrollToBottom()
      // 滑到底部
      this.$el.querySelector('#start').scrollIntoView({
        behavior: 'smooth', // 平滑过渡
        block: 'start' // 上边框与视窗顶部平齐。默认值
      })
    },
    enterExhi: function () {
      this.$el.querySelector('#past').scrollIntoView({
        behavior: 'smooth', // 平滑过渡
        block: 'end' // 上边框与视窗顶部平齐。默认值
      })
    },
    stopVisit: function () {
      this.$refs.home.classList.add('stop')
    }
  }
}
</script>
