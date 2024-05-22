import React from 'react'
import "./Promocao.css"
import tela from '../../imagens/capa-god-of-war.png'
import icone from '../../imagens/icone.png'
import {FaSearch} from 'react-icons/fa'
import { PiShoppingCartSimpleFill } from 'react-icons/pi'
import { TfiShoppingCart } from "react-icons/tfi";

function Promocao(){
    /*const [menuVisivel1, setMenuVisivel] = useState(false);
    const [telaVisivel1, setTelaVisivel] = useState(false);

    const mudaTudo =()=>{
        setMenuVisivel(!menuVisivel);
        setTelaVisivel(!telaVisivel);
    };*/

    return(
        <div className='container3'>
            {/*<div className={`menu ${menuVisivel1 ? "visivel" : ""}`} menuVisivel1={menuVisivel1}>
                <button className='hamburguer' onClick={mudaTudo}></button>
                <nav className='menu2'>
                    <a href='#'>Lançamentos</a>
                    <a href='#'>Populares</a>
                    <a href='#'>Gêneros</a>
                    <a href='#'>Promoções</a>
                    <a href='#'>Conta</a>
                </nav>
            </div>*/}
            <div className='parte-superior'>          
                <div className='icone'>
                    <img className='iconez' src={icone}/>
                </div>
                <div className='nav'>
                    <button className='hamburguer'> {/*onClick={mudaTudo}>*/}</button> 
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
                            <a href='#'>Promoções</a>
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
            <div className='inferior'>
                <div className="card-inferior">
                    <div className="bola"><p>98%</p></div>
                    <div className="campo-imagem">
                        <img className="tela" src={tela}/>
                    </div>
                    <div className='desconto-preco'>
                        <div className='desconto'><p>-40%</p></div>
                        <div className='preco'><p1>R$ 119,95</p1></div>
                    </div>
                    <div className="campo-texto">
                        <h1>God of War</h1>
                        <div className='historia'>
                            <h2>Com a vingança contra os deuses do Olimpo em um passado distante, Kratos 
                                agora vive como um mortal no reino dos deuses e monstros nórdicos. É nesse 
                                mundo duro e implacável que ele deve lutar para sobreviver... e ensinar 
                                seu filho a fazer o mesmo.
                            </h2>
                        </div>
                        <div className="barra-texto"/>
                        <div className="botoes-texto">
                            <button className="adicionar-carrinho">Adicionar ao Carrinho</button>
                            <PiShoppingCartSimpleFill className="carrinho1"/>
                            <button className="solicitar-reembolso">Solicitar Reembolso</button>
                            <PiShoppingCartSimpleFill className="carrinho2"/>
                        </div>
                    </div>
                </div>
                <div className='carrinho-bola'>
                    <div className='bola-carrinho'></div>
                    <TfiShoppingCart className='carrinhoB'/>
                </div>
            </div>
        </div>
    );
}
export default Promocao;