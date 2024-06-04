import './campoEditar.css';
import { useRef } from 'react';

function Administrador({ tipo, titulo, nomeBotao }) {
    const fileInputRef = useRef(null);

    const handleFileUpload = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div>
            {tipo === 'tipo1' && (
                <div className='campo'>
                    <h1 className='titulo1'>{titulo}</h1>
                    <input className='dados1' type='text' placeholder='Título do jogo' />
                    <input className='dados1' type='text' placeholder='Gênero' />
                    <div className="textarea-container">
                        <textarea className='descricao' placeholder='Descrição' />
                    </div>
                    <input
                        className='file'
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                    />
                    <button className='upload-button' onClick={handleFileUpload}> Inserir imagem</button>
                    <button className='cadastrar'>{nomeBotao}</button>
                </div>
            )}

            {tipo === 'tipo2' && (
                <div className='campo'>
                    <h1 className='titulo2'>{titulo}</h1>
                    <input className='dados2' type='text' placeholder='Título do jogo ou ID' />
                    <button className='cadastrar2'>{nomeBotao}</button>
                </div>
            )}
        </div>
    );
}

export default Administrador;
