import React from "react";
import './Populares.css';
import Menu from "../../components/menu/menu";
import Jogos from "../../components/jogos/jogos";
function Populares(){
    return(
        <div className="popular">
            <div className="parte-menu">
                <Menu />
            </div> 
            <div className="popular-inferior">
                <div className="jogos-popular">
                    <div className="card-popular">
                        <div>
                            <h1 className="margem">Populares</h1>
                        </div>
                        <div>
                            <Jogos tipo='tipo2'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Populares;