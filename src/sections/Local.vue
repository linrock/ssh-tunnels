<template lang="pug">
  section.local-port-forwarding
    .container
      h2 Local port forwarding

      div
        p
          | Forwards port 8080 on your local computer to port 80 on
          | remote-host-2.com through remote-host-1.com
        code ssh -L 8080:remote-host-2.com:80 remote-host-1.com

        p
          | Forwards only localhost port 8080 on your local computer to
          | port 80 on remote-host-2.com through remote-host-1.com
        code ssh -L 127.0.0.1:8080:remote-host-2.com:80 remote-host-1.com

        p
          | Forwards only localhost port 8080 on your local computer to
          | localhost port 80 on remote-host-1.com
        code ssh -L 127.0.0.1:8080:localhost:80 remote-host-1.com

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
    background #444
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

</style>
