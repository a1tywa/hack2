import React from "react";
import Navbar from "../Components/common/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container/Container";

const BaseLayout = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default BaseLayout;
