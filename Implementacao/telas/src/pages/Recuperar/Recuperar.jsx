import {Link, useNavigate} from "react-router-dom";
import "./Recuperar.css";

function Recuperar(){
    const navigate = useNavigate();
    const handleInicial =()=>{
      return navigate("/inicial");
    }
return(
    <div className='container'>
        <div className='left-login'>
            <div className="card-recuperar">
                <h2>Recuperar</h2>
                <h3>Conta</h3>
                <div className="input-field">
                    <input type="email" placeholder="E-mail"/>   
                    <button onClick={handleInicial}>→</button>
                </div>
                <div className='links'>
                    <div className='new-account'>
                        <Link to={'/registrar'} >Criar Conta</Link>
                    </div>
                    <div className='login'>
                        <Link to={'/'} >Fazer Login</Link>
                    </div>
                </div>    
            </div>    
        </div> 
    </div>
)
}
export default Recuperar