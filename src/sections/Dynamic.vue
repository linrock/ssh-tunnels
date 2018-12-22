<template lang="pug">
  section#dynamic-port-forwarding
    .container
      header
        h2 Dynamic port forwarding
        h3 Forward traffic from a range of ports to a remote server

      .example
        code ssh -D 3000 ssh-server
        .flow-diagram
          annotated-icon(type="laptop" annotation="localhost:3000" color="#00dcff")
          right-arrow(ssh="true")
          annotated-icon(type="server" annotation="ssh-server" color="rgb(255,141,0)")
          right-arrow
          annotated-icon(type="cloud" annotation="*:*")
        p
          | Also known as a SOCKS proxy, this allows you to forward traffic sent
          | through the proxy to the ssh-server on any port or destination. By default,
          | SSH will use the SOCKS5 protocol, which forwards TCP and UDP traffic.

      p
        | When you have a SOCKS proxy running, you can configure your web browser
        | to use the proxy to access resources as if connections were originating
        | from ssh-server. For example, if ssh-server had access to other servers
        | within a private network, by using using a SOCKS proxy you could access
        | those other servers locally as if you were on the network, without needing
        | to set up a VPN.

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
