<template>
  <div id="app">
    <router-view />
    <portal-target name="modal-portal"></portal-target>
  </div>
</template>

<style lang="scss">
@use "./assets/scss/index.scss" as *;
</style>
