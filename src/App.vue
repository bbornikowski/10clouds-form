<template>
  <section class="registerForm">
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

        <div class="registerForm__formContent">
          <p class="registerForm__formTitle">
            {{ 'Provide personal information so that we can create a new account for you.' }}
          </p>

          <div class="registerForm__formField">
            <label class="registerForm__formPlaceholder">
              {{ 'Your name' }}
            </label>

            <Input
              v-model="formData.name"
              :placeholder="'Name'"
            />
          </div>

          <div class="registerForm__formField">
            <label class="registerForm__formPlaceholder">
              {{ 'Mobile' }}
            </label>

            <div class="registerForm__formRow">
              <Select
                v-model="formData.mobile.code"
                :list="[
                  '+48 (PL)',
                  '+49 (DE)',
                ]"
              />

              <Input
                v-model="formData.mobile.number"
                :placeholder="'Mobile'"
              />
            </div>
          </div>

          <div class="registerForm__formField">
            <label class="registerForm__formPlaceholder">
              {{ 'Can you play chess' }}
            </label>

            <Radio
              v-model="formData.chess"
              :name="'ifChess'"
              :placeholder="'Yes'"
            />

            <Radio
              v-model="formData.chess"
              :name="'ifChess'"
              :placeholder="'No'"
            />
          </div>

          <div class="registerForm__formField">
            <label class="registerForm__formPlaceholder">
              {{ 'Date of birth' }}
            </label>

            <div class="registerForm__formRow">
              <Input
                v-model="formData.birth.day"
                :full-border="true"
                :use-hyphen="true"
                :hyphen-position="'right'"
                :custom-width="50"
                :placeholder="'01'"
              />

              <Select
                v-model="formData.birth.month"
                :full-border="true"
                :list="[
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
                ]"
              />

              <Input
                v-model="formData.birth.year"
                :full-border="true"
                :hyphen-position="'left'"
                :custom-width="144"
                :placeholder="'1990'"
              />
            </div>
          </div>
        </div>

        <div class="registerForm__formButton">
          <Button>
            {{ 'Continue' }}
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Heading from '@/components/Heading.vue';
import Input from '@/components/Input.vue';
import Radio from '@/components/Radio.vue';
import Select from '@/components/Select.vue';
import Button from '@/components/Button.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Heading,
    Input,
    Radio,
    Select,
    Button,
  },
  data: () => ({
    formData: {
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
    formData: {
      handler(newVal) {
        console.log(newVal);
      },
      deep: true,
    },
  },
});
</script>

<style lang="scss" scoped>

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
    max-width: 728px;
    position: relative;
    width: 100%;
  }

  &__form {
    display: flex;
    width: 100%;
  }

  &__formBanner {
    display: flex;
    max-width: 256px;
    width: 100%;

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
    width: 100%;
  }

  &__formPlaceholder {
    font-size: 11px;
    color: $cDark03;
    line-height: 11px;
    margin-left: 14px;
    width: 100%;
  }

  &__formButton {
    bottom: -25px;
    position: absolute;
    right: 50px;
  }
}

</style>
