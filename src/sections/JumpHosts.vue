<template lang="pug">
  section#jump-hosts
    .container
      header
        h2 Jump hosts and proxy commands
        h3 Transparently connecting to a remote host through an intermediate

      div
        laptop
        | localhost

      div
        server
        | jump-host

      div
        server
        | remote-host

      p
        | Using a jump host to connect to remote-host through jump-host
        code ssh -J user1@jump-host user2@remote-host

      p
        | Connecting to a remote server through a SOCKS proxy
        code ssh -o ProxyCommand="nc -X 5 -x localhost:3000 %h %p" user@remote-host

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
  section
    background #333

</style>
