/* eslint-disable no-unused-vars */
import axios from "axios";
import './App.css';
import { Card } from "./components/Card";
import { Botao } from './components/button/Botao';
import { Modal } from "./components/modal/Modal";
import { ModalUpdate } from "./components/modalUpdate/ModalUpdate";
import { useEffect, useState } from "react";
import { ModalDelete } from "./components/modalDelete/ModalDelete";

export default function App() {

  const [modalAberto, setModalAberto] = useState(false);
  const abrirModal = () => {
    setModalAberto(true);
  }
  const fecharModal = () => {
    setModalAberto(false);
  }


  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }


  const [openDelete, setOpenDelete] = useState(false);
  const handleOpenDelete = () => {
    setOpenDelete(true)
  }
  const handleCloseDelete = () => {
    setOpenDelete(false);
  }

  // Get com axios
  const [dados, setDados] = useState([]);

  useEffect(() => {
    axios('http://localhost:8080/galerias')
      .then((respota) => {
        setDados(respota.data)
        console.log(respota.data);
      })
  }, []);


  return (
    <div className='App'>
      <h1>Galeria</h1>
      <nav>
        <div className="navbar">
          <button type="button" className="botao" onClick={handleOpen}>Alterar</button>
          {open && <ModalUpdate onFechar={handleClose} />}
          <button className="botao" onClick={handleOpenDelete}>Deletar</button>
          {openDelete && <ModalDelete onFechar={handleCloseDelete} />}
        </div>
      </nav>
      <div className="card-grid">
        {dados?.map((item) => {
          // eslint-disable-next-line react/jsx-key
          return <Card
            key={item.id}
            id={item.id}
            titulo={item.titulo}
            image={item.image}
            descricao={item.descricao}
          />
        })}
      </div>

      <Botao click={abrirModal} nome={'Adicionar'} />
      <Modal isOpen={modalAberto} onClose={fecharModal} />
    </div>
  );
}