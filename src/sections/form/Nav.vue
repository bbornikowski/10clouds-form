<template>
  <ul class="formNav">
    <li
      v-for="(step, index) in list"
      :key="step"
      :class="index === active && 'formNav__navItem--active'"
      class="formNav__navItem"
    >
      <p>
        {{ step }}
      </p>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'FormNav',
  props: {
    list: {
      type: Array,
      required: true,
    },
    active: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>

.formNav {
  display: flex;
  counter-reset: nav-counter;
  flex-direction: column;
  left: 100%;
  margin-left: -50px;
  padding-top: 110px;
  position: absolute;

  @include rwd('small-tablet') {
    display: none;
  }

  &__navItem {
    color: $cWhite;
    counter-increment: nav-counter;
    display: flex;
    flex-direction: column;
    font-size: 11px;
    font-weight: 400;
    line-height: 11px;
    margin-bottom: 65px;
    padding-left: 8px;
    position: relative;

    &::before {
      content: '';
      background-color: $cGray03;
      display: block;
      height: 2px;
      margin-bottom: 8px;
      margin-left: -8px;
      opacity: .25;
      order: 1;
      width: 25px;
    }

    &::after {
      color: $cWhite;
      content: '0' counter(nav-counter);
      order: 2;
    }

    p {
      font-size: 0;
      margin-top: 4px;
      order: 3;
    }

    &--active {
      &::before {
        background-color: $cGreen01;
        opacity: 1;
      }

      p {
        font-size: 11px;
      }
    }
  }
}

</style>
