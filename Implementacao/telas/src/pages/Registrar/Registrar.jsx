import './Registrar.css'
import Input from '../../components/input/inputComponent';
import Botao from '../../components/botoes/botaoFlexa';
import LinkComponent from '../../components/links/links';
function Registrar (){
    return(
        <div className='container'>
            <div className='left-login'>
                <div className='card-registrar'>
                    <h1>Registrar</h1>
                    <Input tipo="text" placeholder="Nome de Usuario"/>   
                    <Input tipo="email" placeholder="E-mail"/> 
                    <Input tipo="text" placeholder="CPF"/>
                    <Input tipo="password" placeholder="Senha"/>   
                    <Input tipo="password" placeholder="Confirmar Senha"/>      
                    <Botao/>  
                    <LinkComponent rota='/' nome='Fazer Login'></LinkComponent>
                </div>
            </div>
        </div>
    )
}
export default Registrar