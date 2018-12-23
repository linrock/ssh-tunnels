<template lang="pug">
  section#dynamic-port-forwarding
    .container
      header
        h2 Dynamic port forwarding
        h3 Forward traffic from a range of ports to a remote server

      .example
        code ssh -D 3000 ssh-server
        .flow-diagram
          annotated-icon(type="laptop" annotation="*:3000" color="#00dcff")
          right-arrow(ssh="true")
          annotated-icon(type="server" annotation="ssh-server" color="rgb(255,141,0)")
          right-arrow
          annotated-icon(type="cloud" annotation="*:*")
        p
          | Opens a SOCKS proxy on port 3000 of all interfaces on your local system.
          | This allows you to forward traffic sent through the proxy to the ssh-server
          | on any port or destination host. By default, SSH will use the SOCKS5 protocol,
          | which forwards TCP and UDP traffic.

      .example
        code ssh -D 127.0.0.1:3000 ssh-server
        .flow-diagram
          annotated-icon(type="laptop" annotation="127.0.0.1:3000" color="#00dcff")
          right-arrow(ssh="true")
          annotated-icon(type="server" annotation="ssh-server" color="rgb(255,141,0)")
          right-arrow
          annotated-icon(type="cloud" annotation="*:*")
        p
          | Opens a SOCKS proxy on 127.0.0.1:3000 on your local system.
      p
        | When you have a SOCKS proxy running, you can configure your web browser
        | to use the proxy to access resources as if connections were originating
        | from ssh-server. For example, if ssh-server had access to other servers
        | within a private network, by using using a SOCKS proxy you could access
        | those other servers locally as if you were on the network, without needing
        | to set up a VPN.

      .example
        p
          | When you have a SOCKS proxy running, you can test it like so
        code curl -x socks5://127.0.0.1:12345 https://example.org

      .example
        h4 SSH client configuration
        annotated-icon(type="laptop" annotation="/etc/ssh/ssh_config" color="#00dcff")
        p
          | If you want the SOCKS proxy to be available to more interfaces than just
          | localhost, make sure to enable GatewayPorts on your local system.
        code
          | GatewayPorts yes
        p
          | Since GatewayPorts is being configured on the SSH client here, you can also 
          | configure it with a command-line option instead of ssh_config.
        code
          | ssh -o GatewayPorts=yes -D 3000 ssh-server

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
