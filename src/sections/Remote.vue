<template lang="pug">
  section#remote-port-forwarding
    .container
      header
        h2 Remote port forwarding
        h3 Forwards a port on a remote system to another system

      .flow-diagram
        annotated-icon(type="server" annotation="remote-host-1:8080" color="rgb(255,141,0)")
        right-arrow
        annotated-icon(type="laptop" annotation="localhost:80" color="#00dcff")

      div
        p Fowards port 8080 on remote-host-1 to localhost port 80 on your local computer.
        code ssh -R 8080:localhost:80 remote-host-1

        p
          | Fowards port 8080 on remote-host-1 to localhost port 80
          | on your local computer while only allowing access from IP 1.2.3.4.
        code ssh -R 1.2.3.4:8080:localhost:80 remote-host-2

      div
        | By default, forwarded ports are not accessible to the public internet.
        | You'll need to add this to your sshd_config on your remote server to forward
        | public internet traffic to your local computer.
        code GatewayPorts yes

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
