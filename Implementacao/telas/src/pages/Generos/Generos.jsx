import React from "react";
import './Generos.css'
import Menu from "../../components/menu/menu";
import SliderGenero from "../../components/slider/sliderGenero";
function Generos(){
    return(
        <div className="genero">
            <div className="parte-menu">
                <Menu />
            </div>
            <div className="genero-inferior">
                <div className="categoria">
                    <h1>Ação</h1>
                    <div className="fundo-genero">
                        <SliderGenero tipo = 'tipo1'/>
                    </div>
                </div>
                <div className="categoria">
                    <h1>Aventura</h1>
                    <div className="fundo-genero">
                        <SliderGenero tipo = 'tipo2'/>
                    </div>
                </div>
                <div className="categoria">
                    <h1>Exploração</h1>
                    <div className="fundo-genero">
                        <SliderGenero tipo = 'tipo3'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Generos;