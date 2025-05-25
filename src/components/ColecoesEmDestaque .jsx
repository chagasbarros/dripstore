import React, { useState } from 'react';
import camisaP from '../assets/logo/camisapequena.svg';
import calca from '../assets/logo/calcapequena.svg';
import headphone from '../assets/logo/fonepequeno.svg';
import tenis from '../assets/logo/sapatopequeno.svg';

const ColecoesEmDestaque = () => {
    const colecoes = [
        { nome: 'Camisetas', icon: camisaP },
        { nome: 'Calças', icon: calca },
        { nome: 'Headphones', icon: headphone },
        { nome: 'Tênis', icon: tenis },
    ];

    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="container text-center my-5">
            <h4 className="fw-bold mb-4">Coleções em destaque</h4>
            <div className="row justify-content-center">
                {colecoes.map((item, index) => {
                    const isDestaque = item.destaque || hoveredIndex === index;
                    return (
                        <div
                            key={index}
                            className="col-6 col-sm-4 col-md-2 mb-4"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div
                                className={`border rounded-circle p-0 overflow-hidden ${
                                    isDestaque ? 'border-danger' : 'border-secondary'
                                }`}
                                style={{
                                    width: '100px',
                                    height: '100px',
                                    margin: '0 auto',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <img
                                    src={item.icon}
                                    alt={item.nome}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        filter: isDestaque ? 'none' : 'grayscale(60%)',
                                    }}
                                />
                            </div>
                            <p className="mt-2">{item.nome}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ColecoesEmDestaque;
