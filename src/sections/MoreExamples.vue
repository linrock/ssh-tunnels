<template lang="pug">
  section#more-examples
    .container
      header
        h2 More examples and use cases

      div
        laptop
        | localhost

      div
        server
        | remote server

      p
        | More examples and use cases for SSH tunnels

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
