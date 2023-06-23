
import "./modalAberto.css"

// eslint-disable-next-line no-unused-vars, react/prop-types
export function ModalAberto({onFechar}){

    return(
        <div className="modal">
            <div className="modal-container">
                <h2>Modal</h2>
                <button onClick={onFechar}>Fechar</button>
            </div>
        </div>
    )
}