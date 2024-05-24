import React from 'react';
import "./Login.css";
import Input from '../../components/input/inputComponent';
import Botao from '../../components/botoes/botaoFlexa';
import LinkComponent from '../../components/links/links'
function Login(){
  return (
    <div className="container">
      <div className="left-login">
        <div className='card-login'>
          <h1>Login</h1>
          <Input tipo="email" placeholder="E-mail"/>          
          <Input tipo="password" placeholder="Senha"/>
          <Botao/>
          <div className='links'>
            <LinkComponent rota="/registrar" nome="Criar Conta"></LinkComponent>
            <LinkComponent rota="/recuperar" nome="Esqueceu a senha?"></LinkComponent>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
