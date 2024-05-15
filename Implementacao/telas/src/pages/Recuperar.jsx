import "./Recuperar.css";

const Recuperar =() =>{
return(
    <div className='container'>
        <div className='left-login'>
            <div className="card-recuperar">
                <h2>Recuperar</h2>
                <h3>Conta</h3>
                <div className="input-field">
                    <input type="email" placeholder="E-mail"/>   
                    <button>→</button> 
                </div>
                <div className='links'>
                    <div className='new-account'>
                        <a href='#'>Criar Conta</a>
                    </div>
                    <div className='login'>
                        <a href='#'>Fazer Login</a>
                    </div>
                </div>    
            </div>    
        </div> 
    </div>
)
}
export default Recuperar