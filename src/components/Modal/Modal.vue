<template>
  <portal to="modal-portal">
    <div
      :class="`u-absolute modal__wrapper ${
        !showModal ? 'modal__wrapper-closed' : ''
      }`"
    >
      <div
        @click="showModal = !showModal"
        :class="`modal__overlay ${!showModal ? 'modal__overlay-closed' : ''}`"
      ></div>

      <div
        :class="`u-absolute modal__body ${
          !showModal ? 'modal__body-closed' : ''
        } modal__body-${position}`"
      >
        <slot></slot>
        <button
          @click="showModal = !showModal"
          class="modal__close-icon cursor-pointer"
        >
          <img src="../../assets/icons/close-icon.svg" alt="close-icon" />
        </button>
      </div>
    </div>
  </portal>
</template>

<script>
export default {
  name: "Modal",
  props: {
    position: {
      type: String,
      default: "center",
    },
    active: {
      type: Boolean,
    },
  },
  data() {
    return {
      showModal: false,
    };
  },
  watch: {
    active() {
      this.showModal = !this.showModal;
    },
    showModal(value) {
      if (value) {
        document.body.style.overflow = "hidden";

        return;
      }

      document.body.style.overflow = "auto";
    },
  },
};
</script>

<style scoped lang="scss">
@import "./Modal.scss";
</style>
