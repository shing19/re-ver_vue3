<template>
  <div class="main">
    <div class="containerC" id="containerC">
      <div class="content">
        <!-- ending -->
        <!-- <p class="title" id="ending" @mouseenter="$emit('stop')">RE - VER</p> -->
        <div id="re"></div>
        <div class="welcome">
          <div class="sub-title">Your journey with us has come to an end.</div>
          <div class="text">Will you keep the memory of this experience? We hope so! <br><br>Look forward for what the future holds for you.</div>
        </div>
        <!-- artwork5 -->
        <div class="artwork" id="gallery">
          <!-- demo -->
          <!-- <div class="gallery-bg" id="gallery-bg"></div> -->
          <div class="gallery-box">
              <div class="img-box" v-for="img in imgs" :key="img">
                <img v-lazy:src="getPath(img)" v-bind:alt="img">
            </div>
          </div>
          <div class="art-title">Oracle</div>
          <div class="description">You are presented with a series of examples of how humanity<br>imagines the future evolutions of technology.<br>How do you think the future is gonna look like? Which version of the<br>future do you think is going to come true? Is there yet another<br>different version we haven’t shown you?</div>
        </div>
        <!-- question -->
        <div class="question">If you had the possibility<br>to choose your future<br>memories what would<br>you choose?</div>
        <!-- welcome -->
        <div id="welcome">
          <div class="sub-title">Welcome to the future</div>
          <div class="text">Here nothing has happened yet, everything is still possible, and the<br> only certainty is the uncertainty for what’s to come.<br>Sometimes future events are out of our hands, other times is up to<br>us to seize their endless potential and shape the future with our<br>decisions.</div>
        </div>
      </div>
    </div>
    <iframe src="/bg_future.html" frameborder="0" width="100vw" height="100vh" scrolling="auto"></iframe>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgs: []
    }
  },
  created () {
    this.getImg()
  },
  methods: {
    scrollToBottom () {
      var content = this.$el.querySelector('#containerC')
      content.scrollTop = content.scrollHeight
      // console.log(content.scrollHeight)
    },
    getImg () {
      const imgs = require.context("../assets/clips", false, /\.gif$/)
      const imgsKey = imgs.keys()
      for (let i=0; i<imgsKey.length; i++) {
        const imgName = imgsKey[i].substring(2, imgsKey[i].length)
        this.imgs.push(imgName)
        console.log(imgName)
      }
      // console.log(imgs)
    },
    getPath (imgName) {
      return require("../assets/clips/" + imgName)
    }
  }
}

</script>


<style lang="stylus" scoped>
  @import url('../style.css');

  .stop
    overflow hidden

  .main
    background-color white
    display relative
    align-items center

  .title,
  .question,
  .art-title,
  .description,
  .sub-title,
  .text
    color black

  .title
    margin-top 35vh
    margin-bottom 40vh

  #re
    height 50vh
    background-image url('../assets/re.gif')
    background-size: contain;
    background-position 60% 50%
    background-repeat: no-repeat;
    margin-top 25vh

  .gallery-box
    margin 0 20rem 0 20rem
    display flex
    flex-wrap wrap
    align-items center
    justify-content center

  .gallery-box img
    width 9rem
    height 5rem
    margin 0.3rem
    border 3px black
    border-radius 5px
    filter drop-shadow(5px 5px 20px rgba(0, 0, 0, 0.4))

  #gallery-bg
    height 75vh
    background-image url('../assets/gallery.png')
    background-size: contain;
    background-position center
    background-repeat: no-repeat;

  .art-title
    margin-top 0

  #welcome
    margin 50vh 0 40vh 0

  .main
    height 100vh
  .containerC
    height 100%
    overflow auto
    position relative
  .content
    position relative
    z-index 2
    bottom 0
  iframe
    height 100vh
    position absolute
    bottom 0
    left 0
    z-index 1
</style>
