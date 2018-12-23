<template lang="pug">
  section#resources
    .container
      header
        h2 Resources
      nav
        a(href="https://en.wikibooks.org/wiki/OpenSSH/Cookbook/Tunnels") OpenSSH cookbook
        a(href="http://www.harding.motd.ca/autossh/") AutoSSH
    footer
      .container
        a(href="https://robotmoon.com") Home
        a(href="https://github.com/linrock/ssh-tunnels") Source code

</template>

<style scoped lang="stylus">
  section
    background #222
    padding-bottom 0

  nav
    margin-bottom 50px
    a
      display block

  footer
    background #111
    display flex
    padding 12px 0
    a
      margin-right 30px

</style>
