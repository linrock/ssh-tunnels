<template lang="pug">
  .annotated-icon(:style="[{ color }]")
    template(v-if="type === `laptop`")
      laptop
    template(v-else-if="type === `server`")
      server
    span {{ annotation }}

</template>

<script>
  import Laptop from '../icons/Laptop'
  import Server from '../icons/Server'

  export default {
    props: {
      type: {
        type: String,
        required: true,
      },
      annotation: {
        type: String,
        required: false,
      },
      color: {
        type: String,
        required: false,
      }
    },

    components: {
      Laptop,
      Server
    }
  }
</script>

<style lang="stylus">
  .annotated-icon
    align-items center
    display flex

    svg
      width 20px
      height 20px

    span
      height 20px
      line-height 20px
      margin-left 10px

</style>
