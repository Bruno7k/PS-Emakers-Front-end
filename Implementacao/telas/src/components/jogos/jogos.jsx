import React from 'react'
import './jogos.css'
import bob from '../../imagens/bob-sponja.png'
import death from '../../imagens/death-stranding.png'
import deliver from '../../imagens/deliver-mars.png'
import spell from '../../imagens/spell-force.png'
import perish from '../../imagens/perish.png'
import Card from '../imagens/cardPreco'
export default function Jogos(){
    return(
        <div className='cards'>
            <Card imagem={bob} preco="R$ 299,00" />
            <Card imagem={deliver} preco="R$ 299,00" />
            <Card imagem={spell} preco="R$ 299,00" />
            <Card imagem={death} preco="R$ 299,00" />
            <Card imagem={perish} preco="R$ 299,00" />
        </div>
    )
}