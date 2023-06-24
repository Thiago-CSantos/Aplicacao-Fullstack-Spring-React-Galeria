
import axios from "axios";
import "./modalAberto.css";
import { useState } from "react";

// eslint-disable-next-line no-unused-vars, react/prop-types
export function ModalAberto({ onFechar, idAtual }) {

    const [dados, setDados] = useState([]);

    const [id, setId] = useState(idAtual);

    axios.get('http://localhost:8080/galerias/' + id)
        .then(resposta => {
            setDados(resposta.data);
            console.log(resposta.data);
        })
        .catch((error) => {
            console.log(error);
        })

    return (
        <div className="modal">
            <div className="modal-container">
                <span onClick={onFechar}>&times;</span>
                <h2>Modal</h2>
                <form action="" className="formularios">
                    <label>Id da image:</label>
                    <input type="text" value={id} onChange={event => setId(event.target.value)} />
                </form>

                <div className="retorno">
                    <div className="titulo">
                        <h3>Titulo:</h3>
                        <p>{dados.titulo}</p>
                    </div>
                    <div className="image">
                        <h3>Url da image:</h3>
                        <p>{dados.image}</p>
                    </div>
                    <div className="descricao">
                        <h3>Descrição:</h3>
                        <p>{dados.descricao}</p>
                    </div>
                </div>
                <div className="botao-container">
                </div>
            </div>

        </div>
    )
}