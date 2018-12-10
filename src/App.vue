<template lang="pug">
  #FirstSlideshow
    .eg-slideshow
      slide
        h1 こんにちはEagle!
        p はじめてのEagle
      slide(enter="fadeIn")
        h2 Yes Eagle!!
        p very cool!!
</template>

<script>
  import eagle from 'eagle.js';

  export default {
    mixins: [eagle.slideshow],
  };
</script>

<style lang="scss">
  @import url(https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c);

  #FirstSlideshow {
    .eg-slideshow {
      font-family: 'M PLUS Rounded 1c';
      background-color: #eef;
      .eg-slide {
        .eg-slide-content {
          width: 25em;
          max-width: 80%;
          margin: 0 auto;
        }
      }
    }
    .eg-slide-content {
      width: 25em;
      max-width: 80%;
      margin: 0 auto;
    }
  }
</style>