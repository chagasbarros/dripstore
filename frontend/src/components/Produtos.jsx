import React, { useEffect, useState } from 'react';
import CardProd from '../components/CardProd'; // seu componente de exibição

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const buscarProdutos = async () => {
      try {
        const resposta = await fetch("http://localhost:3000/produtos"); // Altere se estiver usando IP público
        const data = await resposta.json();
        setProdutos(data);
        console.log("Produtos carregados:", data);
      } catch (erro) {
        console.error("Erro ao buscar produtos:", erro);
      }
    };

    buscarProdutos();
  }, []);

  return (
    <div className="mt-5">
      <h2 className="text-center mb-4">Produtos</h2>
      <CardProd produtos={produtos} />
    </div>
  );
};

export default Produtos;
