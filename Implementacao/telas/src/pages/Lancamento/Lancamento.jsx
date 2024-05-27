import React from "react"
import "./Lancamento.css"
import bob from '../../imagens/bob-sponja.png'
import death from '../../imagens/death-stranding.png'
import deliver from '../../imagens/deliver-mars.png'
import god from '../../imagens/god-of-war.png'
import spell from '../../imagens/spell-force.png'
import perish from '../../imagens/perish.png'
import Menu from "../../components/menu/menu";
import Slider from "../../components/slider/slider"

function Lancamento() {
    return (
        <div className="container4">
            <Menu />
            <div className="parte-baixo">
                <div className="carrosel">
                    <Slider/>
                </div>
                <div className="lancamentos">
                    <h1>Lançamentos</h1>
                    <div className="jogos-lancamentos"></div>
                </div>
            </div>
        </div>
    );
}

export default Lancamento;
