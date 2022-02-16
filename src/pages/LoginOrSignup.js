import React, { useState } from "react";
import Card from "@mui/material/Card";
import "./LoginOrSignup.css";
import { LoginForm, SignupForm, FormToggler } from "../components";

export const LoginOrSignUp = () => {
  const [toggleSigninSignup, setToggleSigninSignup] = useState(true);

  return (
    <Card
      sx={{
        width: "60vw",
        display: "flex",
      }}
    >
      <div className="card-left">
        <img
          src={require("../assets/dot-logo.png")}
          alt="Dot Logo"
          className="dot-image"
        />
        <p>WELCOME TO THE MARKETPLACE</p>
        <p style={{ fontSize: "13px" }}>
          Exceptionly provides hands-on tested remote software engineers unlike
          any other outsourcing company. Our product delivers talent directly
          for hiring without a lifetime markup over 400%.
        </p>
      </div>

      <div className="card-right">
        <div className="form-container">
          <img
            src={require("../assets/exceptionly-logo.png")}
            fill="red"
            alt="Exceptionly"
          />
          <p>Sign {toggleSigninSignup ? "in" : "up"} to your account</p>
          {toggleSigninSignup ? <LoginForm /> : <SignupForm />}
        </div>
        <div className="card-right-bottom">
          <FormToggler
            isSigninForm={toggleSigninSignup}
            toggleSetter={setToggleSigninSignup}
          />
        </div>
      </div>
    </Card>
  );
};
