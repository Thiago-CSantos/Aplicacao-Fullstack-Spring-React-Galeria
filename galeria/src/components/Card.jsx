// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './card.css';
import { ModalAberto } from './AbrirModal/ModalAberto';


// eslint-disable-next-line react/prop-types
export function Card({ id, titulo, image, descricao }) {

    const [modalAberto, setModalAberto] = useState(false);

    const handleCardClick = () => {
        setModalAberto(true);
    }

    const handleCloseCard = () =>{
        setModalAberto(false);
    }

    return (
        <>
            <div className="container" onClick={handleCardClick}>
                <div className="card">
                    <h2>{titulo}</h2>
                    <img src={image} />
                    <p>{descricao}</p>
                </div>
            </div>
            {modalAberto && <ModalAberto onFechar={handleCloseCard} idAtual={id}/>}

        </>
    )
}