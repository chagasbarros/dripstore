import React, { useState, useEffect } from "react";
import style from "./DescricaoProd.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link, useParams } from "react-router-dom";

const imagemPadrao = "https://lojastartover.com.br/wp-content/uploads/2021/09/576E54DA-FEE6-44D9-B5BC-CAA96B847E41.jpeg";

const galeriaImgsBG = [
  "#E2E3FF",
  "#FFE8BC",
  "#FFC0BC",
  "#DEC699",
  "#E8DFCF",
];

const DescricaoProd = () => {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/produtos/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Produto não encontrado");
        return res.json();
      })
      .then((data) => {
        setProduto(data);
      })
      .catch(() => setProduto(null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <p className="text-center my-5">Carregando produto...</p>;
  }

  if (!produto) {
    return <p className="text-center my-5">Produto não encontrado.</p>;
  }

  return (
    <>
      <div className="container produto" style={{ padding: "2rem" }}>
        <section className="row">
          {/* Galeria de imagens */}
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <div
              className="galeria mb-3 d-flex justify-content-center align-items-center"
              style={{
                backgroundColor: galeriaImgsBG[selectedIdx],
                padding: "2rem",
                minHeight: "400px",
                borderRadius: "12px",
              }}
            >
              <img
                src={imagemPadrao}  // link fixo aqui
                alt={produto.nome}
                style={{
                  width: "110%",
                  maxWidth: "450px",
                  height: "auto",
                  objectFit: "contain",
                }}
                className="img-fluid"
              />
            </div>
            <div className="d-flex justify-content-center flex-wrap gap-2">
              {galeriaImgsBG.map((bg, idx) => (
                <div
                  key={idx}
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: bg,
                    width: "100px",
                    height: "100px",
                    borderRadius: "8px",
                    border: selectedIdx === idx ? "2px solid #000" : "none",
                    cursor: "pointer",
                  }}
                  onClick={() => setSelectedIdx(idx)}
                >
                  <img
                    src={imagemPadrao}  // link fixo aqui também
                    alt={`Variação ${idx + 1}`}
                    style={{ width: "70px", cursor: "pointer" }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Informações do produto */}
          <div className={`col-12 col-md-6 ${style.infoproduto}`}>
            <h1 className="fs-4 fs-md-2">{produto.nome}</h1>
            <p className="text-black-50">
              {produto.categoria} | REF: {produto.id}
            </p>
            <div className="d-flex align-items-center mb-2">
              <span className="me-2">⭐ 4.7</span>
              <span className="text-black-50">(90 avaliações)</span>
            </div>
            <div className="mb-3">
              <span className="fs-4 fw-bold">
                R$ {Number(produto.preco).toFixed(2)}
              </span>
              <span className="text-black-50 text-decoration-line-through ms-2">
                R$ {(produto.preco * 1.3).toFixed(2)}
              </span>
            </div>
            <p>{produto.descricao || "Sem descrição disponível."}</p>

            <div className="mb-3">
              <strong>Tamanho</strong> <br />
              <div className="d-flex mt-2 flex-wrap gap-2">
                <div className={style.tamanhopcao}>39</div>
                <div className={style.tamanhopcao}>40</div>
                <div className={style.tamanhopcao}>41</div>
                <div className={style.tamanhopcao}>42</div>
                <div className={style.tamanhopcao}>43</div>
              </div>
            </div>

            <div className="mb-3">
              <strong>Cor</strong> <br />
              <div className="d-flex mt-2 gap-2">
                <div className={`${style.coropcao} ${style.corcyan}`}></div>
                <div className={`${style.coropcao} ${style.corgray}`}></div>
                <div className={`${style.coropcao} ${style.corpurple}`}></div>
                <div className={`${style.coropcao} ${style.corpink}`}></div>
              </div>
            </div>
            <Link to={"/DripStore/MeusPedidos"}>
              <button className="btn btn-warning btn-lg mt-3 w-100 w-md-auto">
                COMPRAR
              </button>
            </Link>
          </div>
        </section>

        {/* Produtos relacionados (fixos, imagem padrão) */}
        <section className={`mt-5 ${style.produtosrelacionados}`}>
          <h4>Produtos Relacionados</h4>
          <div className="row row-cols-2 row-cols-md-4 g-4">
            {[...Array(4)].map((_, idx) => (
              <div className="col" key={idx}>
                <div className="card h-100">
                  <div className={style.tagDesconto}>30% OFF</div>
                  <img
                    src={imagemPadrao}  // link fixo aqui
                    className="card-img-top"
                    alt="nike"
                    style={{ objectFit: "contain", height: "140px" }}
                  />
                  <div className="card-body">
                    <p className="card-text">Tênis</p>
                    <h4 className="card-text">
                      Tênis Nike&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;Masculino
                    </h4>
                    <p>
                      <span className={style.precooriginal}>R$ 289,00</span>{" "}
                      <span className={style.precodiconto}>R$159,95</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Extra responsive tweaks */}
      <style>{`
        @media (max-width: 767.98px) {
          .produto {
            padding: 1rem !important;
          }
          .${style.infoproduto} h1 {
            font-size: 1.2rem !important;
          }
        }
        @media (max-width: 575.98px) {
          .galeria img {
            max-width: 200px !important;
          }
        }
      `}</style>
    </>
  );
};

export default DescricaoProd;
