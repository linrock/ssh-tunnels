<template lang="pug">
  section#reliable-ssh-tunnels
    .container
      header
        h2 Reliable SSH Tunnels
        h3 How to bring connections back when they drop

      p
        | The commands listed above are great on an ad-hoc basis, but if
        | you want to maintain SSH tunnels through network outages, you'll
        | have to do some additional work

      p
        | By default, the TCP connection used to establish an SSH tunnel
        | may time out after a period of inactivity. To prevent timeouts

      p
        | You can configure the server to send heartbeat messages

      code
        | ServerAliveInterval 15
        br
        | ServerAliveCountMax 4

      p
        | You can also configure the client to send heartbeat messages

      code
        | ClientAliveInterval 15
        br
        | ClientAliveCountMax 4

      div
        | Use autossh to monitor and bring back connections if they drop
        code autossh -D 3000 remote-host.com

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
