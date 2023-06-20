import "./modal.css"

// eslint-disable-next-line react/prop-types
export function Modal({ isOpen, onClose }) {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-conteudo">
                <span className="fechar" onClick={onClose}>&times;</span>
                <h2>Meu Modal</h2>
                <form action="" className="formulario">
                    <label >Titulo:</label>
                    <input type="text" />
                    <label >Url da imagem:</label>
                    <input type="text" />
                    <label >Descrição:</label>
                    <input type="text" />
                    <button className='btn-secondary'>Enviar</button>
                </form>
            </div>
        </div>
    );
}

