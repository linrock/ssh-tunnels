<template lang="pug">
  section#remote-port-forwarding
    .container
      header
        h2 Remote port forwarding
        h3 Forwards a port on a remote system to another system

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
    background #333

</style>
