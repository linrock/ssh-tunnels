<template lang="pug">
  section#local-port-forwarding
    .container
      header
        h2 Local port forwarding
        h3 Forwards a port on a local system to a remote system

      div
        laptop
        | localhost

      div
        server
        | remote-host-1.com

      div
        server
        | remote-host-2.com

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
    background #444

</style>
