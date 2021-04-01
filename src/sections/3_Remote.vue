<template lang="pug">
section#remote-port-forwarding
  .container
    header
      h2 Remote port forwarding
      h3 Forwards a port on a remote system to another system

    .example
      code ssh -R 8080:localhost:80 ssh-server
      .flow-diagram
        annotated-icon(type="users")
        right-arrow
        annotated-icon(type="server" annotation="ssh-server:8080" color="rgb(255,141,0)")
        right-arrow(:ssh="true")
        annotated-icon(type="laptop" annotation="localhost:80" color="#00dcff")
      p
        | Forwards traffic to all interfaces on port 8080 on ssh-server to
        | localhost port 80 on your local computer. If one of these interfaces is available
        | to the public internet, traffic connecting to port 8080 will be forwarded to your
        | local system.

    .example
      code ssh -R 1.2.3.4:8080:localhost:80 ssh-server
      .flow-diagram
        annotated-icon(type="user" annotation="1.2.3.4")
        right-arrow
        annotated-icon(type="server" annotation="ssh-server:8080" color="rgb(255,141,0)")
        right-arrow(:ssh="true")
        annotated-icon(type="laptop" annotation="localhost:80" color="#00dcff")
      p
        | Forwards traffic to ssh-server:8080 to localhost:80 on your local system
        | while only allowing access to the SSH tunnel entrance on ssh-server
        | from IP address 1.2.3.4. Use The GatewayPorts clientspecified directive
        | with this.

    .example
      code ssh -R 8080:example.org:80 ssh-server
      .flow-diagram
        annotated-icon(type="users")
        right-arrow
        annotated-icon(type="server" annotation="ssh-server:8080" color="rgb(255,141,0)")
        right-arrow(:ssh="true")
        annotated-icon(type="laptop" color="#00dcff")
        right-arrow
        annotated-icon(type="cloud" annotation="example.org:80")
      p
        | Forwards traffic to all interfaces on ssh-server:8080 to localhost:80
        | on your local system. From your local system, traffic is then forwarded
        | to example.org:80. From the perspective of example.org the traffic
        | is originating from your local system.

    .example
      h4 SSH server configuration
      annotated-icon(type="server" annotation="/etc/ssh/sshd_config" color="rgb(255,141,0)")
      p
        | By default, forwarded ports are not accessible to the public internet.
        | You'll need to add this to your sshd_config on your remote server to forward
        | public internet traffic to your local computer.
      code GatewayPorts yes
      p
        | Or if you'd like to specify which clients are allowed access, you can use
        | the following in your sshd_config instead
      code GatewayPorts clientspecified

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
    background #333

</style>
