import "./Recuperar.css";
import Input from '../../components/input/inputComponent';
import Botao from '../../components/botoes/botaoFlexa';
import LinkComponent from '../../components/links/links';
function Recuperar(){

return(
    <div className='container'>
        <div className='left-login'>
            <div className="card-recuperar">
                <h2>Recuperar</h2>
                <h3>Conta</h3>
                <Input tipo="email" placeholder="E-mail"/> 
                <Botao/>
                <div className='links'>
                    <LinkComponent rota='/registrar' nome='Criar Conta'></LinkComponent>
                    <LinkComponent rota='/' nome='Fazer Login'></LinkComponent>
                </div>    
            </div>    
        </div> 
    </div>
)
}
export default Recuperar