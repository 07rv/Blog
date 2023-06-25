import React, { useState } from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import { Box } from "@mui/material";

const Login = () => {
  const [toggle, setToggle] = useState("SignIn");

  return (
    <Box>
      {toggle === "SignIn" ? (
        <Signin setToggle={setToggle} />
      ) : (
        <Signup setToggle={setToggle} />
      )}
    </Box>
  );
};

export default Login;
