import React from 'react';
import "./Login.css";
import { Link, useNavigate } from 'react-router-dom';

function Login(){
  const navigate = useNavigate();
  const handleInicial =()=>{
    return navigate("/inicial");
  }
  return (
    <div className="container">
      <div className="left-login">
        <div className='card-login'>
          <h1>Login</h1>
          <div className='input-field'>
            <input type="email" placeholder="E-mail"/>
          </div>
          <div className='input-field'>
            <input type="password"placeholder="Senha"/>
            <button onClick={handleInicial}>→</button>
          </div>
          <div className='links'>
            <div className='new-account'>
              <Link to={'/registrar' } >Criar Conta</Link>
            </div>
            <div className='forget'>
              <Link to={'/recuperar'} >Esqueceu a senha?</Link>
            </div>
          </div>
        </div>
      </div>
      <div className='right-login'></div>
    </div>
  )
};

export default Login;
