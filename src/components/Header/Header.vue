<template>
  <header class="flex flex__spaced header">
    <button>
      <router-link :to="{ name: 'home' }">
        <img
          src="../../assets/icons/infohub-blue-logo.svg"
          alt="infohub-logo"
        />
      </router-link>
    </button>

    <Button :mobile="true" @click="goToPage" v-if="ctaText">{{
      ctaText
    }}</Button>
  </header>
</template>

<script>
import Button from "../../components/Button";

export default {
  name: "Header",
  components: {
    Button,
  },
  computed: {
    ctaText() {
      switch (this.$router.history.current.name) {
        case "login":
          return "Create Account";
        case "resetPassword":
          return "";
        default:
          return "Log in";
      }
    },
  },
  methods: {
    goToPage() {
      switch (this.ctaText) {
        case "Log in":
          this.$router.push({ name: "login" });
          return;
        case "Create Account":
          this.$router.push({ name: "createAccount" });
          return;
        default:
          return;
      }
    },
  },
};
</script>

<style scoped lang="scss">
@use "../../assets/scss/mixins/index.scss" as *;

.header {
  padding: 2rem 4rem 0;

  @include query("mobile") {
    padding: 2rem 1.6rem 0;
  }
}
</style>
