import { AppBar, Toolbar, styled, Link } from "@mui/material";
import React from "react";

const Component = styled(AppBar)`
  background: #ffffff;
  color: #000;
`;

const Container = styled(Toolbar)`
  justify-content: center;
  & > a {
    padding: 10px;
    color: #000;
    text-decoration: none;
  }
`;

const Header = () => {
  return (
    <Component position="static">
      <Container>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/login">Logout</Link>
      </Container>
    </Component>
  );
};

export default Header;
