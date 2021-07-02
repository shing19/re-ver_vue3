<template>
  <div class="main">
    <div class="containerA" id="containerA">
      <div class="containerC" id="containerC">
        <div class="content" id="content" ref="content">
          <!-- artwork3 -->
          <div class="artwork" id="art3">
            <div id="memory"></div>
            <div class="art-title" id="art3-title" @click="scroll">Portal
            </div>
            <div class="text">Some people and memories connected to them are more blurry<br>and harder to remember than others, therefore the past gets mixed<br>with imagination and the results are brand new memories. Are you<br>sure that what you remember happened for real?</div>
          </div>
          <!-- question -->
          <div class="question">What have influenced<br>your journey the most?</div>
          <!-- artwork2 -->
          <div class="artwork" id="art2">
            <div id="notepad">
              <iframe id="drawspace" src="https://editor.p5js.org/shing19/embed/TdWho1Xed"></iframe>
            </div>
            <div class="art-title" id="art2-title">Doodle</div>
            <div class="text">Back in our childhood, scribbling things was a way to give free room to<br>creativity. Sitting in front of an empty paper with some pens in order to<br>start expressing fantasy and imagination.<br><br>Try your best to draw an elephant by memory.<br>Don’t worry if the shape isn’t perfect, we’ll help you finish it.</div>
          </div>
          <!-- question -->
          <div class="question">Do you remember<br>what you did for fun?</div>
          <!-- artwork1 -->
          <el-row class="artwork" id="art1">
            <el-col id="mirror" :span="11" :offset="2">
              <el-row id="mirror-close"></el-row>
              <el-row class="description" id="mirror-text" type="flex" justify="center" align="middle">
                Press here to<br>open your<br>camera
              </el-row>
              <el-row id="mirror-camera"></el-row>
            </el-col>
            <el-col :span="9" :offset="2">
              <el-row id="art1-question">Look in the<br>mirror, can<br>you recognize<br>yourself?</el-row>
              <el-row class="art-title" id="art1-title">Mirror</el-row>
              <el-row class="description" id="art1-text">Memories of our past are not always<br>defined and can come to our mind<br>blurred and unclear.<br><br><br><br></el-row>
            </el-col>
          </el-row>
          <!-- question -->
          <div class="question" id="connect">Do you remember<br>what you looked like?</div>
        </div>
      </div>
    <iframe id="bg" src="/bg_past.html" frameborder="0" width="100vw" height="100vh" scrolling="auto"></iframe>
    </div>
  </div>
</template>
 
<script>
export default {
  methods: {
    scrollToBottom() {
      var content = this.$el.querySelector('#containerC')
      content.scrollTop = content.scrollHeight
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../style.css'

  #memory
    height 120vh
    background-image url('../assets/memory.png')
    background-size 100vw
    background-position top
    background-repeat no-repeat

  #notepad
    width 100vw
    height 90vh
    background-image url('../assets/notepad.png')
    background-size contain
    background-position center
    background-repeat no-repeat
  #drawspace
    width 68%
    border 0
    position relative
    top 5.5rem
    left 5rem
    margin 0
  #art1
    width 100vw
    display flex
    flex-wrap wrap

  #mirror
    border: 1px solid transparent;
    background-image url('../assets/mirror.png')
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-repeat: no-repeat;
  #mirror-close
    height 3vh
    background-image url(../assets/close.png)
    background-size: contain;
    background-repeat: no-repeat;
    background-position-x center
    margin 28vh 0 0 0.3vw
  #mirror-text
    top 15vh
    left 0.2vw
    text-align center
    height 10vh
  #mirror-camera
    height 3vh
    background-image url(../assets/camera.png)
    background-size: contain;
    background-repeat: no-repeat;
    background-position-x center
    margin 26vh 0 0 -0.3vw
  #art1-question
    font-family Stanley
    color #fff
    text-align left
    margin 12vh 0 0 -6vw
    font-size 80px
    line-height 80px
  #art1-title
    text-align left
    margin 21vh 0 1vh -6vw
  #art1-text
    text-align left
    margin 0 0 0 -6vw
  #connect
    margin-bottom 45vh
  
  .main
    height 100vh
  .containerA
    height 100%
  .containerC
    height 100%
    overflow auto
    position relative
  .content
    position relative
    z-index 2
    bottom 0
  #bg
    height 100vh
    position absolute
    bottom 0
    left 0
    z-index 1
</style>
