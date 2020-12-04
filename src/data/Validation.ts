import { extend } from 'vee-validate';
import {
  required, email, min, length, confirmed, numeric,
} from 'vee-validate/dist/rules';

extend('min', {
  ...min,
});

extend('length', {
  ...length,
});

extend('numeric', {
  ...numeric,
});

extend('email', {
  ...email,
  message: 'Invalid data',
});

extend('required', {
  ...required,
  message: 'Invalid data',
});

extend('confirmed', {
  ...confirmed,
});

extend('date', {
  params: ['target'],
  message: () => 'Date is invalid',
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
