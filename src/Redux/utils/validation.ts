export const validationRules = {
  passwordSignIn: {
    required: 'Please input your password!',
    pattern: {
      value: /^[a-zA-Z0-9_-]{5,15}$/,
      message:
        'Digits and alphabetics (capital and low case) only are allowed. Minimum – 5 symbols. Maximum – 15 symbols.'
    }
  },
  fullName: {
    required: 'Please input your full name!',
    pattern: {
      // eslint-disable-next-line no-useless-escape
      value: /^([a-zA-Z\-]{1,160})+([-]?[a-zA-Z\-]{1,160})*$/gm,
      message: 'Alphabetics (Latin) only are allowed (both capital and low case).'
    }
  }
};
