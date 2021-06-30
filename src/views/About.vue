<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="scroll">test</div>
    <!-- <iframe src="/background.html" frameborder="0" style="width: 100vw height: 100vh" scrolling="auto"></iframe> -->
    <div class="scroll">test</div>
    <div class="scroll">test</div>
    <div class="scroll">test</div>
    <div class="scroll">test</div>
    <div class="scroll">test</div>
    <div class="scroll">test</div>
  
    <div class="viewport viewport-a">

      <span class="box tl">Top Left</span>
      <span class="box tr">Top Right</span>
      <span class="box bl">Bottom Left</span>
      <span class="box br">Bottom Right</span>

      <p>Yay, content!</p><p>Yay, content!</p><p>Yay, content!</p><p>Yay, content!</p>
      <p>Yay, content!</p><p>Yay, content!</p><p>Yay, content!</p><p>Yay, content!</p>
      <p>Yay, content!</p><p>Yay, content!</p><p>Yay, content!</p><p>Yay, content!</p>
      <p>Yay, content!</p><p>Yay, content!</p><p>Yay, content!</p><p>Yay, content!</p>

    </div>

    <div class="viewport viewport-b">
      <!--
        By wrapping the content in a non-overflow container, we create an anchoring
        box that is sized to the content, not to the viewport.
      -->
      <iframe src="/background.html" frameborder="0" scrolling="auto"></iframe>
      <div class="viewport-wrapper">

        <span class="box tl">Top Left</span>
        <span class="box tr">Top Right</span>
        <span class="box bl">Bottom Left</span>
        <span class="box br">Bottom Right</span>

        <div class="content">
          <p>Yay, content!</p><p>Yay, content!</p><p>Yay, content!</p><p>Yay, content!</p>
          <p>Yay, content!</p><p>Yay, content!</p><p>Yay, content!</p><p>Yay, content!</p>
          <p>Yay, content!</p><p>Yay, content!</p><p>Yay, content!</p><p>Yay, content!</p>
          <p>Yay, content!</p><p>Yay, content!</p><p>Yay, content!</p><p>Yay, content!</p>

        </div>

      </div>

    </div>

  </div>
</template>
<style lang="stylus" scoped>

  div.viewport {
    border: 5px solid #CCCCCC ;
    box-sizing: border-box ;
    height: 300px ;
    overflow: auto ;
    width: 500px ;
  }

  span.box {
    background-color: #FF3366 ;
    color: #FFFFFF ;
    padding: 7px 15px 7px 15px ;
    position: absolute ;
  }
  span.tl { left: 0px ; top: 0px ; }
  span.tr { right: 0px ; top: 0px ; }
  span.bl { bottom: 0px ; left: 0px ; }
  span.br { bottom: 0px ; right: 0px ; }

  div.viewport-a {
    padding: 5px 15px 5px 15px ;
    /*
      Here, the overflow container is, itself, acting as the anchor for the
      positioned elements contained within. This caused the absolutely
      positioned elements to anchor to the actual viewport of the container.
    */
    position: relative ;
    z-index: 2;
  }

  div.viewport-b {
    padding: 0px 0px 0px 0px ;
    position relative
  }

  /*
    Here, we're moving the position-anchoring off of the overflow container and
    onto a content wrapper (contained within the overflow area). This allows the
    absolutely positioned elements to anchor to the bounding box of the content,
    not the viewport.
  */
  div.viewport-wrapper {
    padding: 5px 15px 5px 15px ;
    position: relative ;
  }

  .content
    height inherit
    position absolute
    bottom 20

  iframe
    width inherit
    height inherit
    position absolute
    bottom 0
    left 0
    z-index 0

  // background test
  // .scroll
  //   position relative
  //   z-index 2
  // iframe
  //   position absolute
  //   top 0
  //   left 0
  //   z-index 1


  // scroll-snap test
  // .about
  //   height 100vh
  //   overflow auto
  //   overflow-x hidden
  //   scroll-snap-type y mandatory
  // .scroll
  //   height 100vh
  //   width 100vw
  //   scroll-snap-align center
  //   font-size calc(var(--font-size) * 1px)
  //   font-weight bold
  //   position relative
</style>
