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
          <StepOne
            v-if="currentStep === 0"
            :formData="stepOne"
          >
            {{ 'First step' }}
          </StepOne>

          <StepTwo
            v-else-if="currentStep === 1"
            :formData="stepTwo"
          >
            {{ 'Provide personal information so that we can create a new account for you.' }}
          </StepTwo>

          <StepThree
            v-else-if="currentStep === 2"
            :formData="stepThree"
          >
            {{ 'Third step' }}
          </StepThree>

          <div class="registerForm__formButton">
            <Button @click="nextStep(currentStep + 1)">
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
import StepOne from '@/sections/form/Step1.vue';
import StepTwo from '@/sections/form/Step2.vue';
import StepThree from '@/sections/form/Step3.vue';
import Button from '@/components/Button.vue';

import FormStepTwo from '@/interfaces/StepTwo';

export default Vue.extend({
  name: 'App',
  components: {
    ValidationObserver,
    Heading,
    StepOne,
    StepTwo,
    StepThree,
    Button,
  },
  data: () => ({
    stepsList: [
      'Step One',
      'Personal',
      'Step Three',
    ] as Array<string>,
    currentStep: 0 as number,
    stepOne: {
      chess: undefined,
    } as Record<string, string>,
    stepTwo: {
      name: undefined,
      chess: undefined,
      mobile: {
        code: undefined,
        number: undefined,
      },
      birth: {
        day: undefined,
        month: undefined,
        year: undefined,
      },
    } as FormStepTwo,
    stepThree: {
      name: undefined,
    } as Record<string, string>,
  }),
  methods: {
    async nextStep(step) {
      await this.$refs.observer.validate().then((isValid) => {
        if (isValid) {
          if (step > 2) {
            this.onSubmit();
          } else {
            this.currentStep += 1;
          }
        }
      });
    },
    onSubmit() {
      console.log('sendData');
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

    @include rwd('tablet') {
      background-size: 150% 150%;
      background-position: 70% 65%;
    }

    @include rwd('small-tablet') {
      background-position: 70% 100%;
    }

    @include rwd('large-phone') {
      background-position: 70% 130%;
    }
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
