import React from "react";
import "./Lancamento.css"
import icone from '../../imagens/icone.png'
import bob from '../../imagens/bob-sponja.png'
import death from '../../imagens/death-stranding.png'
import deliver from '../../imagens/deliver-mars.png'
import god from '../../imagens/god-of-war.png'
import tela from '../../imagens/capa-god-of-war.png'
import spell from '../../imagens/spell-force.png'
import perish from '../../imagens/perish.png'
import {FaSearch} from 'react-icons/fa'

function Lancamento(){
    return(
        <div className="container4">
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
            <div className="parte-baixo">
                <div className="carrosel">

                </div>
                <div className="lancamentos">
                    <h1>Lançamentos</h1>
                    <div className="jogos-lancamentos">

                    </div>
                </div>
            </div>
        </div>
    )

}
export default Lancamento;