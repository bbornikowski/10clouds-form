<template>
  <div
    class="select"
    :style="width"
  >
    <input
      :value="value"
      :placeholder="placeholder"
      :class="[
        fullBorder && 'select__field--fullBorder',
        isSmall && 'select__field--small',
        !isValid && 'select__field--error',
      ]"
      type="text"
      autocomplete="off"
      class="select__field"
      name="code"
      size="5"
    >

    <ul class="select__list">
      <li
        @click="emitData(item)"
        v-for="item in list"
        :key="item"
        class="select__listItem"
      >
        {{ item }}
      </li>
    </ul>

    <span class="select__dropdownIcon icon icon-arrow" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Field from '@/data/Field';

export default Vue.extend({
  name: 'Select',
  mixins: [Field],
  props: {
    isSmall: {
      type: Boolean,
      default: false,
    },
    list: {
      type: Array,
      required: true,
    },
  },
  methods: {
    emitData(value: string) {
      this.$emit(
        'input',
        value,
      );
    },
  },
});
</script>

<style lang="scss">

.select { $p: &;
  align-items: flex-start;
  box-sizing: border-box;
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  margin-top: 12px;
  position: relative;

  & + div {
    margin-left: 19px;
  }

  &__placeholder {
    color: $cBlack;
    font-size: 14px;
    font-weight: 600;
    left: 20px;
    pointer-events: none;
    position: absolute;
    top: 14px;
    transition: .3s;
  }

  &__field {
    border-bottom: 2px solid $cGray01;
    caret-color: transparent;
    font-size: 16px;
    line-height: 13px;
    cursor: pointer;
    min-width: 114px;
    padding: 0 14px 12px;
    width: 100%;

    &:focus {
      & ~ #{$p}__dropdownIcon {
        transform: rotate(180deg);
      }

      & ~ ul {
        opacity: 1;
        visibility: visible;
      }
    }

    &--small {
      min-width: auto;

      @include rwd('small-tablet') {
        & ~ #{$p}__dropdownIcon {
          right: 6px;
        }
      }
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

      & ~ #{$p}__dropdownIcon {
        top: 24px;
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

  &__dropdownIcon {
    color: $cDark04;
    display: block;
    font-size: 7px;
    opacity: .25;
    position: absolute;
    right: 13px;
    top: 4px;
    transition: transform .15s;
  }

  &__list {
    background-color: $cWhite;
    border: 2px solid $cGray01;
    border-top: 0;
    margin: 0;
    opacity: 0;
    padding: 10px 13px;
    max-height: 160px;
    overflow-y: scroll;
    position: absolute;
    top: 100%;
    transition: opacity .3s, visibility .3s;
    visibility: hidden;
    width: 100%;
    z-index: 1;
  }

  &__listItem {
    cursor: pointer;
    list-style-type: none;
    padding: 5px 0;
  }
}

</style>
