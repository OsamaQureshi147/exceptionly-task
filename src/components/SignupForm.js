import React from "react";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import { Formik } from "formik";
import { useLinkedIn } from "react-linkedin-login-oauth2";
import { GoogleIcon, LinkedInIcon, MicrosoftIcon } from "../assets";
import {
  signUpSchema,
  handleGooglSignIn,
  handleMicrosoftSignIn,
} from "../helpers";
import "./Forms.css";

const useHelperTextStyles = makeStyles(() => ({
  root: {
    color: "red",
    position: "absolute",
    top: "44px",
  },
}));

const signUpStyles = {
  "&.MuiButton-root": {
    backgroundColor: "#4285F4",
    color: "white",
    width: "100%",
    margin: "5px 0px",
  },
};

const iconStyles = {
  "&.MuiButton-root": {
    padding: "9px",
    minWidth: "0",
    margin: "0 9px",
  },
};
export const SignupForm = () => {
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
    <div>
      <Formik
        validationSchema={signUpSchema}
        initialValues={{
          name: "",
          lastName: "",
          email: "",
          password: "",
          retypeEmail: "",
          retypePassword: "",
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
              label="Name"
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              error={errors.name && touched.name}
              variant="standard"
              required
              helperText={errors.name && touched.name ? errors.name : null}
              FormHelperTextProps={{
                classes: {
                  root: helperTextStyles.root,
                },
              }}
            />
            <TextField
              label="Last Name"
              type="text"
              name="lastName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
              error={errors.lastName && touched.lastName}
              variant="standard"
              required
              style={{ marginTop: 20 }}
              helperText={
                errors.lastName && touched.lastName ? errors.lastName : null
              }
              FormHelperTextProps={{
                classes: {
                  root: helperTextStyles.root,
                },
              }}
            />
            <TextField
              label="Email"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={errors.email && touched.email}
              variant="standard"
              required
              helperText={errors.email && touched.email ? errors.email : null}
              style={{ marginTop: 20 }}
              FormHelperTextProps={{
                classes: {
                  root: helperTextStyles.root,
                },
              }}
            />
            <TextField
              label="Retype Email"
              type="email"
              name="confirmEmail"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmEmail}
              error={errors.confirmEmail && touched.confirmEmail}
              variant="standard"
              required
              helperText={
                errors.confirmEmail && touched.confirmEmail
                  ? errors.confirmEmail
                  : null
              }
              style={{ marginTop: 20 }}
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
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              error={errors.password && touched.password}
              variant="standard"
              helperText={
                errors.password && touched.password ? errors.password : null
              }
              required
              style={{ marginTop: 20 }}
              FormHelperTextProps={{
                classes: {
                  root: helperTextStyles.root,
                },
              }}
            />
            <TextField
              label="Retype Password"
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
              error={errors.confirmPassword && touched.confirmPassword}
              variant="standard"
              helperText={
                errors.confirmPassword && touched.confirmPassword
                  ? errors.confirmPassword
                  : null
              }
              style={{ marginTop: 20 }}
              required
              FormHelperTextProps={{
                classes: {
                  root: helperTextStyles.root,
                },
              }}
            />

            <Button
              onClick={handleSubmit}
              sx={signUpStyles}
              style={{ marginTop: 35 }}
            >
              Sign Up
            </Button>
          </div>
        )}
      </Formik>
      <p className="signup-text">OR SIGN UP USING</p>
      <div className="icons-container">
        <Button
          sx={iconStyles}
          onClick={handleGooglSignIn}
          style={{ backgroundColor: "#4285F4" }}
          className="icon-button"
        >
          <GoogleIcon />
        </Button>
        <Button
          sx={iconStyles}
          onClick={linkedInLogin}
          style={{ backgroundColor: "#2867B2" }}
          className="icon-button"
        >
          <LinkedInIcon />
        </Button>
        <Button
          sx={iconStyles}
          onClick={handleMicrosoftSignIn}
          style={{ backgroundColor: "#F25022" }}
          className="icon-button"
        >
          <MicrosoftIcon />
        </Button>
      </div>
    </div>
  );
};
