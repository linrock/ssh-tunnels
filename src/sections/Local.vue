<template lang="pug">
  section#local-port-forwarding
    .container
      header
        h2 Local port forwarding
        h3 Forwards connections from a port on a local system to a port on a remote host

      .example
        code ssh -L 127.0.0.1:8080:example.org:80 ssh-server
        .flow-diagram
          annotated-icon(type="laptop" annotation="127.0.0.1:8080" color="#00dcff")
          right-arrow(ssh="true")
          annotated-icon(type="server" annotation="ssh-server" color="rgb(255,141,0)")
          right-arrow
          annotated-icon(type="server" annotation="example.org:80" color="rgb(255,141,0)")
        p
          | Forwards connections to 127.0.0.1:8080 on your local system
          | to port 80 on example.org through ssh-server. The connection
          | between your local system and ssh-server is encrypted within
          | an SSH tunnel, but not between ssh-server and example.org

      .example
        code ssh -L 8080:example.org:80 ssh-server
        .flow-diagram
          annotated-icon(type="laptop" annotation="*:8080" color="#00dcff")
          right-arrow(ssh="true")
          annotated-icon(type="server" annotation="ssh-server" color="rgb(255,141,0)")
          right-arrow
          annotated-icon(type="server" annotation="example.org:80" color="rgb(255,141,0)")
        p
          | Forwards connections to port 8080 on all interfaces on your local system
          | to port 80 on example.org through ssh-server

      .example
        code ssh -L 192.168.0.1:5432:127.0.0.1:5432 ssh-server
        .flow-diagram
          annotated-icon(type="laptop" annotation="192.168.0.1:5432" color="#00dcff")
          right-arrow(ssh="true")
          annotated-icon(type="server" annotation="ssh-server" color="rgb(255,141,0)")
          right-arrow
          annotated-icon(type="server" annotation="127.0.0.1:5432" color="rgb(255,141,0)")
        p
          | Forwards connections to 192.168.0.1:5432 on your local system to
          | 127.0.0.1:5432 on ssh-server. Note that 127.0.0.1 here is localhost
          | from the viewpoint of ssh-server.

      div
        p
          | Make sure that port forwarding is enabled in /etc/ssh_config on your local system
        code
          | AllowTcpForwarding yes

      h4 Use cases
      p
        | If you want to use a secure connection to access a remote service
        | that communicates over plaintext. For example, postgres, redis, memcached
        | all use plaintext protocols. If you want to make one of these services
        | accessible remotely, instead of having it speak plaintext over public
        | networks, you can tunnel a connection from your local system to the remote
        | server instead.

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
