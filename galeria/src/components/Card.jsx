// eslint-disable-next-line no-unused-vars
import React from 'react';
import './card.css';


// eslint-disable-next-line react/prop-types
export function Card({ titulo, image, descricao }) {
    return (
        <div className="container">
            <div className="card">
                <h2>{titulo}</h2>
                <img src={image} />
                <p>{descricao}</p>
            </div>
        </div>
    )
}