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
      <from onSubmit = {handleSubmit}>
        <h1>Login</h1>
        <div className='input-field'>
            <input type="email" placeholder="E-mail" onChange={(e)=>setUsername(e.target.value)}/>
        </div>
        <div className='input-field'>
            <input type="password"placeholder="Senha" onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button>→</button>
        <div className='new-account'>
            <a href='#'>Criar Conta</a>
        </div>
        <div className='forget'>
            <a href='#'>Fazer Login</a>
        </div>
      </from>
    </div>
  )
};

export default Login;
