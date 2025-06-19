import React, { useEffect, useState } from "react";
import styles from './CardProd.module.css';
import { Link } from "react-router-dom";

const CardProd = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/produtos")
      .then(res => res.json())
      .then(dados => setProdutos(dados))
      .catch(err => console.error("Erro ao buscar produtos:", err));
  }, []);

  const formatarPreco = (preco) => {
    return Number(preco).toFixed(2).replace(".", ",");
  };

  const imagemPadrao = "https://lojastartover.com.br/wp-content/uploads/2021/09/576E54DA-FEE6-44D9-B5BC-CAA96B847E41.jpeg";

  return (
    <section className="d-flex">
      <div className="container">
        <div className="row">
          {produtos.map((produto) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={produto.id}>
              <div className="card p-2 h-100">
                <Link to={`/DripStore/DescricaoProd/${produto.id}`}>
                  <img
                    src={produto.imagem || imagemPadrao}
                    className={`${styles.cardImg} card-img-top img-fluid`}
                    alt={produto.nome}
                    style={{ objectFit: "contain", height: "180px" }}
                  />
                </Link>
                <div className="card-body">
                  <p className={`${styles.cardText} mb-1`} style={{ fontSize: '12px', opacity: 0.4 }}>
                    {produto.categoria}
                  </p>
                  <h6 className="card-title" style={{ opacity: 0.7 }}>
                    {produto.nome}
                  </h6>
                  <div className="d-flex gap-2 align-items-center">
                    <h6 className={`${styles.cardText} mb-0`} style={{ fontWeight: 'bold' }}>
                      R${formatarPreco(produto.preco)}
                    </h6>
                  </div>
                  <button className="btn" style={{backgroundColor: "#C92071", color: "white"}}>Comprar</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardProd;
