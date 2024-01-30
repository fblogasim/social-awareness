const VALIDATION_FUNCTIONS = {
  required(val, errMsg) {
    return !!val ? null : errMsg;
  },
  pattern(pattern, val, errMsg) {
    return val && (pattern.test(val) ? null : errMsg);
  },
};

const VALIDATION_LIST = {
  email: {
    required: (val) =>
      VALIDATION_FUNCTIONS.required(val, "Email cannot be empty!"),

    pattern: (val) =>
      VALIDATION_FUNCTIONS.pattern(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        val,
        "Please enter a valid Email Id"
      ),
  },
  password: {
    required: (val) =>
      VALIDATION_FUNCTIONS.required(val, "Password cannot be empty"),
    pattern: (val) =>
      VALIDATION_FUNCTIONS.pattern(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        val,
        "Password must be at least 8 characters long and contain at least 1 number"
      ),
  },
  confirmPassword: {
    pattern: (val) =>
      VALIDATION_FUNCTIONS.pattern(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        val,
        "Passwords do not match"
      ),
  },
};

export function validateInput(inputName, val) {
  const validations = VALIDATION_LIST[inputName];

  if (validations) {
    for (const rule of Object.values(validations)) {
      const isInvalid = rule(val);
      if (isInvalid) {
        return isInvalid;
      }
    }
  }
  return null;
}

export function validateForm(state, dispatch) {
  let isFormValid = true;

  for (const key in state) {
    const value = state[key].value;
    const validaitons = VALIDATION_LIST[key];
    if (validaitons) {
      const error = validateInput(key, value);
      if (error) {
        isFormValid = false;

        dispatch({
          key,
          payload: { newValue: value, error },
        });
      }
    }
  }

  return isFormValid;
}
