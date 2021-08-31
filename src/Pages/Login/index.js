import React from "react";
import { Style } from "./style";
import { Link } from "react-router-dom";

export const Login = () => {

  return (
    <Style>
      <form>
        <h1>Login</h1>
        <input
          id="user"
          type="text"
          name="usuario"
          placeholder="Email"
        />
        <br />
        <input
          id="password"
          type="password"
          name="senha"
          placeholder="Senha"
        />
        <br />
        <button>Login</button>
        <Link to="/cadastro">Não tem uma conta? Cadastre-se</Link>
      </form>
    </Style>
  );
};
