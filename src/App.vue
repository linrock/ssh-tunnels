<template>
  <div id="app">
    <Introduction/>
    <Local/>
    <Remote/>
    <Dynamic/>
    <JumpHosts/>
    <Reliable/>
  </div>
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
    padding 10px 18px
    margin 20px 0
    border-radius 2px

  p
    line-height 26px

  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    margin-bottom 60px

  .container
    width 600px
    margin 0 auto

</style>
