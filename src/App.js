import React from "react";
import "./index.css";
import Header from "./Header";
import Post from "./Post";
import SignIn from "./Signin";
import SignUp from "./Signup";
import Grid from "@mui/material/Grid";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        index
        element={
          <>
            <Header />
            <Grid container spacing={1} style={{ paddingTop: 50 + "px" }}>
              <Post single={false} />
              <Post single={false} />
              <Post single={false} />
              <Post single={false} />
              <Post single={false} />
              <Post single={false} />
              <Post single={false} />
            </Grid>
          </>
        }
      />
      <Route
        path="post"
        element={
          <>
            <Header />
            <Grid container spacing={1} style={{ paddingTop: 50 + "px" }}>
              <Post single={true} />
            </Grid>
          </>
        }
      />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
