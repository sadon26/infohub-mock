<template>
  <div>
    <p>Home page</p>
    <router-link :to="{ name: 'login' }">Go to Login page</router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped></style>
