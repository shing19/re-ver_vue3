<template>
  <div class="home">
    <Header/>
    <Welcome @start="startVisit"/>
    <div id="exhibition" ref="exhibition" class="hidden">
      <iframe src="/background.html" frameborder="0" width="100%" height="100%" scrolling="auto"></iframe>
      <Future/>
      <Present/>
      <Past/>
      <Start id="start"/>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  @import '/style.css'
  .hidden
    display none
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
      this.$refs.exhibition.classList.remove('hidden')
      this.$el.querySelector('#start').scrollIntoView({
        behavior: 'smooth', // 平滑过渡
        block: 'start' // 上边框与视窗顶部平齐。默认值
      })
    }
  }
}
</script>
