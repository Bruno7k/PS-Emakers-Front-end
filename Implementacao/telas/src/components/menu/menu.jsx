import React, { useState } from 'react';
import './menu.css';
import { Link } from 'react-router-dom';
import icone from '../../imagens/icone.png';
import { FaSearch } from 'react-icons/fa';

const Menu =()=> {
    const [visivel, setMenuVisivel] = useState(false);

    const toggleMenu = () => {
        setMenuVisivel(!visivel);
    };

    return (
        <div className='parte-superior'>
            <div className='icone'>
                <img className='iconez' src={icone} alt="Ícone" />
            </div>
            <div className='nav'>
                <button className='hamburguer' onClick={toggleMenu}></button>
                <div className='nav-list'>
                    <div className='link'>
                        <Link to={'/lancamento'}>Lançamentos</Link>
                    </div>
                    <div className='barra' />
                    <div className='link'>
                        <Link to={'/popular'}>Populares</Link>
                    </div>
                    <div className='barra' />
                    <div className='link'>
                        <Link to={'/genero'}>Gêneros</Link>
                    </div>
                    <div className='barra' />
                    <div className='link'>
                        <Link to={'/promocao'}>Promoções</Link>
                    </div>
                    <div className='barra' />
                    <div className='link'>
                        <Link to={'/inicial'}>Conta</Link>
                    </div>
                </div>
                <div className='input'>
                    <input type="text" />
                    <FaSearch className='lupa' />
                </div>
            </div>
            <div className={`menu ${visivel ? "visivel" : ""}`}>
                <button className='hamburguer' onClick={toggleMenu}></button>
                <nav className='menu2'>
                    <Link to={'/lancamento'}>Lançamentos</Link>
                    <Link to={'/popular'}>Populares</Link>
                    <Link to={'/genero'}>Gêneros</Link>
                    <Link to={'/promocao'}>Promoções</Link>
                    <Link to={'/inicial'}>Conta</Link>
                </nav>
            </div>
        </div>
    );
}

export default Menu;
