<template>
  <div class="container">
    <h1>A visual guide to SSH tunnels</h1>

    <nav>
      <a href="#">Local port forwarding</a>
      <a href="#">Remote port forwarding</a>
      <a href="#">Dynamic port forwarding</a>
      <a href="#">Combining SSH tunnels</a>
      <a href="#">Reliable SSH tunnels</a>
    </nav>

    <p>
      Since SSH commands can be run from either local or remote systems, throughout this guide, the following icons and colors will be used to hopefully make it more clear which commands are run on which.
    </p>

    <div>
      <laptop/> localhost
    </div>

    <div>
      <server/> remote server
    </div>
  </div>
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
  .container
    padding 10px 0 30px

  nav
    margin 30px 0
    a
      color #42b983
      display block

  p
    margin 30px 0

</style>
