<template lang="pug">
  .annotated-icon(:style="[{ color }]")
    component(:is="type")
    span(v-if="annotation && annotation.length > 0") {{ annotation }}

</template>

<script>
  import Laptop from '../icons/Laptop'
  import Server from '../icons/Server'
  import Cloud from '../icons/Cloud'
  import Users from '../icons/Users'
  import User from '../icons/User'

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
      Server,
      Cloud,
      Users,
      User
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
