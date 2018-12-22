<template lang="pug">
  section#dynamic-port-forwarding
    .container
      header
        h2 Dynamic port forwarding
        h3 Port forwarding across a range of ports

      div
        | Also known as a SOCKS proxy, this allows you to forward
        code ssh -D 3000 remote-host.com

      div
        | Using a jump host
        code ssh -D 3000 -J user@jump-host.com remote-host.com

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
  section
    background #222

</style>
