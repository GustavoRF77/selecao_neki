import React from "react";
import { Container, NavLink, Button } from "./style";

export const Home = () => {
  return (
    <Container>
      <Button>
        <NavLink to="Login">Login</NavLink>
      </Button>
      <Button>
        <NavLink to="SignUp">Cadastre-se</NavLink>
      </Button>
    </Container>
  );
};
