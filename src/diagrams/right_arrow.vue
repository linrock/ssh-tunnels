<template lang="pug">
  .diagram-right-arrow
    template(v-if="ssh")
      right-arrow-long.right-arrow-long
      .label
        lock.lock
        span SSH
    template(v-else)
      right-arrow

</template>

<script>
  import RightArrow from '../icons/RightArrow'
  import RightArrowLong from '../icons/RightArrowLong'
  import Lock from '../icons/Lock'

  export default {
    props: {
      ssh: {
        type: Boolean,
        required: false,
      }
    },

    components: {
      RightArrow,
      RightArrowLong,
      Lock
    }
  }
</script>

<style lang="stylus">
  .diagram-right-arrow
    display flex
    position relative
    margin 0 20px

    .right-arrow-long
      height 15px
      margin-top 3px

      path
        fill black

    .label
      align-items center
      display flex
      position absolute
      top 2px
      left 5px
      color lightgreen

      .lock
        height 12px

      span
        font-size 12px
        margin-left 3px

</style>
