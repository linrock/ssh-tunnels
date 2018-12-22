<template lang="pug">
  .diagram-right-arrow
    template(v-if="ssh")
      .label
        lock.lock
        span SSH
      right-arrow-short.right-arrow-short
    template(v-else)
      right-arrow

</template>

<script>
  import RightArrow from '../icons/RightArrow'
  import RightArrowShort from '../icons/RightArrowShort'
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
      RightArrowShort,
      Lock
    }
  }
</script>

<style lang="stylus">
  .diagram-right-arrow
    display flex
    align-items center
    margin 0 25px

    .right-arrow-long
      height 15px
      margin-top 3px

      path
        fill lightgreen

    .label
      align-items center
      display flex
      color lightgreen

      .lock
        height 12px

      span
        font-size 12px
        margin-left 3px

    .right-arrow-short
      height 13px
      margin-left 5px
      path
        fill lightgreen

</style>
