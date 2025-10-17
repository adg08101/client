import React, { useState } from "react";
import { AppProvider } from "@toolpad/core/AppProvider";
import { SignInPage } from "@toolpad/core/SignInPage";
import axios from "axios";
import AlertComponent from "../components/Alert";
import { useNavigate } from "react-router-dom";

// import { createTheme } from "@mui/material/styles";
// import { useColorSchemeShim } from "docs/src/modules/components/ThemeContext";
// import { getDesignTokens, inputsCustomizations } from "./customTheme";

function providers(signup) {
  return signup
    ? [{ id: "credentials", name: "Email and Password" }]
    : [
        { id: "github", name: "GitHub" },
        { id: "google", name: "Google" },
        { id: "credentials", name: "Email and Password" },
      ];
}

export default function AuthIn({ signup = false }) {
  // const { mode, systemMode } = useColorSchemeShim();
  // const calculatedMode = (mode === "system" ? systemMode : mode) ?? "light";
  // const calculatedMode = "light";
  // const brandingDesignTokens = getDesignTokens(calculatedMode);
  // preview-start
  /* const THEME = createTheme({
    ...brandingDesignTokens,
    palette: {
      ...brandingDesignTokens.palette,
      mode: calculatedMode,
    },
    components: {
      ...inputsCustomizations,
    },
  }); */
  // preview-end

  const defaultState = () => {
    return {
      username: "",
      password: "",
    };
  };

  const [formValues, setFormValues] = useState(defaultState());
  const [status, setStatus] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [display, setDisplay] = useState("none");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleRedirect = () => {
    signup ? navigate("/login") : navigate("/");

    // Redirects to '/new-path'
    // navigate(-1); // Go back one step in history
    // navigate('/another-path', { replace: true }); // Replaces the current entry in history
  };

  async function handleReset() {
    setStatus("");
    setStatusMessage("");
    setDisplay("none");
    handleRedirect();
  }

  async function handleSubmit() {
    const registerUrl = `${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/${process.env.REACT_APP_API_VERSION}/register`;
    const loginUrl = `${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/${process.env.REACT_APP_API_VERSION}/login`;

    try {
      const response = signup
        ? await axios({
            url: registerUrl,
            method: "POST",
            data: formValues,
            withCredentials: true,
          })
        : await axios({
            url: loginUrl,
            method: "POST",
            data: formValues,
            withCredentials: true,
          });

      setStatus("success");
      setStatusMessage(response.data.message);
      setDisplay("flex");

      setFormValues(defaultState());

      setTimeout(() => {
        handleReset();
      }, 3000);
    } catch (error) {
      setStatus("error");
      setStatusMessage(error.message);
      setDisplay("flex");
    }
  }

  return (
    // preview-start
    <>
      <AppProvider>
        <AlertComponent
          display={display}
          message={statusMessage}
          severity={status}
        />
        <SignInPage
          signIn={handleSubmit}
          providers={providers(signup)}
          slotProps={{
            form: { noValidate: true },
            submitButton: {
              color: "primary",
              variant: "contained",
            },
            emailField: {
              name: "username",
              value: formValues.username,
              onChange: handleChange,
            },
            passwordField: {
              name: "password",
              value: formValues.password,
              onChange: handleChange,
            },
          }}
          sx={{
            "& form > .MuiStack-root": {
              marginTop: "2rem",
              rowGap: "0.5rem",
            },
          }}
        />
      </AppProvider>
    </>
    // preview-end
  );
}
