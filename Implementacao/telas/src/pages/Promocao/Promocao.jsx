import React from 'react'
import "./Promocao.css"
import tela from '../../imagens/capa-god-of-war.png'
import { PiShoppingCartSimpleFill } from 'react-icons/pi'
import Menu from '../../components/menu/menu';
import Carrinho from '../../components/carrinho/carrinho';
import Imagens from '../../components/imagens/imagensCampos';

function Promocao(){

    return(
        <div className='container3'>
            <Menu/>
            <div className='inferior-promocao'>
                <div className='carrinho-card'>
                    <div className="card-inferior">
                        <div className='animacao-promocao'>
                            <div className="bola"><p>98%</p></div>
                            <Imagens tipo='tipo1' imagem={tela} desconto="-40%" preco="R$ 119,95"/>
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
                                <button className="adicionar-carrinho">Adicionar ao Carrinho  <PiShoppingCartSimpleFill className="carrinho1"/></button>
                                <button className="solicitar-reembolso">Solicitar Reembolso<PiShoppingCartSimpleFill className="carrinho1"/></button>
                            </div>
                        </div>
                    </div>
                    <Carrinho/>
                </div>
            </div>
        </div>
    );
}
export default Promocao;