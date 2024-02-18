import React, { useContext, useState, useCallback } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  LineText,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { useImmerReducer } from "use-immer";
import { DEFAULT_STATE, FormReducer } from "../../utils/state";
import { validateForm, validateInput } from "../../utils/validation";
import { Context } from "../../App.js";

export function SignupForm(props) {
  const [navItem, setNavItem] = useContext(Context);
  const { switchToSignin } = useContext(AccountContext);
  const [state, dispatch] = useImmerReducer(FormReducer, DEFAULT_STATE);
  const [showLoader, setShowLoader] = useState(false);
  const [signUpError, setIsSignupError] = useState(false);

  const handleChange = useCallback(
    (name, newValue) => {
      const error = validateInput(name, newValue);
      dispatch({
        key: name,
        payload: { newValue, error },
      });
    },
    [dispatch]
  );

  const submitForm = async (e) => {
    e.preventDefault();
    if (validateForm(state, dispatch)) {
      console.log("== form is valid ==");
      setShowLoader(true);
      const resp = await fetch("http://localhost:8080/signup/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: state.fullName.value,
          email: state.email.value,
          password: state.password.value,
        }),
      });
      const formResponse = await resp.json();
      console.log(formResponse);
      if (resp.status !== formResponse.status) {
        alert(formResponse.error);
        setIsSignupError(true);
        setShowLoader(false);
      } else {
        setShowLoader(false);
        setIsSignupError(false);
        alert(
          JSON.stringify(
            {
              name: state.fullName.value,
              email: state.email.value,
              message: formResponse.message,
            },
            null,
            2
          )
        );
	setNavItem("Campaigns");
      }
    }
  };

  return (
    <BoxContainer>
      {showLoader && <div className="loading">SUBMITTING....</div>}
      {signUpError && <div>Problem with signing up the user!</div>}
      <FormContainer>
        <Input
          type="text"
          placeholder="Full name"
          value={state.fullName.value}
          onChange={(e) => handleChange("fullName", e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          value={state.email.value}
          onChange={(e) => handleChange("email", e.target.value)}
        />
        {!!state.email.error && <span> {state.email.error}</span>}
        <Input
          type="password"
          placeholder="Password"
          value={state.password.value}
          onChange={(e) => handleChange("password", e.target.value)}
        />
        {!!state.password.error && (
          <span className={{ textColor: "red" }}> {state.password.error}</span>
        )}{" "}
        <Input
          type="password"
          placeholder="Confirm password"
          value={state.confirmPassword.value}
          onChange={(e) => handleChange("confirmPassword", e.target.value)}
        />
        {!!state.confirmPassword.error && (
          <span className={{ textColor: "red" }}>
            {" "}
            {state.confirmPassword.error}
          </span>
        )}{" "}
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={submitForm}>
        Signup
      </SubmitButton>
      <Marginer direction="vertical" margin="5px" />
      <LineText>
        Already have an account?{" "}
        <BoldLink onClick={switchToSignin} href="#">
          Signin
        </BoldLink>
      </LineText>
    </BoxContainer>
  );
}
