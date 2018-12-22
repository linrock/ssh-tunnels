<template lang="pug">
  #app
    Introduction
    Local
    Remote
    Dynamic
    JumpHosts
    Reliable

</template>

<script>
  import Introduction from './sections/Introduction.vue'
  import Local from './sections/Local.vue'
  import Remote from './sections/Remote.vue'
  import Dynamic from './sections/Dynamic.vue'
  import JumpHosts from './sections/JumpHosts.vue'
  import Reliable from './sections/Reliable.vue'

  export default {
    name: 'app',
    components: {
      Introduction,
      Local,
      Remote,
      Dynamic,
      JumpHosts,
      Reliable,
    }
  }
</script>

<style lang="stylus">
  body
    color #fafafa
    background #333
    margin 0

  svg
    width 30px

  code
    background #111
    color white
    display block
    font-size 15px
    line-height 24px
    padding 10px 18px
    margin 20px 0
    border-radius 2px

  p
    line-height 24px
    margin 20px 0

  section
    padding 30px 0
    header
      margin-bottom 40px
      h2
        margin 0
      h3
        font-style italic
        font-weight normal
        margin 0

  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    margin-bottom 60px

  .container
    width 680px
    margin 0 auto

</style>
