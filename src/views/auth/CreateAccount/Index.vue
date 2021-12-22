<template>
  <AuthLayout>
    <h1>Create your account</h1>
    <p class="my-2">Lets explore the best opportunities</p>

    <form>
      <Input
        class="mb-2"
        type="text"
        placeholder="Full Name"
        v-model="fullName"
      />
      <Input
        class="mb-2"
        type="email"
        placeholder="Email Address"
        v-model="email"
      />
      <Input
        class="mb-2"
        type="password"
        placeholder="Password"
        v-model="password"
      />
      <Button theme="blue">Login</Button>
    </form>

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

    <template #footer>
      <p class="my-4 text-center">Having troubles signing up?</p>
    </template>
  </AuthLayout>
</template>

<script>
import Button from "../../../components/Button";
import AuthLayout from "../../../layouts/AuthLayout";
import Input from "../../../components/Input";

export default {
  name: "CreateAccount",
  components: {
    AuthLayout,
    Input,
    Button,
  },
  data() {
    return {
      email: "",
      fullName: "",
      password: "",
    };
  },
};
</script>

<style scoped></style>
