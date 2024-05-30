import './cardPreco.css'
const CardPreco =({ imagem, preco }) =>{
    return(
        <div className='card'>
            <img className='imagemCard' src={imagem}/>
            <div className='precoCard'><p>{preco}</p></div>
        </div>
    )
}
export default CardPreco;