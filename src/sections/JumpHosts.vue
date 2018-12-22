<template lang="pug">
  section#jump-hosts
    .container
      header
        h2 Jump hosts and proxy commands
        h3 Transparently connecting to a remote host through an intermediate host

      .example
        code ssh -J user1@jump-host user2@remote-host
        .flow-diagram
          annotated-icon(type="laptop" annotation="" color="#00dcff")
          right-arrow(ssh="true")
          annotated-icon(type="server" annotation="user1@jump-host" color="rgb(255,141,0)")
          right-arrow(ssh="true")
          annotated-icon(type="server" annotation="user2@remote-host" color="rgb(255,141,0)")
        p
          | Connecting to remote-host through an intermediate jump-host.
          | The above command should work out of the box if jump-host already has
          | SSH access to remote-host. If it does not, you can use agent forwarding
          | to forward the SSH identity of your local computer to remote-host.
        p
          | To enable agent forwarding, you can use ssh-add to add your local SSH
          | identity.

        code
          | ssh-add

      .example
        code ssh -o ProxyCommand="nc -X 5 -x localhost:3000 %h %p" user@remote-host
        .flow-diagram
          annotated-icon(type="laptop" annotation="" color="#00dcff")
          right-arrow(ssh="true")
          annotated-icon(type="laptop" annotation="proxy-host:3128" color="#00dcff")
          right-arrow(secure="true")
          annotated-icon(type="server" annotation="user2@remote-host" color="rgb(255,141,0)")
        p
          | Connecting to a remote server through a SOCKS5 proxy using netcat.
          | From the perspective of the server, the originating IP is from proxy-host.
          | However, the SSH connection itself is end-to-end encrypted so proxy-host
          | only sees an encrypted stream of traffic between the local system
          | and remote-host.

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
