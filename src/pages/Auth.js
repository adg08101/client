import React, { useState } from "react";
import { AppProvider } from "@toolpad/core/AppProvider";
import { SignInPage } from "@toolpad/core/SignInPage";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

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

const signIn = async (provider) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Sign in with ${provider.id}`);
      resolve({ error: "This is a mock error message." });
    }, 500);
  });
  return promise;
};

const title = (
  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    Title
  </Typography>
);

const subTitle = (
  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    Subtitle
  </Typography>
);

const emailFieldComponent = (
  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
);

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
    const { type, name, value, checked } = event.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const [email, setEmail] = useState("");

  return (
    // preview-start

    <AppProvider>
      <SignInPage
        signIn={signIn}
        providers={providers(signup)}
        slotProps={{
          form: { noValidate: true },
          submitButton: {
            color: "primary",
            variant: "contained",
          },
          emailField: {
            emailFieldComponent,
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
          title: {
            value: "none",
          },
        }}
        slot={{
          title: { title },
          subtitle: { subTitle },
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
