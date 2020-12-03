<template>
  <button class="button">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Button',
});
</script>

<style lang="scss">

.button {
  color: $cWhite;
  background: linear-gradient(90deg, $cBlue03 -0.42%, $cBlue01 100.42%);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: .48px;
  line-height: 28px;
  max-width: 187px;
  padding: 11px 0 12px;
  position: relative;
  text-transform: uppercase;
  width: 100vw;

  &:hover {
    &::before {
      background-color: $cGreen01;
    }
  }

  &::before {
    @include icomoon('dropdown');
    align-items: center;
    background-color: $cBlue02;
    display: flex;
    font-size: 10px;
    height: 100%;
    justify-content: center;
    position: absolute;
    right: -50px;
    top: 0;
    width: 50px;
    transition: .3s;
  }
}

</style>
