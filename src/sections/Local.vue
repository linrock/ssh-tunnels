<template lang="pug">
  section#local-port-forwarding
    .container
      header
        h2 Local port forwarding
        h3 Forwards a port on a local system to a remote system

      .flow-diagram
        annotated-icon(type="laptop" annotation="localhost:8080" color="#00dcff")
        right-arrow(ssh="true")
        annotated-icon(type="server" annotation="remote-host-1" color="rgb(255,141,0)")
        right-arrow
        annotated-icon(type="server" annotation="remote-host-2:80" color="rgb(255,141,0)")

      div
        p
          | Forwards port 8080 on your local computer to port 80 on
          | remote-host-2 through remote-host-1
        code ssh -L 8080:remote-host-2:80 remote-host-1

        p
          | Forwards only localhost port 8080 on your local computer to
          | port 80 on remote-host-2 through remote-host-1
        code ssh -L 127.0.0.1:8080:remote-host-2:80 remote-host-1

        p
          | Forwards only localhost port 8080 on your local computer to
          | localhost port 80 on remote-host-1
        code ssh -L 127.0.0.1:8080:localhost:80 remote-host-1

      div
        p
          | Make sure that port forwarding is enabled on your local system
        code
          | AllowTcpForwarding yes

      h4 Use cases
      p
        | If you want to use a secure connection to access a remote service
        | that typically communicates over plaintext services. For example,
        | postgres, redis, memcached all use plaintext. If you run one of these
        | services, instead of having it listen on an address accessible to the
        | public internet, you can tunnel a connection from your local system
        | instead.

      p
        | If you want to transparently access a resource through remote-host-1 without
        | setting up a proxy.

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
    background #444

</style>
