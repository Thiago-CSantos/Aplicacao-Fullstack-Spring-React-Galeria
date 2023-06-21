/* eslint-disable no-unused-vars */
import axios from "axios";
import './App.css';
import { Card } from "./components/card";
import { Botao } from './components/button/Botao';
import { Modal } from "./components/modal/Modal";
import { useEffect, useState } from "react";

export default function App() {

  const [modalAberto, setModalAberto] = useState(false);
  const abrirModal = () => {
    setModalAberto(true);
  }
  const fecharModal = () => {
    setModalAberto(false);
  }

  const [dados, setDados] = useState([]);
  

  // Get com axios
  useEffect(() => {
    axios('http://localhost:8080/galerias')
      .then((respota) => {
        setDados(respota.data)
      })
  }, []);


  return (
    <div className='App'>
      <h1>Galeria</h1>

      <div className="card-grid">
        {dados?.map((item) => {
          // eslint-disable-next-line react/jsx-key
          return <Card
            key={item.id}
            titulo={item.titulo}
            image={item.image}
            descricao={item.descricao}
          />
        })}
      </div>

      <Botao click={abrirModal} nome={'Adicionar'} />
      <Modal isOpen={modalAberto} onClose={fecharModal}/>
    </div>
  );
}