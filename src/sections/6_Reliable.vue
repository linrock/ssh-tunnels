<template lang="pug">
  section#reliable-ssh-tunnels
    .container
      header
        h2 Reliable SSH Tunnels
        h3 How to keep SSH tunnels open through network failures

      .example
        p
          | The commands listed above work on an ad-hoc basis, but if
          | you want to maintain SSH tunnels through network outages or
          | unreliable connections, you'll have to do some additional setup.
        p
          | By default, the TCP connection used to establish an SSH tunnel
          | may time out after a period of inactivity. To prevent timeouts,
          | you can configure the server to send heartbeat messages.
        annotated-icon(type="server" annotation="/etc/ssh/sshd_config" color="rgb(255,141,0)")
        code
          | ServerAliveInterval 15
          br
          | ServerAliveCountMax 4
        p
          | You can also configure the client to send heartbeat messages.
        annotated-icon(type="laptop" annotation="/etc/ssh/ssh_config" color="#00dcff")
        code
          | ClientAliveInterval 15
          br
          | ClientAliveCountMax 4

      .example
        h4 Using AutoSSH
        p
          | While the above options may prevent a connection from dropping
          | due to inactivity, they will not re-establish dropped connections.
          | To ensure that an SSH tunnel will be re-established, you can use
          | autossh, which builds an SSH tunnel and monitors its health.
        p
          | AutoSSH accepts the same arguments for port forwarding as SSH.
        code autossh -R 2222:localhost:22 ssh-server
        .flow-diagram
          annotated-icon(type="users")
          right-arrow
          annotated-icon(type="server" annotation="ssh-server:2222" color="rgb(255,141,0)")
          right-arrow(:ssh="true")
          annotated-icon(type="laptop" annotation="localhost:22" color="#00dcff")
        p
          | This establishes a reverse tunnel that comes back after network failures.
          | By default, AutoSSH will open extra ports on the SSH client and server for
          | health checks. If traffic appears to no longer pass between the health check
          | ports, AutoSSH will restart the SSH tunnel.

      .example
        code
          | autossh -R 2222:localhost:22 \
          br
          | &nbsp;&nbsp;-M 0 \
          br
          | &nbsp;&nbsp;-o "ServerAliveInterval 10" -o "ServerAliveCountMax 3" \
          br
          | &nbsp;&nbsp;remote-host
        p
          | Using the -M 0 flag disables the health check ports and allows the SSH client
          | to handle the health checks. In this example, the SSH client expects the server
          | to send a heartbeat every 10 seconds. If 3 heartbeats fail in a row, the SSH client
          | exits, and AutoSSH will re-establish a new connection.

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
