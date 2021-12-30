<template lang="pug">
section#introduction
  .container
    h1 A visual guide to SSH tunnels

    nav
      ul
        li
          a(href="#introduction") Introduction
        li
          a(href="#port-forwarding") Port forwarding
          ul
            li
              a(href="#local-port-forwarding") Local
            li
              a(href="#remote-port-forwarding") Remote
            li
              a(href="#dynamic-port-forwarding") Dynamic
        li
          a(href="#jump-hosts") Jump hosts
        li
          a(href="#reliable-ssh-tunnels") Reliable SSH tunnels
        li
          a(href="#more-examples") More examples
        li
          a(href="#resources") Resources

    p
      | This page explains use cases and examples of SSH tunnels while visually presenting
      | the traffic flows. For example, here's a reverse tunnel that allows only users from
      | IP address 1.2.3.4 access to port 80 on the SSH client through an SSH server.

    .flow-diagram
      annotated-icon(type="user" annotation="1.2.3.4")
      right-arrow
      annotated-icon(type="server" annotation="ssh-server:8080" color="rgb(255,141,0)")
      right-arrow(:ssh="true")
      annotated-icon(type="laptop" annotation="localhost:80" color="#00dcff")
    p
      | SSH tunnels are encrypted TCP connections between SSH clients and servers
      | that allows traffic entering one side of the tunnel to transparently exit
      | through the other. While the term originally referred to tunnels using TUN/TAP virtual
      | network interfaces, it's commonly used to refer to SSH port forwarding nowadays.
      | Use cases include:
      ul
        li Providing encrypted channels for protocols that use plaintext
        li Opening backdoors into private networks
        li Bypassing firewalls

    p
      | This page is a work-in-progress. Feel free to&nbsp;
      a(href="https://github.com/linrock/ssh-tunnels") suggest examples or corrections on Github

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
  section
    background #222

  .container
    padding 10px 0 30px

  nav
    margin 30px 0
    line-height 1.6rem

</style>
