import './Carrinho.css'
import Menu from '../../components/menu/menu'
import ImagemCompra from '../../components/imagens/imagemCompra'
import bob from '../../imagens/bob-sponja.png'
import death from '../../imagens/death-stranding.png'
import { FaPix } from "react-icons/fa6";
import { PiShoppingCartSimpleFill } from 'react-icons/pi'
function Carrinho(){
    return(
        <div className='Carrinho'>
            <Menu/>
            <div className='carrinho-pagamento'>
                <div className='compras'>
                    <h1 className='titulo-compra'>Carrinho de Compras</h1>
                    <div className='card-compras'>
                        <div className='card-imagem-compra'>
                            <ImagemCompra 
                                nome='Sponge Bob: Battle for BikiniBottom' 
                                plataforma='Plataforma: PC' 
                                preco='R$ 299,00' 
                                imagem={bob}
                            />
                            <ImagemCompra 
                                nome='Death Stranding' 
                                plataforma='Plataforma: PC' 
                                preco='R$ 299,00' 
                                imagem={death}
                            />
                        </div>
                        <div className='barra-compra'></div>
                        <div className='total'>
                            <p>R$ 598,00</p>
                            <p>Total</p>
                        </div>
                    </div>
                </div>
                <div className='pagamento'>
                    <h1 className='titulo-pagamento'>Método de Pagamento</h1>
                    <div className='card-pagamento'>
                        <div className='tipo-pagamento'>
                            <FaPix className='pix' />
                            <div className='pix-check'>
                                <p>Pix</p>
                                <input
                                id="custom-checkbox"
                                className="check"
                                type="checkbox"
                                />
                                <label htmlFor="custom-checkbox" className="checkbox-custom"></label>
                            </div>
                        </div>
                        <div className='barra-pagamento'></div>
                        <div className='condicao-pagamento'>
                        <label className="checkbox-label">
                            <input
                                className='check'
                                type='checkbox'
                            />
                            <span className="checkbox-custom2"></span>
                            Eu aceito os termos e condições
                        </label>
                        </div>
                        <div className='finalizar'>
                            <button className="finalizar-compra">Finalizar Compra<PiShoppingCartSimpleFill className="carrinho3"/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Carrinho