<template>
  <div class="radio">
    <input
      :id="uniqueID"
      :name="name"
      type="radio"
    >

    <label
      @click="emitData(placeholder)"
      :for="uniqueID"
      :class="!isValid && 'input__field--error'"
      class="radio__item"
    >
      {{ placeholder }}
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Radio',
  props: {
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    isValid: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({
    uniqueID: new Date().getTime() + (Math.random() * 100000).toFixed(),
  }),
  methods: {
    emitData(value) {
      this.$emit(
        'input',
        value,
      );
    },
  },
});
</script>

<style lang="scss">

.radio {
  display: flex;
  flex-direction: column;
  margin: 12px 26px 0 0;

  input {
    display: none;

    &:checked {
      & + label {
        border: 2px solid $cGreen01;

        &::before {
          border: 2px solid $cGreen01;
        }

        &::after {
          opacity: 1;
          visibility: visible;
        }
      }
    }
  }

  &__item {
    align-self: flex-start;
    border: 2px solid $cGray01;
    color: $cDark03;
    cursor: pointer;
    font-size: 16px;
    line-height: 16px;
    min-width: 50px;
    padding: 16px 10px 14px 8px;
    position: relative;
    transition: border .3s;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }

    &::before {
      background-color: $cWhite;
      border: 2px solid $cGray01;
      height: 15px;
      right: -9px;
      transition: border .3s;
      width: 15px;
    }

    &::after {
      background-color: $cGreen01;
      height: 3px;
      opacity: 0;
      right: -3px;
      transition: .3s;
      visibility: hidden;
      width: 3px;
    }
  }
}

</style>
