interface FormStepTwo {
  name: string;
  chess: string;
  mobile: {
    code: string;
    number: string;
  };
  birth: {
    day: string,
    month: string
    year: string,
  },
}

export default FormStepTwo;
