<template>
  <Fragment>
    <p class="register__formTitle">
      <slot />
    </p>

    <ValidationProvider
      v-slot="{ errors, valid, validated }"
      rules="required"
      name="chessStepOne"
      mode="passive"
      tag="div"
      class="register__formField"
    >
      <label class="register__formPlaceholder">
        {{ 'Can you play chess' }}
      </label>

      <Radio
        v-for="radio in radioButtons"
        v-model="formData.chess"
        :key="radio"
        :is-valid="validated ? valid : true"
        :name="'chessStepOne'"
        :placeholder="radio"
      />

      <p
        class="register__fieldError"
        v-if="errors[0]"
      >
        {{ errors[0] }}
      </p>
    </ValidationProvider>
  </Fragment>
</template>

<script lang="ts">
import Vue from 'vue';
import { ValidationProvider } from 'vee-validate';
import { Fragment } from 'vue-fragment';

import Radio from '@/components/Radio.vue';

export default Vue.extend({
  name: 'StepOne',
  components: {
    Fragment,
    ValidationProvider,
    Radio,
  },
  props: {
    formData: {
      type: Object,
    },
  },
  data: () => ({
    radioButtons: [
      'Yes',
      'No',
    ] as Array<string>,
  }),
});
</script>
