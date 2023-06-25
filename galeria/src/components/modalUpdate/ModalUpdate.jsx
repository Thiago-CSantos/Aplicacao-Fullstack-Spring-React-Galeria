import axios from "axios";
import "./modalUpdate.css";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export function ModalUpdate({ onFechar }) {

      const [id, setId] = useState()
      const [titulo, setTitulo] = useState('');
      const [image, setImage] = useState('');
      const [descricao, setDescricao] = useState('');

      const handlePutRequest = () => {
            const dados = {
                  titulo,
                  image,
                  descricao
            };

            axios.put('http://localhost:8080/galerias/' + id, dados)
                  .then(resposta => {
                        console.log(resposta.data);
                  })
                  .catch(erro => {
                        console.log('erro desse:' + erro);
                  })

      }

      return (
            <>
                  <div className="over">
                        <div className="over-container">
                              <span onClick={onFechar}>&times;</span>
                              <h2>Alterar item</h2>
                              <form className="over-form">
                                    <label >Id do item:</label>
                                    <input type="text" onChange={event => setId(event.target.value)} />
                                    <label >Titulo:</label>
                                    <input type="text" onChange={event => setTitulo(event.target.value)}/>
                                    <label >Url da imagem:</label>
                                    <input type="text" onChange={event => setImage(event.target.value)}/>
                                    <label >Descrição:</label>
                                    <input type="text" onChange={event => setDescricao(event.target.value)}/>
                                    <button onClick={handlePutRequest}>Enviar</button>
                              </form>
                        </div>
                  </div>
            </>
      )
}