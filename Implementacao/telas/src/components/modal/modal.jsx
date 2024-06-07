import React from 'react'
import './modal.css'
import { useNavigate } from 'react-router-dom';
export default function Modal({ isOpen, setModalClose }) {
    const navigate = useNavigate();
    const handleLogin =()=>{
        return navigate("/");
    }
    if(isOpen){
        return (
            <div className='blur'>
                <div className='modal'>
                    <div className='texto-modal'>
                        Deseja excluir sua conta?
                    </div>
                    <div className='botao-modal'>
                        <button onClick={handleLogin}>Sim</button>
                        <button onClick={setModalClose}>Não</button>
                    </div>
                </div>
            </div>
        )
    }
    return null
}
