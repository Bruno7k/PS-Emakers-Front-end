import './botaoFlexa.css';
import { useNavigate } from 'react-router-dom';
const Botao = () =>{
    const navigate = useNavigate();
    const handleInicial =()=>{
      return navigate("/inicial");
    }
return(
    <button className='flecha' onClick={handleInicial}>→</button>
);
}
export default Botao;