import './modalDelete.css'
// eslint-disable-next-line react/prop-types
export function ModalDelete({ onFechar }) {

      return (
            <>
                  <div className="over">
                        <div className="over-cont">
                              <span onClick={onFechar}>&times;</span>
                              <h2>Excluir item</h2>
                              <form className="over-form">
                                    <label >Id do item á deletar:</label>
                                    <input type="text" />
                              </form>
                        </div>
                  </div>
            </>
      )
}