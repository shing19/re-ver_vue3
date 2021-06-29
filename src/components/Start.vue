<template>
  <div class="main">
    <img src="../assets/arrowup.svg" alt="" id="arrowup">
    <div class="text">Scroll you way up</div>
    <div class="sub-title">Welcome to the past</div>
    <div class="text" id="intro">Here is where your journey begins,<br>you’re now in the depts of your concoiusness and will be guided<br>through a journey throught time to climb back to the present and<br>then get a glimpse of the future.<br>Scroll up to move forward with your experience.</div>
    <!-- <iframe src="@/background.html" frameborder="0" style="width: 100vw height: 100vh" scrolling="auto"></iframe> -->
  </div>
</template>

<style lang="stylus" scoped>
  @import '../style.css'
  .page
    scroll-snap-align center
  #arrowup
    width 24px
    margin 0 0 5px 0
  .sub-title
    margin 10vh 0 18px 0
  #intro
    bottom 0
    margin-bottom 35vh
</style>
