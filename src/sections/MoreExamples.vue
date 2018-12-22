<template lang="pug">
  section#more-examples
    .container
      header
        h2 More examples and use cases

      .example
        p
          | Transparent access to remote resource accessible only through a private network.
          | Let's say there's a git repository on a private network that's only accessible
          | through a private server on the network. This server is not accessible to the public
          | internet. You have direct access to the server, but don't have VPN access to the
          | private network.

        .flow-diagram
          annotated-icon(type="server" annotation="private-server" color="rgb(255,141,0)")
          right-arrow
          annotated-icon(type="server" annotation="git@private-network" color="rgb(255,141,0)")

        p
          | For convenience, you'd like to access this private git repository as if you were
          | connecting to it directly from your local system. If you have SSH access to another
          | server that's accessible from both your local system and the private server, you
          | can accomplish this by establishing an SSH tunnel and using a couple of
          | ProxyCommand directives.

        code ssh -L 127.0.0.1:22:127.0.0.1:2222 intermediate-host
        .flow-diagram
          annotated-icon(type="server" annotation="127.0.0.1:2222" color="#00dcff")
          right-arrow(ssh="true")
          annotated-icon(type="server" annotation="127.0.0.1:22" color="rgb(255,141,0)")
        p
          | This forwards port 2222 on intermediate-host to port 22 on the private server.
          | Now, if you SSH to port 2222 from intermediate-host, you're connecting to the
          | SSH server on the private server despite the private server not being accessible
          | by the public internet.
        code ssh -p 2222 user@localhost
        p
          | If you'd like to make the backdoor even more convenient, you can add
          | some directives to your local ~/.ssh/config
        code
          | Host git.private.network
          br
          | &nbsp;&nbsp;HostName git.private.network
          br
          | &nbsp;&nbsp;ForwardAgent yes
          br
          | &nbsp;&nbsp;ProxyCommand ssh private nc %h %p
          br
          br
          | Host private
          br
          | &nbsp;&nbsp;HostName localhost
          br
          | &nbsp;&nbsp;Port 2222
          br
          | &nbsp;&nbsp;User private-user
          br
          | &nbsp;&nbsp;ForwardAgent yes
          br
          | &nbsp;&nbsp;ProxyCommand ssh tunnel@intermediate-host nc %h %p
        .flow-diagram
          annotated-icon(type="laptop" annotation="" color="#00dcff")
          right-arrow(ssh="true")
          annotated-icon(type="server" annotation="127.0.0.1:2222" color="#00dcff")
          right-arrow(ssh="true")
          annotated-icon(type="server" annotation="127.0.0.1:22" color="rgb(255,141,0)")
        p
          | Now you have access to the private git repository as if you were on the private
          | network.

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
