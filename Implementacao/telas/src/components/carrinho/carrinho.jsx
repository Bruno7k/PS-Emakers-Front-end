import './carrinho.css';
import { TfiShoppingCart } from "react-icons/tfi";
import { useNavigate } from 'react-router-dom';

const Carrinho = () => {
    const navigate = useNavigate();

    const handleCartClick = () => {
        navigate('/carrinho');
    };

    return (
        <div className='circulo-carrinho' onClick={handleCartClick}>
            <div className='bola-vazada'></div>
            <TfiShoppingCart className='carrinho' />
        </div>
    );
};

export default Carrinho;
