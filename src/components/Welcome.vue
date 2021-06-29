<template>
  <div class="container">
    <div>
      <p class="title">RE - VER</p>
      <p class="title-text">Into the flow of time</p>
      <div id="intro">
        <p class="text">Welcome.<br><br>This is an interactive exhibition.<br><br>We will let you travel through time, re-call your memories of the past,<br> re-flect on the present and even re-imagine what the future holds.<br><br>You’ll be diving deep into your memories.<br><br>Don’t worry, we won’t let you sink.<br><br>Take a deep breath and dive into the<br><br></p>
        <p class="text"><b>Re-ver.</b></p>
        <el-button id="intro-button" @click="$emit('start')">Ready to start?<br><img src="../assets/arrow.svg" alt=""></el-button>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  .title
    font-family Stanley
    color white
    font-size 145px
    font-weight 500
    margin 30vh 0 2vh 0
  .title-text
    font-family Open Sans
    color white
    font-size 20px
    margin-bottom 50vh
  .text
    font-family Open Sans
    color white
    font-size 22px
    font-weight 100
    line-height 28px
    margin-bottom 8vh
  #intro-button
    margin-bottom 10vh
    color white
    background-color rgba(0,0,0,0)
    border-color rgba(0,0,0,0)
    font-family Open Sans
    font-size 28px
    font-weight 100
    text-align center
    line-height 60px
  #intro
    width 100vw
    background-image url("../assets/intro.svg")
    background-size contain
    background-position 50% 100%
    background-repeat no-repeat
</style>

<script>
export default {
  data () {
    return {
      scrollTop: 0,
      isActive: true,
      active: ''
    }
  },
  methods: {
    showContent () {
      this.active = 'background-color: rgb(235,235,235)'
      this.isActive = false
    },
    scrollToBottom () {
      this.$el.querySelector(`#ending`).scrollIntoView({
        behavior: 'smooth', // 平滑过渡
        block: 'start' // 上边框与视窗顶部平齐。默认值
      })
      // window.scrollTo(0, document.body.scrollHeight)
    }
  }
}
</script>
