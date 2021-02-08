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
    font-size 30px
    margin 0

  svg
    height 30px

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
    font-size 16px
    line-height 24px
    margin 20px 0

  section
    padding 30px 20px
    header
      margin-bottom 40px
      h2
        font-size 1.7em
        margin 0
      h3
        font-style italic
        font-weight normal
        margin 0
    h4
      font-size 18px

  .container
    margin 0 auto
    width 680px

  @media (max-width: 768px)
    .container
      max-width: 100%
      padding:0
      margin:0
    section
      padding:20px 10px;
    .diagram-right-arrow
      margin: 0 5px
    .annotated-icon span
      font-size: 0.7rem
    code
      white-space: nowrap
      overflow: auto
      font-size: 0.9rem

  .example
    margin 30px 0 80px

  .flow-diagram
    display flex

</style>
