import React from "react";
import { Link } from "react-router-dom";
import Input from "../Forms/Input";
import Button from "./../Forms/Button";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";
import styles from "./LoginForm.module.css";
import stylesBtn from "../Forms/Button.module.css";
import Error from "../Helper/Error";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <>
    <section className="animeLeft container">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input name="username" label="Usuário" type="text" {...username} />
        <Input name="password" label="Senha" type="password" {...password} />

        {loading ? (
          <Button disabled>Carregando ...</Button>
        ) : (
          <Button>ENTRAR</Button>
        )}

        <Error error={error} /> 
      </form>
      <Link className={styles.perdeu} to="/login/perder">
        Perdeu a senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastra-se</h2>
        <p>Ainda não possui conta? Cadastra-se no site.</p>
        <Link className={stylesBtn.button} to="/login/criar">CADASTRO</Link>
      </div>
    </section>
    </>
  );
};

export default LoginForm;
