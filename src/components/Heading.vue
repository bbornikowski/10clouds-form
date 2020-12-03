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
}

</style>
