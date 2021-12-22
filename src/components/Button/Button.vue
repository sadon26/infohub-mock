<template>
  <button
    v-on="$listeners"
    :class="`button button__${theme} button__${mobile ? 'mobile' : ''}`"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    theme: {
      type: String,
      default: "main",
    },
    mobile: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped lang="scss">
@forward "./button.scss";
</style>
