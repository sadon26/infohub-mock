<template>
  <div>
    <p>Home page</p>
    <router-link :to="{ name: 'login' }">Go to Login page</router-link>
    &nbsp;
    <router-link :to="{ name: 'resetPassword' }"
      >Go to reset password</router-link
    >
    &nbsp;
    <router-link :to="{ name: 'verifyEmail' }">Go to verify email</router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped></style>
