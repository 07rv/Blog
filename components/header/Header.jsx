import { AppBar, Toolbar, Typography, styled } from "@mui/material";
import React from "react";

const Component = styled(AppBar)`
  background: #ffffff;
  color: #000;
`;

const Container = styled(Toolbar)`
  justify-content: center;
  & > p {
    padding: 10px;
  }
`;

const Header = () => {
  return (
    <Component position="static">
      <Container>
        <Typography>Home</Typography>
        <Typography>About</Typography>
        <Typography>Contact</Typography>
        <Typography>Logout</Typography>
      </Container>
    </Component>
  );
};

export default Header;
