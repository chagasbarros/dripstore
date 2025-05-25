import React, { useEffect, useState } from 'react';
import Ordenar from '../components/Ordenar';
import FiltroProd from '../components/FiltroProd';
import CardProd from '../components/CardProd';
import produtosJson from '../assets/produtos.json';

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    setProdutos(produtosJson);
  }, []);

  return (
    <div style={{ backgroundColor: '#f9f8fe' }}>
      <Ordenar />
      <div className='d-flex'>
        <FiltroProd />
        <CardProd produtos={produtos} />
      </div>
    </div>
  );
};

export default Produtos;
