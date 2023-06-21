import { useState } from "react";
import "./modal.css"
import axios from "axios";

// eslint-disable-next-line react/prop-types
export function Modal({ isOpen, onClose }) {

    const [titulo, setTitulo] = useState('');
    const [image, setImage] = useState('');
    const [descricao, setDescricao] = useState('');
    const [response, setResponse] = useState(null); // so para fins de testes

    const handlePostRequest = () => {
        const dados = {
            titulo,
            image,
            descricao
        };

        axios.post('http://localhost:8080/galerias', dados)
            .then(resposta => {
                setResponse(resposta.data);
            });



    }

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
                    <input type="text" onChange={event => setTitulo(event.target.value)}/>
                    <label >Url da imagem:</label>
                    <input type="text" onChange={event => setImage(event.target.value)} />
                    <label >Descrição:</label>
                    <input type="text" onChange={event => setDescricao(event.target.value)} />
                    <button className='btn-secondary' onClick={handlePostRequest}>Enviar</button>
                </form>
            </div>
        </div>
    );
}

