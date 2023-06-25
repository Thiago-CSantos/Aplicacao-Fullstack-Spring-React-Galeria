import "./modalUpdate.css"

// eslint-disable-next-line react/prop-types
export function ModalUpdate({ onFechar }) {
      return (
            <>
                  <div className="over">
                        <div className="over-container">
                              <span onClick={onFechar}>&times;</span>
                                    <h2>Alterar item</h2>
                              <form className="over-form">
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
            </>
      )
}