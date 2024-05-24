import React, { useState } from 'react';
import './menu.css';
import { Link } from 'react-router-dom';
import icone from '../../imagens/icone.png';
import { FaSearch } from 'react-icons/fa';

const Menu =()=> {
    const [menuVisivel, setMenuVisivel] = useState(false);

    const toggleMenu = () => {
        setMenuVisivel(!menuVisivel);
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
                        <a href='#'>Populares</a>
                    </div>
                    <div className='barra' />
                    <div className='link'>
                        <a href='#'>Gêneros</a>
                    </div>
                    <div className='barra' />
                    <div className='link'>
                        <Link to={'/promocao'}>Promoções</Link>
                    </div>
                    <div className='barra' />
                    <div className='link'>
                        <a href='#'>Conta</a>
                    </div>
                </div>
                <div className='input'>
                    <input type="text" />
                    <FaSearch className='lupa' />
                </div>
            </div>
            <div className={`menu ${menuVisivel ? "visivel" : ""}`}>
                <button className='hamburguer' onClick={toggleMenu}></button>
                <nav className='menu2'>
                    <a href='#'>Lançamentos</a>
                    <a href='#'>Populares</a>
                    <a href='#'>Gêneros</a>
                    <Link to={'/promocao'}>Promoções</Link>
                    <a href='#'>Conta</a>
                </nav>
            </div>
        </div>
    );
}

export default Menu;
