<template>
  <div class="input">
    <input
      class="input__box"
      :type="inputType"
      :placeholder="placeholder"
      v-model="inputText"
    />
    <button
      v-if="type === 'password'"
      @click.prevent="setInputType"
      class="u-absolute input__toggle-pass-text"
    >
      SHOW
    </button>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "Placeholder text",
    },
    value: {
      type: String,
    },
  },
  data() {
    return {
      inputType: this.type,
    };
  },
  computed: {
    inputText: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  methods: {
    setInputType() {
      this.inputType = this.inputType === "text" ? "password" : "text";
    },
  },
};
</script>

<style scoped lang="scss">
@use "./input.scss";
</style>
