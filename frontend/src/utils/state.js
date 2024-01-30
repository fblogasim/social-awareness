export const DEFAULT_STATE = {
  fullName: {
    value: "",
    error: null,
  },
  email: {
    value: "",
    error: null,
  },
  password: {
    value: "",
    error: null,
  },
  confirmPassword: {
    value: "",
    error: null,
  },
};

export const FormReducer = (state, { key, payload }) => {
  switch (key) {
    case "fullName":
      state.fullName.value = payload.newValue;
      state.fullName.error = payload.error;
      return;
    case "email":
      state.email.value = payload.newValue;
      state.email.error = payload.error;
      return;
    case "password":
      state.password.value = payload.newValue;
      state.password.error = payload.error;
      return;
    case "confirmPassword":
      state.confirmPassword.value = payload.newValue;
      state.confirmPassword.error = payload.error;
      return;
    default:
      throw new Error(`No reducer available for key = ${key}`);
  }
};
