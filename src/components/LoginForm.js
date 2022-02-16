import React from "react";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { Formik } from "formik";
import { useLinkedIn } from "react-linkedin-login-oauth2";
import {
  loginSchema,
  handleGooglSignIn,
  handleMicrosoftSignIn,
} from "../helpers";
import { MicrosoftIcon, GoogleIcon, LinkedInIcon } from "../assets";
import "./Forms.css";

const useHelperTextStyles = makeStyles(() => ({
  root: {
    color: "red",
    fontSize: "12px",
    position: "absolute",
    top: "44px",
  },
}));

const buttonStyles = {
  signinButton: {
    "&.MuiButton-root": {
      backgroundColor: "#4285F4",
      color: "white",
      width: "100%",
      margin: "5px 0px",
    },
  },
  linkedinButton: {
    "&.MuiButton-root": {
      backgroundColor: "#2867B2",
      color: "white",
      width: "100%",
      margin: "5px 0px",
    },
  },
  microsoftButton: {
    "&.MuiButton-root": {
      backgroundColor: "#F25022",
      color: "white",
      width: "100%",
      margin: "5px 0px",
    },
  },
};

export const LoginForm = () => {
  const helperTextStyles = useHelperTextStyles();
  const { linkedInLogin } = useLinkedIn({
    clientId: "775gpy5maqahrd",
    redirectUri: `${window.location.origin}/linkedin`,
    onSuccess: (code) => {
      console.log(code);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return (
    <>
      <Formik
        validateOnBlur
        validationSchema={loginSchema}
        initialValues={{
          email: "",
          password: "",
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          errors,
        }) => (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TextField
              label="Email"
              type="email"
              name="email"
              error={errors.email && touched.email}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              variant="standard"
              helperText={errors.email && touched.email ? errors.email : null}
              FormHelperTextProps={{
                classes: {
                  root: helperTextStyles.root,
                },
              }}
            />
            <TextField
              label="Password"
              type="password"
              name="password"
              error={errors.password && touched.password}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              variant="standard"
              helperText={
                errors.password && touched.password ? errors.password : null
              }
              style={{ margin: "20px 0" }}
              FormHelperTextProps={{
                classes: {
                  root: helperTextStyles.root,
                },
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "13px",
                marginTop: "5px",
              }}
            >
              <div style={{ display: "flex" }}>
                <Checkbox />
                <p>Remember Me</p>
              </div>
              <p style={{ color: "#4285f4", cursor: "pointer" }}>
                Forgot Password?
              </p>
            </div>
            <Button sx={buttonStyles.signinButton} onClick={handleSubmit}>
              Sign In
            </Button>
          </div>
        )}
      </Formik>
      <p>OR</p>
      <Button
        sx={buttonStyles.signinButton}
        startIcon={<GoogleIcon className="icon" />}
        onClick={handleGooglSignIn}
      >
        SIGN IN WITH GOOGLE
      </Button>
      <Button
        sx={buttonStyles.linkedinButton}
        startIcon={<LinkedInIcon className="icon" />}
        onClick={linkedInLogin}
      >
        SIGN IN WITH LINKEDIN
      </Button>
      <Button
        sx={buttonStyles.microsoftButton}
        startIcon={<MicrosoftIcon className="icon" />}
        onClick={handleMicrosoftSignIn}
      >
        SIGN IN WITH MICROSOFT
      </Button>
    </>
  );
};
