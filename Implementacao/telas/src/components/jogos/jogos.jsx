import React from 'react'
import './jogos.css'
import bob from '../../imagens/bob-sponja.png'
import death from '../../imagens/death-stranding.png'
import deliver from '../../imagens/deliver-mars.png'
import spell from '../../imagens/spell-force.png'
import perish from '../../imagens/perish.png'
import red from '../../imagens/red.png';
import mad from '../../imagens/mad-max.png';
import ac from '../../imagens/assassins.png';
import batman from '../../imagens/batman.png';
import lord from '../../imagens/lords.png';
import riders from '../../imagens/riders.png';
import injustice from '../../imagens/injustice.png';
import Card from '../imagens/cardPreco'
const Jogos = ({ tipo })=>{
    return(
        <>
            {tipo == 'tipo1' &&(
                <div className='cards'>
                    <Card imagem={bob} preco="R$ 299,00" />
                    <Card imagem={deliver} preco="R$ 299,00" />
                    <Card imagem={spell} preco="R$ 299,00" />
                    <Card imagem={death} preco="R$ 299,00" />
                    <Card imagem={perish} preco="R$ 299,00" />
                </div>
            )}
            {tipo == 'tipo2'&&(
                <div className='cards2'>
                    <Card imagem={red} preco="R$ 359,00" />
                    <Card imagem={bob} preco="R$ 299,00" />
                    <Card imagem={perish} preco="R$ 299,00" />
                    <Card imagem={mad} preco="R$ 49,50" />
                    <Card imagem={deliver} preco="R$ 299,00" />
                    <Card imagem={spell} preco="R$ 299,00" />
                    <Card imagem={batman} preco="R$ 149,00" />
                    <Card imagem={ac} preco="R$ 49,50" />
                    <Card imagem={lord} preco="R$ 230,00" />
                    <Card imagem={riders} preco="R$ 199,90" />
                    <Card imagem={death} preco="R$ 299,00" />
                    <Card imagem={injustice} preco="R$ 279,90" />
                </div>
            )}
        </>
    )
}
export default Jogos;