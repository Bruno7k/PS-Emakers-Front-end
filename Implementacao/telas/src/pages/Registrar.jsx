import './Registrar.css'

const Registrar =() =>{
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
                        <button>→</button> 
                    </div>
                    <div className='links'>
                        <div className='login'>
                            <a href='#'>Fazer Login</a>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}
export default Registrar