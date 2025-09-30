import React from "react";
import "./index.css";
import Header from "./Header";
import Post from "./Post";
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
    </Routes>
  );
}

export default App;
