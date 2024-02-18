import React, { useContext, useCallback, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  LineText,
  MutedLink,
  SubmitButton,
} from "./common";
import { useImmerReducer } from "use-immer";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { DEFAULT_STATE, FormReducer } from "../../utils/state";
import { validateForm, validateInput } from "../../utils/validation";
import { Context } from "../../App.js";

export function LoginForm(props) {
  const [navItem, setNavItem] = useContext(Context);
  const { switchToSignup } = useContext(AccountContext);
  const [state, dispatch] = useImmerReducer(FormReducer, DEFAULT_STATE);
  const [showLoader, setShowLoader] = useState(false);
  const [authError, setIsAuthError] = useState(false);

  const handleChange = useCallback(
    (name, newValue) => {
      const error = validateInput(name, newValue);
      dispatch({
        key: name,
        payload: { newValue, error },
      });
    },
    [dispatch],
  );

  const submitForm = async (e) => {
    e.preventDefault();
    if (validateForm(state, dispatch)) {
      setShowLoader(true);
      const resp = await fetch("http://localhost:8080/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: state.email.value,
          password: state.password.value,
        }),
      });
      const formResponse = await resp.json();

      if (resp.status !== formResponse.status) {
        alert(formResponse.error);
        setIsAuthError(true);
        setShowLoader(false);
      } else {
        setShowLoader(false);
        setIsAuthError(false);
        const message = JSON.stringify(
          {
            ...formResponse.user,
            message: formResponse.message,
          },
          null,
          2,
        );
        alert(message);
        setNavItem("Campaigns");
      }
    }
  };

  return (
    <BoxContainer>
      {showLoader && <div className="loading">SUBMITTING....</div>}
      {authError && <div>Email or Password is Wrong!</div>}
      <FormContainer>
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
        )}
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={submitForm}>
        Signin
      </SubmitButton>
      <Marginer direction="vertical" margin="5px" />
      <LineText>
        Don't have an accoun?{" "}
        <BoldLink onClick={switchToSignup} href="#">
          Signup
        </BoldLink>
      </LineText>
    </BoxContainer>
  );
}
