import {React, useState} from 'react'
import './Inicial.css'
import icone from '../../imagens/icone.png'
import bob from '../../imagens/bob-sponja.png'
import death from '../../imagens/death-stranding.png'
import deliver from '../../imagens/deliver-mars.png'
import god from '../../imagens/god-of-war.png'
import {FaSearch} from 'react-icons/fa'
import {MdEdit} from 'react-icons/md'
import { FaRegTrashAlt } from 'react-icons/fa'
import { TfiShoppingCart } from "react-icons/tfi";
import { Link } from 'react-router-dom'

function Inicial(){
    const [menuVisivel, setMenuVisivel] = useState(false);
    const [alterarVisivel, setAlterarVisivel] = useState(false);
    const [telaVisivel, setTelaVisivel] = useState(false);
    const [nome, setNome] = useState("<<Nome do Usuário>>");
    const [email, setEmail] = useState("nomeusuario@email.com");
    const [CPF, setCPF] = useState("123.456.789-00");

    const toggleDados =()=>{
        setAlterarVisivel(!alterarVisivel);
    };

    const toggleMenu =()=>{
        setMenuVisivel(!menuVisivel);
        setTelaVisivel(!telaVisivel);
      };

    return (
        <div className='container2'>
            <div className={`menu ${menuVisivel ? "visivel" : ""}`} menuVisivel={menuVisivel}>
                <button className='hamburguer' onClick={toggleMenu}></button>
                <nav className='menu2'>
                    <a href='#'>Lançamentos</a>
                    <a href='#'>Populares</a>
                    <a href='#'>Gêneros</a>
                    <Link to={'/promocao'}>Promoções</Link>
                    <a href='#'>Conta</a>
                </nav>
            </div>
            <div className={`alterar-dados ${alterarVisivel ? "visivel" : ""}`} alterarVisivel={alterarVisivel}>
                    <button className="sair"onClick={toggleDados}>x</button>
                    <div className='dados'>
                        <input className="altDados" type='text' placeholder='Nome' onChange={(e)=>setNome(e.target.value)}/>
                        <input className="altDados" type='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
                        <input className="altDados" type='text' placeholder='CPF'onChange={(e)=>setCPF(e.target.value)}/>
                    </div>
            </div>
            <div className='parte-superior'>          
                <div className='icone'>
                    <img className='iconez' src={icone}/>
                </div>
                <div className='nav'>
                    <button className='hamburguer' onClick={toggleMenu}></button>
                    <div className='nav-list'>
                        <div className='link'>
                            <a href='#'>Lançamentos</a>
                        </div>
                        <div className='barra'/>
                        <div className='link'>
                            <a href='#'>Populares</a>
                        </div>
                        <div className='barra'/>
                        <div className='link'>
                            <a href='#'>Gêneros</a>
                        </div>
                        <div className='barra'/>
                        <div className='link'>
                            <Link to={'/promocao'}>Promoções</Link>
                        </div>
                        <div className='barra'/>
                        <div className='link'>
                            <a href='#'>Conta</a>
                        </div>
                    </div>    
                    <div className='input'>
                        <input type="text"/>
                        <FaSearch className='lupa'/>
                    </div>
                </div>
            </div>
            <div className={`parte-inferior ${telaVisivel ? "visivel" : ""}`} telaVisivel={telaVisivel}>
                <div className='parte-esquerda'>
                    <div className='caixa'>
                        <h1>Olá, {nome}</h1>
                        <h2>Seu email é {email}</h2>
                        <h2>Seu CPF é {CPF}</h2>
                        <div className='botoes'>
                            <div className='alterar'>
                                <button onClick={toggleDados} className='tipo1'>Alterar Dados </button>
                                <MdEdit className='alterar'/>
                            </div>
                            <div className='excluir'>
                                <button className='tipo1'>Excluir Conta </button>
                                <FaRegTrashAlt className='lixo'/>
                            </div>
                            <div className='Tela do admin'>
                                <button className='tipo2'>Tela do admin </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='parte-direita'>
                    <div className='card-jogos'>
                        <h1>Jogos adquiridos:</h1>
                        <div className='jogos'>
                            <div className='jogo'>
                                <img className='img-jogo' src={bob}/>
                                <h2>100/100</h2>
                            </div>
                            <div className='jogo'>
                                <img className='img-jogo' src={deliver}/>
                                <h2>95/100</h2>
                            </div>
                            <div className='jogo'>
                                <img className='img-jogo' src={god}/>
                                <h2>75/100</h2>
                            </div>
                            <div className='jogo'>
                                <img className='img-jogo' src={death}/>
                                <h2>Adicionar Avaliação</h2>
                            </div>
                        </div>
                    </div>
                    <TfiShoppingCart className='carrinho'/>
                </div>
            </div>
        </div>
    );
}
export default Inicial;