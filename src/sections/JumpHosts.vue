<template lang="pug">
  section#jump-hosts
    .container
      header
        h2 Jump hosts and proxy commands
        h3 Transparently connecting to a remote host through an intermediate

      .flow-diagram
        annotated-icon(type="laptop" annotation="localhost:8080" color="#00dcff")
        right-arrow
        annotated-icon(type="server" annotation="user1@jump-host" color="rgb(255,141,0)")
        right-arrow
        annotated-icon(type="server" annotation="user2@remote-host" color="rgb(255,141,0)")

      p
        | Using a jump host to connect to remote-host through jump-host
        code ssh -J user1@jump-host user2@remote-host

      p
        | Connecting to a remote server through a SOCKS proxy
        code ssh -o ProxyCommand="nc -X 5 -x localhost:3000 %h %p" user@remote-host

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
