import React from "react"
import "./Lancamento.css"
import Menu from "../../components/menu/menu";
import Slider from "../../components/slider/slider"
import Jogos from "../../components/jogos/jogos";
import Carrinho from "../../components/carrinho/carrinho"
function Lancamento() {
    return (
        <div className="container4">
            <div className="parte-menu">
                <Menu />
            </div>
            <div className="parte-baixo">
                <div className="carrosel">
                    <Slider/>
                </div>
                <div className="lancamentos">
                    <div className="card-lancamento">
                        <h1>Lançamentos</h1>
                        <div className="jogos-lancamentos">
                            <Jogos tipo='tipo1'/>
                        </div>
                    </div>
                    <Carrinho/>
                </div>
            </div>
        </div>
    );
}

export default Lancamento;
