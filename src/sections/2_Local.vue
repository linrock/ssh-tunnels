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
        right-arrow(:ssh="true")
        annotated-icon(type="server" annotation="ssh-server" color="rgb(255,141,0)")
        right-arrow
        annotated-icon(type="cloud" annotation="example.org:80")
      p
        | Forwards connections to 127.0.0.1:8080 on your local system
        | to port 80 on example.org through ssh-server. The traffic between your
        | local system and ssh-server is wrapped in an SSH tunnel,
        | but the traffic between ssh-server and example.org is not.
        | From the perspective of example.org the traffic originates from
        | ssh-server.

    .example
      code ssh -L 8080:example.org:80 ssh-server
      code ssh -L *:8080:example.org:80 ssh-server
      .flow-diagram
        annotated-icon(type="laptop" annotation="*:8080" color="#00dcff")
        right-arrow(:ssh="true")
        annotated-icon(type="server" annotation="ssh-server" color="rgb(255,141,0)")
        right-arrow
        annotated-icon(type="cloud" annotation="example.org:80")
      p
        | Forwards connections to port 8080 on all interfaces on your local system
        | to example.org:80 through a tunnel to ssh-server.

    .example
      code ssh -L 192.168.0.1:5432:127.0.0.1:5432 ssh-server
      .flow-diagram
        annotated-icon(type="laptop" annotation="192.168.0.1:5432" color="#00dcff")
        right-arrow(:ssh="true")
        annotated-icon(type="server" annotation="ssh-server" color="rgb(255,141,0)")
        right-arrow
        annotated-icon(type="server" annotation="127.0.0.1:5432" color="rgb(255,141,0)")
      p
        | Forwards connections to 192.168.0.1:5432 on your local system to
        | 127.0.0.1:5432 on ssh-server. Note that 127.0.0.1 here is localhost
        | from the viewpoint of ssh-server.

    .example
      h4 SSH configurations
      p
        | Make sure that TCP forwarding is enabled on the SSH server. By default it should be.
      annotated-icon(type="server" annotation="/etc/ssh/sshd_config" color="rgb(255,141,0)")
      code
        | AllowTcpForwarding yes
      p
        | If you're forwarding ports on interfaces other than 127.0.0.1 then you'll
        | need to enable GatewayPorts on your local system, either within ssh_config or as
        | a command-line option
      annotated-icon(type="laptop" annotation="/etc/ssh/ssh_config" color="#00dcff")
      code
        | GatewayPorts yes

    h4 Use cases
    p
      | If you want to use a secure connection to access a remote service
      | that communicates over plaintext. For example, redis and memcached
      | all use plaintext protocols. If you securely access one of these services
      | on a remote server over public networks, you can tunnel a connection
      | from your local system to the remote server instead of having it listen
      | over the public internet.

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
