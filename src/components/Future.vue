<template>
  <div class="main">
    <!-- ending -->
    <div id="re"></div>
    <div class="welcome">
      <div class="sub-title">Your journey with us has come to an end.</div>
      <div class="text">Will you keep the memory of this experience? We hope so! <br><br>Look forward for what the future holds for you.</div>
    </div>
    <!-- artwork5 -->
    <div class="artwork" id="gallery">
      <div id="gallery-bg"></div>
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
</template>

<style lang="stylus" scoped>
  @import url('../style.css');

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
    margin-top 30vh

  #re
    height 50vh
    background-image url('../assets/re.gif')
    background-size: contain;
    background-position 60% 50%
    background-repeat: no-repeat;
    margin-top 50vh

  #gallery-bg
    height 75vh
    background-image url('../assets/gallery.png')
    background-size: contain;
    background-position center
    background-repeat: no-repeat;

  .art-title
    margin-top 0

  #welcome
    margin 50vh 0 50vh 0
</style>
