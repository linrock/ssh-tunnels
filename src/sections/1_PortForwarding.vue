<template lang="pug">
  section#port-forwarding
    .container
      header
        h2 Port forwarding
        h3 Forwards a port from one system (local or remote) to another

      .example
        h4 Local port forwarding
        .flow-diagram
          annotated-icon(type="laptop" annotation="127.0.0.1:8080" color="#00dcff")
          right-arrow(ssh="true")
          annotated-icon(type="server" annotation="ssh-server" color="rgb(255,141,0)")
          right-arrow
          annotated-icon(type="cloud" annotation="example.org:80")
        p
          | Local port forwarding allows you to forward traffic to the SSH client
          | to some destination through an SSH server. This lets local services
          | access some remote service as if it were another local service.
      .example
        h4 Remote port forwarding
        .flow-diagram
          annotated-icon(type="users")
          right-arrow
          annotated-icon(type="server" annotation="ssh-server:8080" color="rgb(255,141,0)")
          right-arrow(ssh="true")
          annotated-icon(type="laptop" annotation="localhost:80" color="#00dcff")
        p
          | Remote port forwarding allows you to forward traffic to an SSH server
          | to some destination through either the SSH client or another remote host.
          | This gives users on public networks access to resources on a private network.

      .example
        h4 Forwarding from privileged ports
        p
          | If you want to open a privileged port (ports 1-1023) to forward traffic, you'll
          | need to run SSH with superuser privileges on the system that opens the port.
        code
          | sudo ssh -L 90:example.org:80 ssh-server

      .example
        h4 SSH command-line flags
        p
          | These are some useful SSH command-line flags when establishing tunnels
        code
          | -f
          |   # forks the ssh process into the background
          br
          | -n
          |   # prevents reading from STDIN
          br
          | -N
          |  # do not run remote commands. Used when only forwarding ports
          br
          | -T
          |  # disables TTY allocation
        p
          | For brevity, the examples below will leave out these command-line
          | flags.
        p
          | Here's an example of a command you would run to create an SSH tunnel
          | in the background that forwards a local port through the ssh server.
        code
          | ssh -fnNT -L 127.0.0.1:8080:example.org:80 ssh-server

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
