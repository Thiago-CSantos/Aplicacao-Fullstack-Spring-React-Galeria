/* eslint-disable no-unused-vars */
import axios from "axios";
import './App.css';
import { Card } from "./components/card";
import{Botao} from './components/button/Botao'
import { useEffect, useState } from "react";

export default function App() {

  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(null);

  const [error, setError] = useState(null);

  useEffect(() => {
    axios('http://localhost:8080/galerias')
      .then((respota) => {
        setDados(respota.data)
      })
      .catch((error) => {
        console.log('Erro: ' + error);
        setError(error)
      })
      .finally(() => setLoading(false));
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

        <Botao nome={'Adicionar'}/>

    </div>
  );
}