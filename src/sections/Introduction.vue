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
      | Since SSH commands can be run from either local or remote systems,
      | throughout this guide, the following icons and colors will be used
      | to hopefully make it more clear which commands are run on which.

    div
      laptop
      | localhost

    div
      server
      | remote server

</template>

<script>
  import Laptop from '../icons/Laptop'
  import Server from '../icons/Server'

  export default {
    components: {
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
