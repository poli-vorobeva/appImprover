import React, { useState } from "react";
import styled from "styled-components";
import bgForm from "../../public/images/sunset.jpg";
import AuthForm from "../components/AuthForm";
import ChangeForm from "../components/ChangeForm";

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  background-color: gray;
`;

const ContainerStyled = styled.div`
  background: url(${bgForm}) 0 0 / cover;
  width: 700px;
  height: 450px;
  position: relative;
`;

const signin = {
  title: "Sign In",
  nameButton: "Login",
  changeTitle: "Create account",
  changeButtonName: "sign up",
};

const signup = {
  title: "Sign Up",
  nameButton: "Register",
  changeTitle: "Have an account?",
  changeButtonName: "sign in",
};

const Auth = () => {
  const [mode, setMode] = useState("signin");
  const handleChangeButton = () => {
    mode === "signin" ? setMode("signup") : setMode("signin");
  };
  const prop = mode === "signin" ? signin : signup;

  return (
    <Overlay>
      <ContainerStyled>
        <AuthForm mode={mode} title={prop.title} buttonName={prop.nameButton} />
        <ChangeForm
          mode={mode}
          buttonTitle={prop.changeButtonName}
          handleSubmit={handleChangeButton}
          title={prop.changeTitle}
        />
      </ContainerStyled>
    </Overlay>
  );
};

export default Auth;