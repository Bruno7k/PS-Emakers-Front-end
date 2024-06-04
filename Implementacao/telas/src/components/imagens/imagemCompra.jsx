import './imagemCompra.css'

function imagemCompra({ nome, plataforma, imagem, preco }){
    return(
        <div className='foto-preco'>
            <div className='nome-preco'>
                <div className='nome-plataforma'>
                    <h1>{nome}</h1>
                    <h2>{plataforma}</h2>
                </div>
                <div className='preco-jogo'>
                    <p>{preco}</p>
                </div>
            </div>
            <img className="imagem-compra" src={imagem}/>
        </div>
    )
}
export default imagemCompra