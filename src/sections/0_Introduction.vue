<template lang="pug">
  section#introduction
    .container
      h1 A visual guide to SSH tunnels

      nav
        a(href="#local-port-forwarding") Local port forwarding
        a(href="#remote-port-forwarding") Remote port forwarding
        a(href="#dynamic-port-forwarding") Dynamic port forwarding
        a(href="#jump-hosts") Jump hosts
        a(href="#reliable-ssh-tunnels") Reliable SSH tunnels
        a(href="#more-examples") More examples
        a(href="#resources") Resources

      p
        | This page is meant to present concrete use cases and examples of SSH tunnels
        | while visually presenting the traffic flows. For example, here's a reverse
        | tunnel that allows only users from IP address 1.2.3.4 access to port 80 on the SSH
        | client through an SSH server.

      .flow-diagram
        annotated-icon(type="user" annotation="1.2.3.4")
        right-arrow
        annotated-icon(type="server" annotation="ssh-server:8080" color="rgb(255,141,0)")
        right-arrow(ssh="true")
        annotated-icon(type="laptop" annotation="localhost:80" color="#00dcff")
      p
        | SSH tunnels are encrypted TCP connections between SSH clients and servers
        | that allows traffic entering one side of the tunnel to transparently exit
        | through the other. While the term originally referred to tunnels using TUN/TAP virtual
        | network interfaces, it's commonly used to refer to SSH port forwarding nowadays.
        | Typical use cases include:
        ul
          li providing encrypted channels for protocols that use plaintext
          li opening backdoors into private networks
          li bypassing firewalls

      p
        | SSH commands can be run from both local or remote systems.
        | Throughout this guide, the following icons and colors will be used
        | to hopefully make it more clear which commands are run on which system,
        | and to represent how the resulting TCP traffic flows between systems.

      p
        annotated-icon(type="laptop" annotation="localhost" color="#00dcff")
      p
        annotated-icon(type="server" annotation="example.org" color="rgb(255,141,0)")

</template>

<script>
  import Laptop from '../icons/Laptop'
  import Server from '../icons/Server'
  import AnnotatedIcon from '../diagrams/annotated_icon'
  import RightArrow from '../diagrams/right_arrow'

  export default {
    components: {
      AnnotatedIcon,
      RightArrow,
      Laptop,
      Server
    }
  }
</script>

<style scoped lang="stylus">
  .container
    padding 10px 0 30px

  nav
    margin 30px 0
    a
      color #42b983
      display block

</style>
