import React from "react";
import Button from "@mui/material/Button";
import "./Forms.css";

export const FormToggler = ({ isSigninForm, toggleSetter }) => {
  return (
    <div style={{ display: "flex" }}>
      <p>
        {isSigninForm ? "Don't have an account?" : "Already have an account?"}
      </p>
      <Button className="button" onClick={() => toggleSetter(!isSigninForm)}>
        {isSigninForm ? "Create An Account" : "Sign In Here"}
      </Button>
    </div>
  );
};
