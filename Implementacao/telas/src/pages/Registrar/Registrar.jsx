import {Link, useNavigate} from 'react-router-dom'
import './Registrar.css'


function Registrar (){
    const navigate = useNavigate();
    const handleInicial =()=>{
      return navigate("/inicial");
    }
    return(
        <div className='container'>
            <div className='left-login'>
                <div className='card-registrar'>
                    <h1>Registrar</h1>
                    <div className='input-field'>
                        <input type="nome" placeholder="Nome de Usuario"/>  
                    </div>
                    <div className='input-field'>
                        <input type="email" placeholder="E-mail"/>  
                    </div>
                    <div className='input-field'>
                        <input type="cpf" placeholder="CPF"/>  
                    </div>
                    <div className='input-field'>
                        <input type="password" placeholder="Senha"/>  
                    </div>
                    <div className='input-field'>
                        <input type="password" placeholder="Confirmar Senha"/>  
                        <button onClick={handleInicial}>→</button>
                    </div>
                    <div className='links'>
                        <div className='login'>
                            <Link to={'/'} >Fazer Login</Link>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}
export default Registrar