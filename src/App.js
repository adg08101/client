import React from "react";
import "./index.css";
import Post from "./Post";
import SignIn from "./Signin";
import Layout from "./Layout";
import Grid from "@mui/material/Grid";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <>
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
              <Grid container spacing={1} style={{ paddingTop: 50 + "px" }}>
                <Post single={true} />
              </Grid>
            </>
          }
        />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
