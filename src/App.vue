<template lang="pug">
#app
  Introduction
  PortForwarding
  Local
  Remote
  Dynamic
  JumpHosts
  Reliable
  MoreExamples
  Resources
  Footer

</template>

<script>
  import Introduction from './sections/0_Introduction.vue'
  import PortForwarding from './sections/1_PortForwarding.vue'
  import Local from './sections/2_Local.vue'
  import Remote from './sections/3_Remote.vue'
  import Dynamic from './sections/4_Dynamic.vue'
  import JumpHosts from './sections/5_JumpHosts.vue'
  import Reliable from './sections/6_Reliable.vue'
  import MoreExamples from './sections/7_MoreExamples.vue'
  import Resources from './sections/8_Resources.vue'
  import Footer from './sections/9_Footer.vue'

  export default {
    name: 'app',
    components: {
      Introduction,
      PortForwarding,
      Local,
      Remote,
      Dynamic,
      JumpHosts,
      Reliable,
      MoreExamples,
      Resources,
      Footer,
    }
  }
</script>

<style lang="stylus">
  html
    width 100%
    height 100%

  body
    color #fafafa
    background #333
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    margin 0
    padding 0
    width 100%
    height 100%

  a
    color #42b983
    color lightgreen
    text-decoration none
    &:hover
      text-decoration underline

  h1
    font-size 2rem
    margin 0

  svg
    height 30px

  code
    background #111
    color white
    display block
    font-size 1rem
    line-height 1.5rem
    padding 0.7rem 1rem
    margin 1.25rem 0
    border-radius 2px

  p
    font-size 1rem
    line-height 1.5rem
    margin 1.25rem 0

  section
    padding 1.5rem 1.25rem
    header
      margin-bottom 2rem
      h2
        font-size 1.7rem
        margin 0
      h3
        font-style italic
        font-weight normal
        margin 0
    h4
      font-size 1.1rem

  .container
    margin 0 auto
    width 680px

  .example
    margin 2rem 0 5rem

  .flow-diagram
    display flex

  @media screen and (max-width: 700px)
    .container
      width 100%

</style>
