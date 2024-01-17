import React from "react";
import { Link } from "react-router-dom";
import Input from "../Forms/Input";
import Button from './../Forms/Button';

const LoginForm = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(event){
    event.preventDefault();
    fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({username, password})
    })
    .then(response => response.json())
    .then(json => {
      console.log(json)
    })
  }

  return (
  <section>
    <h1>Login</h1>
    <form action="" onSubmit={handleSubmit}>
      <Input name="username" label="Usuário" type="text"  value={username} onChange={({target})=> setUsername(target.value)}/>
      <Input name="password" label="Senha" type="password"  value={username} onChange={({target})=> setUsername(target.value)}/>
      <Button>Entrar</Button>
    </form>
    <Link to="/login/criar">Cadastro</Link>
  </section>
  );
};

export default LoginForm;
