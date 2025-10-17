import React, { useEffect } from "react";
import "./index.css";
import Header from "./Header";
import axios from "axios";

import { Outlet } from "react-router-dom";

export default function Layout() {
  useEffect(() => {
    async function getProfile() {
      const profileUrl = `${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/${process.env.REACT_APP_API_VERSION}/profile`;

      try {
        const response = await axios({
          url: profileUrl,
          method: "GET",
          withCredentials: true,
        });

        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    getProfile();
  }, []);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
