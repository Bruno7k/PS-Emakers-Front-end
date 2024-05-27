import './carrinho.css'
import { TfiShoppingCart } from "react-icons/tfi"
const Carrinho =()=>{
    return(
    <div className='circulo-carrinho'>
        <div className='bola-vazada'></div>
        <TfiShoppingCart className='carrinho'/>
    </div>
    )
}
export default Carrinho;