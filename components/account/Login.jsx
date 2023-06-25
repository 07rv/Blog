import React, { useState } from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import { Box } from "@mui/material";

const Login = () => {
  const [toggle, setToggle] = useState("login");

  const toggleButton = (toggleState) => {
    setToggle(toggleState);
  };
  return (
    <Box>
      {toggle === "login" ? (
        <Signin toggleButton={toggleButton} />
      ) : (
        <Signup toggleButton={toggleButton} />
      )}
    </Box>
  );
};

export default Login;
