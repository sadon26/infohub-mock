<template>
  <div>
    <AuthLayout>
      <div class="mb-2">
        <img src="../../../assets/icons/padlock-icon.svg" alt="padlock-icon" />
      </div>
      <h1 class="mb-2">Reset Password</h1>

      <span>
        Enter the email associated with your account and we will send an email
        with instructions to reset your password.
      </span>

      <div class="my-3">
        <Input
          type="email"
          placeholder="Enter your Email Address"
          v-model="email"
        />
      </div>

      <Button @click="resetPassword" class="mb-2" theme="blue"
        >Send your instructions</Button
      >
      <router-link
        tag="div"
        class="text__mid-grey flex flex__center cursor-pointer"
        :to="{ name: 'login' }"
      >
        <img src="../../../assets/icons/back-icon.svg" alt="back-icon" />
        &nbsp;
        <span class="text__mid-grey">Back to login page</span>
      </router-link>
    </AuthLayout>
    <Modal :active="showModal">
      <div class="flex flex__center">
        <div class="mb-3">
          <img
            src="../../../assets/icons/success-icon.svg"
            alt="success-icon"
          />
        </div>
      </div>

      <div class="text-center mb-2">
        <h2 class="mb-1">Reset Password</h2>
        <span class="text-center text__light-grey">
          Please check your inbox and use the instructions in the email to reset
          your password. Be patient, this may take few minutes.
        </span>
      </div>
      <p class="text-center">
        Haven't received yet?
        <button class="cursor-pointer">
          <span class="text-green">Resend email</span>
        </button>
      </p>
    </Modal>
  </div>
</template>

<script>
import AuthLayout from "../../../layouts/AuthLayout";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";

export default {
  name: "ResetPassword",
  components: {
    AuthLayout,
    Input,
    Button,
    Modal,
  },
  data() {
    return {
      email: "",
      showModal: false,
    };
  },
  methods: {
    resetPassword() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style scoped></style>
