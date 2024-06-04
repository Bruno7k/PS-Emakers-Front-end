import './imagensCampos.css'
const Imagens =({ tipo, imagem, desconto, preco }) =>{
    return(
        <div>
            {tipo == 'tipo1' &&(
                <div className='campo-imagem1'>
                    <img className="tela" src={imagem}/>
                    <div className="desconto-preco">
                        <h1 className='imagem-desconto'>{desconto}</h1>
                        <h2 className='imagem-preco'>{preco}</h2>
                    </div>
                </div>
            )}
            {tipo == 'tipo2'&&(
                <div className='campo-imagem2'>
                    <img className="tela" src={imagem}/>
                    <div className="desconto-preco">
                        <h1 className='imagem-desconto'>{desconto}</h1>
                        <h2 className='imagem-preco'>{preco}</h2>
                    </div>
                </div>
            )}
            {tipo == 'tipo3'&&(
                <div className='campo-imagem3'>
                    <img className="tela" src={imagem}/>
                    <div className="desconto-preco3">
                        <h1 className='imagem-desconto'>{desconto}</h1>
                        <h2 className='imagem-preco'>{preco}</h2>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Imagens;