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
  },
};
</script>

<style scoped lang="scss">
.modal {
  &__wrapper {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    &-closed {
      pointer-events: none;
    }
  }
  &__overlay {
    width: 100%;
    background: #14141494;
    height: 100%;
    transition: 0.2s all ease-out;

    &-closed {
      opacity: 0;
    }
  }

  &__body {
    background: #fff;
    padding: 3.2rem 5.6rem;
    width: 560px;
    border-radius: 4px;
    transition: 0.3s all cubic-bezier(0.645, 0.045, 0.355, 1);
    opacity: 1;

    &-center {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(1);
    }

    &-closed {
      opacity: 0;

      &.modal__body-center {
        transform: translate(-50%, -50%) scale(1.3);
      }
    }
  }

  &__close-icon {
    position: absolute;
    right: 2rem;
    top: 2rem;
  }
}
</style>
