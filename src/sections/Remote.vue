<template lang="pug">
  section.local-port-forwarding
    .container
      h2 Remote port forwarding

      div
        p Fowards port 8080 on remote-host-1.com to localhost port 80 on your local computer.
        code ssh -R 8080:localhost:80 remote-host-1.com

        code ssh -R 1.2.3.4:8080:localhost:80 remote-host-2.com

      div
        | Need to add this to your sshd_config on your remote server
        code GatewayPorts yes

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
  .local-port-forwarding
    background #333
    padding 30px 0

  h3
    margin 40px 0 0

  nav
    a
      display block

  ul
    list-style-type none
    padding 0

  li
    display inline-block
    margin 0 10px

  a
    color #42b983

  svg
    width 40px

  code
    background #111
    color white
    font-size 16px
    padding 10px 18px
    border-radius 2px

</style>
