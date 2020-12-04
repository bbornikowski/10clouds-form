<template>
  <ValidationObserver
    v-slot="{ handleSubmit }"
    tag="section"
    ref="observer"
    class="registerForm"
  >
    <div class="registerForm__formWrapper">
      <div class="registerForm__heading">
        <Heading>
          {{ 'Your account' }}
        </Heading>
      </div>

      <div class="registerForm__form">
        <div class="registerForm__formBanner">
          <img
            src="images/banner.jpg"
            alt="banner"
          >
        </div>

        <form
          class="registerForm__formContent"
          @submit.prevent="handleSubmit(onSubmit)"
        >
          <StepTwo
            v-if="currentStep === 2"
            :formData="stepTwo"
          >
            {{ 'Provide personal information so that we can create a new account for you.' }}
          </StepTwo>

          <div class="registerForm__formButton">
            <Button>
              {{ 'Continue' }}
            </Button>
          </div>
        </form>
      </div>
    </div>
  </ValidationObserver>
</template>

<script lang="ts">
import Vue from 'vue';
import { ValidationObserver } from 'vee-validate';

import Heading from '@/components/Heading.vue';
import StepTwo from '@/sections/form/Step2.vue';
import Button from '@/components/Button.vue';

export default Vue.extend({
  name: 'App',
  components: {
    ValidationObserver,
    Heading,
    StepTwo,
    Button,
  },
  data: () => ({
    currentStep: 2,
    stepTwo: {
      name: undefined,
      chess: undefined,
      mobile: {
        code: '+48 (PL)',
        number: undefined,
      },
      birth: {
        day: undefined,
        month: 'January',
        year: undefined,
      },
    },
  }),
  watch: {
    stepTwo: {
      handler(newVal) {
        // console.log(this.$refs.observer.errors.day);
        // console.log(this.$refs.observer.errors.month);
        // console.log(this.$refs.observer.errors.year);
      },
      deep: true,
    },
  },
  methods: {
    onSubmit() {
      // console.log('submit');
    },
  },
});
</script>

<style lang="scss">

.registerForm {
  align-items: center;
  background-color: $cDark02;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100%;

  &::before {
    background-image: url('/images/background.svg');
    background-repeat: no-repeat;
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  &__heading {
    width: 100%;
    margin-left: auto;
    max-width: 472px;
    padding-left: 50px;
  }

  &__formWrapper {
    max-width: 778px;
    position: relative;
    width: 100%;
  }

  &__form {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  &__formBanner {
    display: flex;
    max-width: 256px;
    width: 100%;

    @include rwd('tablet') {
      display: none;
    }

    img {
      height: 100%;
      object-fit: cover;
      width: 100%;
    }
  }

  &__formContent {
    background-color: $cWhite;
    margin-right: 50px;
    max-width: 522px;
    flex-grow: 1;
    padding: 40px 50px 67px;
    position: relative;

    &::before {
      background-color: $cGreen01;
      content: '';
      height: 2px;
      left: 50px;
      position: absolute;
      top: -1px;
      width: 70px;
    }
  }

  &__formTitle {
    color: $cDark01;
    font-size: 14px;
    letter-spacing: .3px;
    line-height: 24px;
    padding-bottom: 48px;
    padding-right: 50px;
  }

  &__formField {
    display: flex;
    flex-wrap: wrap;
    padding: 12px 0 13px;
    position: relative;
  }

  &__formRow {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  &__formColumn {
    & + & {
      flex-grow: 1;
      margin-left: 20px;
    }
  }

  &__formPlaceholder {
    font-size: 11px;
    color: $cDark03;
    line-height: 11px;
    margin-left: 14px;
    width: 100%;
  }

  &__fieldError {
    color: $cRed01;
    font-size: 11px;
    font-weight: 400;
    line-height: 11px;
    margin-top: 5px;
    padding: 0 14px;
    width: 100%;
  }

  &__formButton {
    bottom: -25px;
    position: absolute;
    right: 0;
  }
}

</style>
