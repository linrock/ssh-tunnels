<template lang="pug">
  .container
    h1 A visual guide to SSH tunnels

    nav
      a(href="#local-port-forwarding") Local port forwarding
      a(href="#remote-port-forwarding") Remote port forwarding
      a(href="#dynamic-port-forwarding") Dynamic port forwarding
      a(href="#jump-hosts") Jump hosts and proxy commands
      a(href="#reliable-ssh-tunnels") Reliable SSH tunnels

    p
      | SSH tunnels are encrypted TCP connections between SSH clients and servers.
      | Typical use cases include
      ul
        li providing encrypted channels for otherwise plaintext connections
        li bypassing firewalls
        li opening backdoors into private networks

    p
      | SSH commands can be run from both local or remote systems.
      | Throughout this guide, the following icons and colors will be used
      | to hopefully make it more clear which commands are run on which system,
      | and to represent how the resulting TCP traffic flows between systems.

    p
      annotated-icon(type="laptop" annotation="localhost" color="#00dcff")
    p
      annotated-icon(type="server" annotation="example.org" color="rgb(255,141,0)")

    p
      | Useful ssh commandline options when establishing tunnels
    code
      | -f
      |   # forks the ssh process into the background
      br
      | -n
      |   # prevents reading from STDIN
      br
      | -N
      |  # do not run remote commands. Used when only forwarding ports
      br
      | -T
      |  # disable TTY allocation

</template>

<script>
  import Laptop from '../icons/Laptop'
  import Server from '../icons/Server'
  import AnnotatedIcon from '../diagrams/annotated_icon'

  export default {
    components: {
      AnnotatedIcon,
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

  p
    margin 30px 0

</style>
