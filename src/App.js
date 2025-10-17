import React from "react";
import "./index.css";
import Post from "./pages/Post";
import AuthIn from "./pages/Auth";
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
        <Route path="login" element={<AuthIn signup={false} />} />
        <Route path="register" element={<AuthIn signup={true} />} />
      </Route>
    </Routes>
  );
}

export default App;
