import React, { useState } from "react";
import { AppProvider } from "@toolpad/core/AppProvider";
import { SignInPage } from "@toolpad/core/SignInPage";

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
      email: "",
      password: "",
    };
  };

  const [formValues, setFormValues] = useState(defaultState());

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues({ ...formValues, [name]: value });
  };

  async function handleSubmit(event) {
    // event.preventDefault();
    const url = "http://localhost:4000/register";

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error.message);
    }
  }

  const [email, setEmail] = useState("");

  return (
    // preview-start

    <AppProvider>
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
            name: "email",
            value: formValues.email,
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

    // preview-end
  );
}
