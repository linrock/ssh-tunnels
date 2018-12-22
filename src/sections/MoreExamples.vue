<template lang="pug">
  section#more-examples
    .container
      header
        h2 More examples and use cases

      .flow-diagram
        annotated-icon(type="laptop" annotation="localhost:8080" color="#00dcff")
        right-arrow
        annotated-icon(type="server" annotation="remote-host-1" color="rgb(255,141,0)")
        right-arrow
        annotated-icon(type="server" annotation="remote-host-2:80" color="rgb(255,141,0)")

      p
        | More examples and use cases for SSH tunnels

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
