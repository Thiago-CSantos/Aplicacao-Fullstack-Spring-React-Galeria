import { useState } from 'react'
import './modalDelete.css'
import axios from 'axios';
// eslint-disable-next-line react/prop-types
export function ModalDelete({ onFechar }) {

      const [id, setId] = useState('');

      const handleExcluir = () => {

            axios.delete('http://localhost:8080/galerias/' + id)
                  .then(resposta => {
                        console.log(resposta.data)
                        console.log(resposta.status);
                  })
                  .catch(error => console.log(error));

      }

      return (
            <>
                  <div className="over">
                        <div className="over-cont">
                              <span onClick={onFechar}>&times;</span>
                              <h2>Excluir item</h2>
                              <form className="over-form">
                                    <label >Id do item á deletar:</label>
                                    <input type="text" onChange={event => { setId(event.target.value) }} />
                                    <button onClick={handleExcluir}>Excluir</button>
                              </form>
                        </div>
                  </div>
            </>
      )
}