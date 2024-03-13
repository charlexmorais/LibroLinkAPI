import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./pages/Login/Dashboard";

export default () => {
  return (
    <Switch>
      <Route patch="usuario">Usuario</Route>
      <Route patch="/cadastro">Cadastro</Route>
      <Route patch="/buscar">Buscar</Route>
      <Route patch="/atualizar">Atualizar</Route>
      <Route patch="/deletar">Deletar</Route>

      <Route patch="/login">
        <Login />
      </Route>

      <Route exact patch="/Dashboard">
        Dashboard
      </Route>
      <Route exact patch="/cadastro">
        Cadastro
      </Route>
      <Route exact patch="/buscar">
        Buscar
      </Route>
      <Route exact patch="/atualizar">
        Atualizar
      </Route>
      <Route exact patch="/deletar">
        Deletar
      </Route>
    </Switch>
  );
};
