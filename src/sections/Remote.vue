<template>
  <section class="local-port-forwarding">
    <div class="container">
      <h2>Remote port forwarding</h2>

      <div>
        <code>ssh -R 8080:localhost:80 remote-host-1.com</code>
        <code>ssh -R 52.194.1.73:8080:localhost:80 remote-host-2.com</code>
      </div>

      <div>
        <laptop/> localhost
      </div>

      <div>
        <server/> remote server
      </div>
    </div>
  </section>
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
  .local-port-forwarding
    background #333
    padding 30px 0

  h3
    margin 40px 0 0

  nav
    a
      display block

  ul
    list-style-type none
    padding 0

  li
    display inline-block
    margin 0 10px

  a
    color #42b983

  svg
    width 40px

  code
    background #111
    color white
    font-size 16px
    padding 10px 18px
    border-radius 2px

</style>
