import React from "react"
import './Administrador.css'
import Menu from "../../components/menu/menu"
import Campo from "../../components/campoEditar/campoEditar"
function Administrador(){
    return(
        <div className="Administrador">
            <div className="parte-menu">
                <Menu />
            </div>
            <div className="inferior">
                <div className="esquerda">
                    <Campo tipo='tipo1' titulo='Cadastrar Jogo' nomeBotao='Cadastrar' />
                </div>
                
                <div className="meio">
                    <Campo tipo='tipo2' titulo='Remover Jogo' nomeBotao='Remover'/> 
                </div>
                <div className="direita">
                    <Campo tipo='tipo1' titulo='Editar Jogo' nomeBotao='Modificar' />
                </div>
            </div>
        </div>
    )
}
export default Administrador