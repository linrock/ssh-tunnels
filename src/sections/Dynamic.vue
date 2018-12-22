<template lang="pug">
  section#dynamic-port-forwarding
    .container
      header
        h2 Dynamic port forwarding
        h3 Forward traffic from a range of ports to a remote server

      .flow-diagram
        annotated-icon(type="laptop" annotation="localhost:3000" color="#00dcff")
        right-arrow(ssh="true")
        annotated-icon(type="server" annotation="remote-host-1.com" color="rgb(255,141,0)")

      p
        | Also known as a SOCKS proxy, this allows you to forward
        code ssh -D 3000 remote-host.com

      p
        | Using a jump host
        code ssh -D 3000 -J user@jump-host.com remote-host.com

</template>

<script>
  import AnnotatedIcon from '../diagrams/annotated_icon'
  import RightArrow from '../diagrams/right_arrow'

  export default {
    components: {
      AnnotatedIcon,
      RightArrow
    }
  }
</script>

<style scoped lang="stylus">
  section
    background #222

</style>
