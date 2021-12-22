<template>
  <div>
    <div>
      <Header />
    </div>

    <div class="auth__card-wrapper flex flex__center flex__item-center">
      <div
        :class="[
          card ? 'auth__card text-center' : '',
          wide ? 'auth__card-wide' : '',
        ]"
      >
        <slot>
          <div>Card</div>
        </slot>
      </div>
    </div>

    <slot name="footer"></slot>
  </div>
</template>

<script>
import Header from "../../components/Header/";

export default {
  props: {
    card: {
      type: Boolean,
      default: true,
    },
    wide: {
      type: Boolean,
      default: false,
    },
  },
  name: "AuthLayout",
  components: {
    Header,
  },
};
</script>

<style scoped></style>
