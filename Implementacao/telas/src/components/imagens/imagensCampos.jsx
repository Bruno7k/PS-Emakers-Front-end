import './imagensCampos.css'
const Imagens =({ imagem, desconto, preco }) =>{
    return(
        <div className='campo-imagem'>
            <img className="tela" src={imagem}/>
            <div className="desconto-preco">
                <div className='desconto'><p>{desconto}</p></div>
                <div className='preco'><p1>{preco}</p1></div>
            </div>
        </div>
    )
}
export default Imagens;