<template>
  <Fragment>
    <p class="register__formTitle">
      <slot />
    </p>

    <ValidationProvider
      v-slot="{ errors, valid, validated }"
      rules="required|min:3"
      name="firstName"
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
        :name="'firstName'"
        :placeholder="'Name'"
      />

      <p
        class="register__fieldError"
        v-if="errors[0]"
      >
        {{ errors[0] }}
      </p>
    </ValidationProvider>

    <div class="register__formField">
      <label class="register__formPlaceholder">
        {{ 'Mobile' }}
      </label>

      <div class="register__formRow">
        <ValidationProvider
          v-slot="{ errors, valid, validated }"
          rules="required"
          name="code"
          mode="passive"
          class="register__formColumn"
          tag="div"
        >
          <Select
            v-model="formData.mobile.code"
            :custom-width="114"
            :placeholder="'Code'"
            :is-valid="validated ? valid : true"
            :list="[
              '+48 (PL)',
              '+49 (DE)',
            ]"
          />

          <p
            class="register__fieldError"
            v-if="errors[0]"
          >
            {{ errors[0] }}
          </p>
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors, valid, validated }"
          rules="required|numeric|length:9"
          name="mobile"
          mode="passive"
          class="register__formColumn"
          tag="div"
        >
          <Input
            v-model="formData.mobile.number"
            :is-valid="validated ? valid : true"
            :placeholder="'Mobile'"
            :name="'mobile'"
          />

          <p
            class="register__fieldError"
            v-if="errors[0]"
          >
            {{ errors[0] }}
          </p>
        </ValidationProvider>
      </div>
    </div>

    <ValidationProvider
      v-slot="{ errors, valid, validated }"
      rules="required"
      name="ifChess"
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
        :name="'ifChess'"
        :placeholder="radio"
      />

      <p
        class="register__fieldError"
        v-if="errors[0]"
      >
        {{ errors[0] }}
      </p>
    </ValidationProvider>

    <div class="register__formField">
      <label class="register__formPlaceholder">
        {{ 'Date of birth' }}
      </label>

      <div class="register__formRow">
        <ValidationProvider
          v-slot="{ errors, valid, validated }"
          rules="required|numeric|date:@month"
          vid="day"
          name="day"
          mode="passive"
          slim
        >
          <Input
            v-model="formData.birth.day"
            :is-valid="validated ? valid : true"
            :full-border="true"
            :hyphen-position="'right'"
            :custom-width="50"
            :placeholder="'01'"
            :name="'day'"
          />
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors, valid, validated }"
          rules="required"
          vid="month"
          name="month"
          mode="passive"
          slim
        >
          <Select
            v-model="formData.birth.month"
            :is-valid="validated ? valid : true"
            :placeholder="getMonthPlaceholder"
            :custom-width="getMonthWidth"
            :full-border="true"
            :is-small="true"
            :list="getMonthList"
          />
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors, valid, validated }"
          rules="required|numeric"
          name="year"
          mode="passive"
          slim
        >
          <Input
            v-model="formData.birth.year"
            :is-valid="validated ? valid : true"
            :full-border="true"
            :hyphen-position="'left'"
            :custom-width="144"
            :placeholder="'1990'"
            :name="'year'"
          />
        </ValidationProvider>

        <p
          class="register__fieldError"
          v-if="dateError"
        >
          {{ 'Date is invalid' }}
        </p>
      </div>
    </div>
  </Fragment>
</template>

<script lang="ts">
import Vue from 'vue';
import { ValidationProvider } from 'vee-validate';
import { Fragment } from 'vue-fragment';

import Input from '@/components/Input.vue';
import Radio from '@/components/Radio.vue';
import Select from '@/components/Select.vue';

export default Vue.extend({
  name: 'StepTwo',
  components: {
    Fragment,
    ValidationProvider,
    Input,
    Radio,
    Select,
  },
  props: {
    formData: {
      type: Object,
    },
  },
  data: () => ({
    windowWidth: window.innerWidth,
    radioButtons: [
      'Yes',
      'No',
    ] as Array<string>,
  }),
  mounted() {
    this.$nextTick(() => {
      window.addEventListener(
        'resize',
        () => {
          this.windowWidth = window.innerWidth;
        },
      );
    });
  },
  computed: {
    getMonthList() {
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];

      return this.windowWidth > 600
        ? months
        : Array.from({ length: 12 }, (_, i) => i + 1);
    },
    getMonthPlaceholder() {
      return this.windowWidth > 600
        ? 'Month'
        : 'M';
    },
    getMonthWidth() {
      return this.windowWidth > 600
        ? undefined
        : 50;
    },
    dateError() {
      if (
        this.$parent.fields === undefined
        || !Object.keys(this.$parent.fields).length
      ) return false;

      const { day, month, year } = this.$parent.errors;

      if (
        !(day && month && year)
        || this.$parent.fields.day.validated === undefined
        || this.$parent.fields.month.validated === undefined
        || this.$parent.fields.year.validated === undefined
      ) return false;

      if (
        day.length === 0
        && month.length === 0
        && year.length === 0
      ) return false;

      return true;
    },
  },
});
</script>
