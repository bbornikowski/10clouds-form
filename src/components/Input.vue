<template>
  <div
    :class=" hyphenPosition && `input--hyphen input--${hyphenPosition}`"
    :style="width"
    class="input"
  >
    <input
      @input="emitData"
      :value="value"
      :class="fullBorder && 'input__field--fullBorder'"
      :placeholder="placeholder"
      size="1"
      type="text"
      class="input__field"
      name="firstName"
      required
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Field from '@/mixins/Field';

export default Vue.extend({
  name: 'Input',
  mixins: [Field],
  props: {
    hyphenPosition: {
      type: String,
      default: undefined,
    },
  },
  methods: {
    emitData({ target: { value } }) {
      this.$emit(
        'input',
        value,
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
  line-height: 13px;
  margin-top: 12px;
  position: relative;
  width: 100%;

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

    &--fullBorder {
      padding: 16px 14px 14px;
      border: 2px solid $cGray01;

      &:focus {
        border: 2px solid $cBlue01;
      }
    }
  }
}

</style>
