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

  import './style.styl'

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
