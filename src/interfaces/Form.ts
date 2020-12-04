interface IStepOne {
  chess: string;
}

interface IStepTwo {
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

interface IStepThree {
  name: string;
}

export {
  IStepOne,
  IStepTwo,
  IStepThree,
};
