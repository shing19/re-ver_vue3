<template>
  <div class="home">
    <Header/>
    <Welcome @start="startVisit"/>
    <div id="exhibition" ref="exhibition" class="hidden">
      <iframe src="/background.html" frameborder="0" width="100%" height="100%" scrolling="auto"></iframe>
      <HelloWorld msg="Welcome to Your Vue.js App"/>
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
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue'
import Start from '@/components/Start.vue'
import Welcome from '@/components/Welcome.vue'


export default {
  name: 'Home',
  components: {
    HelloWorld, Header, Welcome, Start
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
