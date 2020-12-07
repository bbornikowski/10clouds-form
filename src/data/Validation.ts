import { extend } from 'vee-validate';
import {
  required, email, min, length, confirmed, numeric,
} from 'vee-validate/dist/rules';

extend('min', {
  ...min,
  message: 'Invalid length',
});

extend('length', {
  ...length,
  message: 'Invalid length',
});

extend('numeric', {
  ...numeric,
  message: 'This field can only contain digits',
});

extend('email', {
  ...email,
  message: 'Email is invalid',
});

extend('required', {
  ...required,
  message: 'Invalid data',
});

extend('confirmed', {
  ...confirmed,
});

extend('year', {
  message: () => 'Year is invalid',
  validate(value: string) {
    const year = parseInt(value, 10);

    if (
      year >= 1920
      && year <= 2020
    ) return true;

    return false;
  },
});

extend('check18', {
  params: ['day', 'month'],
  message: () => 'You need to be 18 years old',
  validate(year: string, { day, month }) {
    const birthday = new Date(`${month} ${day}, ${year}`);
    const birthdayMonth = birthday.getMonth();
    const is18 = new Date(parseInt(year, 10) + 18, birthdayMonth, day) <= new Date();

    return is18;
  },
});

extend('date', {
  params: ['target'],
  message: () => 'Date is invalid.',
  validate(value: string, { target }: Record<string, string>) {
    const day = parseInt(value, 10);

    if (day > 31) return false;

    switch (target) {
      case 'April':
      case 'June':
      case 'September':
      case 'November':
        if (day > 30) {
          return false;
        }

        break;
      case 'February':
        if (day > 29) {
          return false;
        }

        break;
      default:
        return true;
    }

    return true;
  },
});
