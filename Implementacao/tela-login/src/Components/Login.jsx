import React from 'react';

import { useState } from 'react';

import "./Login.css";

const Login = () => {
  const [username, setUsername]  = useState("");
  const[password, setPassword] = useState("");
  
  const handleSubmit=(event)=>{
    event.preventDefault();
    alert("Enviando os dados:" + username + " - " + password);
  };

  return (
    <div className="container">
      <from className="leftlogin" onSubmit = {handleSubmit}>
        <div className='cardLogin'>
          <h1>Login</h1>
          <div className='input-field'>
            <input type="email" placeholder="E-mail" onChange={(e)=>setUsername(e.target.value)}/>
          </div>
          <div className='input-field'>
            <input type="password"placeholder="Senha" onChange={(e)=>setPassword(e.target.value)}/>
            <button>→</button>
          </div>
          <div className='links'>
            <div className='new-account'>
              <a href='#'>Criar Conta</a>
            </div>
            <div className='forget'>
              <a href='#'>Esqueceu a senha?</a>
            </div>
          </div>
        </div>
      </from>
      <div className='right-login'></div>
    </div>
  )
};

export default Login;
