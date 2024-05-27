import './imagensCampos1.css'
const Imagens =({ imagem, desconto, preco }) =>{
    return(
        <div className='campo-imagem-tipo1'>
            <img className="tela-tipo1" src={imagem}/>
            <div className="desconto-preco-tipo1">
                <div className='desconto-tipo1'><p>{desconto}</p></div>
                <div className='preco-tipo1'><p1>{preco}</p1></div>
            </div>
        </div>
    )
}
export default Imagens;