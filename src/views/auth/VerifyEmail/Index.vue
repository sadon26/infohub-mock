<template>
  <div>
    <AuthLayout :wide="true">
      <div class="mb-2">
        <img src="../../../assets/icons/email.svg" alt="email-icon" />
      </div>
      <h1 class="mb-1">Verify your Email</h1>
      <span class="mb-2" style="display: block; color: #555555">
        Please enter your 6-digit verification code below sent to you at the
        email provided. If you have entered wrong number, you can edit it by
        clicking the Pencil icon below.
      </span>

      <div class="flex flex__center mb-4">
        <div class="email__paste flex flex__item-center">
          <p class="mr-1">Johndoe@gmail.com</p>
          <button class="cursor-pointer flex flex__center">
            <img src="../../../assets/icons/copy-icon.svg" alt="copy-icon" />
          </button>
        </div>
      </div>

      <div class="flex flex__center mb-5">
        <div class="w-30 grid grid__layout gap-1 flex__center">
          <div class="col-2 otp__box">
            <input type="text" class="otp__input" placeholder="-" />
          </div>
          <div class="col-2 otp__box">
            <input type="text" class="otp__input" placeholder="-" />
          </div>
          <div class="col-2 otp__box">
            <input type="text" class="otp__input" placeholder="-" />
          </div>
          <div class="col-2 otp__box">
            <input type="text" class="otp__input" placeholder="-" />
          </div>
          <div class="col-2 otp__box">
            <input type="text" class="otp__input" placeholder="-" />
          </div>
          <div class="col-2 otp__box">
            <input type="text" class="otp__input" placeholder="-" />
          </div>
        </div>
      </div>

      <div class="flex flex__center mb-2">
        <div class="w-23">
          <Button theme="blue">Verify</Button>
        </div>
      </div>
      <div class="flex flex__center">
        <p
          style="background: #fafafa; color: #8b90a0; border-radius: 4px"
          class="p-1"
        >
          00:55
        </p>
      </div>
    </AuthLayout>
  </div>
</template>

<script>
import AuthLayout from "../../../layouts/AuthLayout";
import Button from "../../../components/Button";

export default {
  name: "VerifyEmail",
  components: {
    AuthLayout,
    Button,
  },
};
</script>

<style scoped lang="scss">
.email__paste {
  padding: 0.6rem 5rem;
  border-bottom: 1px solid #dddddd;
}

.otp {
  &__box {
    border-bottom: 1px solid #dddddd;
    padding: 1rem;
  }

  &__input {
    width: 100%;
    border: none;
    outline: none;
    text-align: center;

    &::placeholder {
      color: #555555;
    }
  }
}
</style>
