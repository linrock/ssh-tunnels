<template lang="pug">
  section#reliable-ssh-tunnels
    .container
      header
        h2 Reliable SSH Tunnels
        h3 How to keep SSH tunnels open when the connection drops

      p
        | The commands listed above work on an ad-hoc basis, but if
        | you want to maintain SSH tunnels through network outages or
        | unreliable connections, you'll have to do some additional setup

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

      .flow-diagram
        annotated-icon(type="laptop" annotation="localhost:8080" color="#00dcff")
        right-arrow(ssh="true")
        annotated-icon(type="server" annotation="remote-host-1" color="rgb(255,141,0)")
        right-arrow
        annotated-icon(type="server" annotation="remote-host-2:80" color="rgb(255,141,0)")

      p
        | Use autossh to monitor and bring back connections if they drop
        code autossh -D 3000 remote-host.com

</template>

<script>
  import AnnotatedIcon from '../diagrams/annotated_icon'
  import RightArrow from '../diagrams/right_arrow'

  export default {
    components: {
      AnnotatedIcon,
      RightArrow
    }
  }
</script>

<style scoped lang="stylus">
  section
    background #222

</style>
