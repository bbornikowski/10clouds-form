<template>
  <Fragment>
    <p class="register__formTitle">
      <slot />
    </p>

    <ValidationProvider
      v-slot="{ errors, valid, validated }"
      rules="required|min:3"
      name="nameStepThree"
      mode="passive"
      tag="div"
      class="register__formField"
    >
      <label class="register__formPlaceholder">
        {{ 'Your name' }}
      </label>

      <Input
        v-model="formData.name"
        :is-valid="validated ? valid : true"
        :name="'nameStepThree'"
        :placeholder="'Name'"
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

import Input from '@/components/Input.vue';

export default Vue.extend({
  name: 'StepThree',
  components: {
    Fragment,
    ValidationProvider,
    Input,
  },
  props: {
    formData: {
      type: Object,
    },
  },
});
</script>
