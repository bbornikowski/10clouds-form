<template>
  <div
    :class="hyphenPosition && `input--hyphen input--${hyphenPosition}`"
    :style="width"
    class="input"
  >
    <input
      @input="emitData"
      :value="reformatMobile ? mobileNumber : value"
      :name="name"
      :placeholder="placeholder"
      :class="[
        fullBorder && 'input__field--fullBorder',
        !isValid && 'input__field--error',
      ]"
      size="1"
      type="text"
      class="input__field"
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Field from '@/data/Field';

export default Vue.extend({
  name: 'Input',
  mixins: [Field],
  props: {
    hyphenPosition: {
      type: String,
      default: undefined,
    },
    name: {
      type: String,
      required: true,
    },
    reformatMobile: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    mobileNumber() {
      if (!this.value) return this.value;

      return this.value.replace(/\s/g, '').match(/.{1,3}/g).join(' ');
    },
  },
  methods: {
    emitData({ target: { value } }) {
      this.$emit(
        'input',
        value as string,
      );
    },
  },
});
</script>

<style lang="scss">

.input {
  $p: &;

  display: flex;
  color: $cDark01;
  flex-direction: column;
  font-size: 16px;
  flex-grow: 1;
  line-height: 13px;
  margin-top: 12px;
  position: relative;

  &--hyphen {
    &::before {
      background-color: $cGray02;
      content: '';
      height: 2px;
      opacity: .25;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 10px;
    }

    &#{$p}--right {
      margin-right: 25px;

      &::before {
        right: -18px;
      }
    }

    &#{$p}--left {
      margin-left: 25px;

      &::before {
        left: -18px;
      }
    }
  }

  &__field {
    border-bottom: 2px solid $cGray01;
    padding: 0 14px 12px;
    transition: .3s;

    &:focus {
      border-bottom: 2px solid $cBlue01;
    }

    &--error {
      border-bottom: 2px solid $cRed01;
      color: $cRed01;

      &::placeholder {
        color: $cRed01;
      }
    }

    &--fullBorder {
      padding: 16px 14px 14px;
      border: 2px solid $cGray01;

      &:focus {
        border: 2px solid $cBlue01;
      }

      &#{$p}__field--error {
        border: 2px solid $cRed01;
        color: $cRed01;

        &::placeholder {
          color: $cRed01;
        }
      }
    }
  }
}

</style>
