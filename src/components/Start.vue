<template>
  <div class="main">
    <div class="content" @click="$emit('enter')">
      <el-button id="intro-button">
        <img src="../assets/arrowup.svg" alt="" id="arrowup">
        <div class="text">Scroll you way up</div>  
      </el-button>
      <!-- <img src="../assets/arrowup.svg" alt="" id="arrowup">
      <div class="text">Scroll you way up</div> -->
      <div class="sub-title">Welcome to the past</div>
      <div class="text" id="intro">Here is where your journey begins,<br>you’re now in the depth of your consciousness and will be guided<br>through a journey throught time to climb back to the present and<br>then get a glimpse of the future.<br>Scroll up to move forward with your experience.</div>
    </div>    
    <!-- <iframe src="/background.html" frameborder="0" width="100vw" height="100vh" scrolling="auto"></iframe> -->
  </div>
</template>

<style lang="stylus" scoped>
  @import '../style.css'
  
  #arrowup
    width 24px
    margin 18vh 0 5px 0
  .sub-title
    margin 0 0 18px 0
  #intro
    bottom 0
    margin-bottom 35vh

  #intro-button
    // margin-bottom 10vh
    color white
    background-color rgba(0,0,0,0)
    border-color rgba(0,0,0,0)
    font-family Open Sans
    font-size 28px
    font-weight 100
    text-align center
    line-height 60px
    margin-bottom -5vh
  
  .content
    position relative
    z-index 1
  iframe
    position absolute
    bottom 0
    left 0
    z-index 0
    // filter blur(5px)
</style>
