<template lang="pug">
  section.reliable-ssh-tunnels
    .container
      h2 Reliable SSH Tunnels
      
      div
        | Socks proxy
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
  .reliable-ssh-tunnels
    background #222
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
