<template>
  <h2 class="heading">
    <slot />
  </h2>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Heading',
});
</script>

<style lang="scss">

.heading {
  color: $cWhite;
  font-size: 48px;
  font-weight: 300;
  line-height: 48px;
  margin-bottom: 48px;

  @include rwd('tablet') {
    font-size: 36px;
    line-height: 42px;
    margin-bottom: 28px;
  }
}

</style>
