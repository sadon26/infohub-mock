<template>
  <AuthLayout>
    <p>Welcome Back</p>
    <h1 class="my-2">Login to your account</h1>
    <div>
      <Input
        class="mb-2"
        type="email"
        placeholder="Email Address"
        v-model="email"
      />
      <Input type="password" placeholder="Password" v-model="password" />
      <div class="flex flex__end">
        <router-link
          :to="{ name: 'forgotPassword' }"
          class="text__dark-grey mt-1 mb-2"
          >Forgot password?</router-link
        >
      </div>
      <Button theme="blue">Login</Button>
      <div class="flex flex__space-center">
        <div style="width: 43%; background: #d3d4d8; height: 1px"></div>
        <p class="text__light-grey my-3">OR</p>
        <div style="width: 43%; background: #d3d4d8; height: 1px"></div>
      </div>
      <button class="cta__google u-relative mb-2">
        Continue with Google
        <span class="cta__google-icon"
          ><img src="../../../assets/icons/google-icon.svg" alt="google-icon"
        /></span>
      </button>
      <p style="font-size: 1.2rem" class="text__light-grey">
        All your activity will remain private
      </p>
    </div>
  </AuthLayout>
</template>

<script>
import AuthLayout from "../../../layouts/AuthLayout/Index.vue";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

export default {
  name: "Login",
  components: {
    AuthLayout,
    Button,
    Input,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>
