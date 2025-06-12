import React, { useState } from "react";
import style from "./DescricaoProd.module.css";
import tenisNike2 from "../assets/ProdDetDesign/tenisNike2.svg";
import tenisNike from "../assets/ProdDetDesign/tenisNike.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
//oi
const galeriaImgs = [
  { src: tenisNike2, bg: "#E2E3FF" },
  { src: tenisNike2, bg: "#FFE8BC" },
  { src: tenisNike2, bg: "#FFC0BC" },
  { src: tenisNike2, bg: "#DEC699" },
  { src: tenisNike2, bg: "#E8DFCF" },
];

const DescricaoProd = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <>
      <div className="container produto" style={{ padding: "2rem" }}>
        <section className="row">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <div
              className="galeria mb-3 d-flex justify-content-center align-items-center"
              style={{
                backgroundColor: galeriaImgs[selectedIdx].bg,
                padding: "2rem",
                minHeight: "400px",
                borderRadius: "12px",
              }}
            >
              <img
                src={galeriaImgs[selectedIdx].src}
                alt="Tenis Nike"
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
              {galeriaImgs.map((img, idx) => (
                <div
                  key={idx}
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: img.bg,
                    width: "100px",
                    height: "100px",
                    borderRadius: "8px",
                    border: selectedIdx === idx ? "2px solid #000" : "none",
                    cursor: "pointer",
                  }}
                  onClick={() => setSelectedIdx(idx)}
                >
                  <img
                    src={img.src}
                    alt={`Variação ${idx + 1}`}
                    style={{ width: "70px", cursor: "pointer" }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className={`col-12 col-md-6 ${style.infoproduto}`}>
            <h1 className="fs-4 fs-md-2">
              Tênis Nike Revolution 6 Next Nature Masculino
            </h1>
            <p className="text-black-50">Casual | Nike | REF: 38416711</p>
            <div className="d-flex align-items-center mb-2">
              <span className="me-2">⭐ 4.7</span>
              <span className="text-black-50">(90 avaliações)</span>
            </div>
            <div className="mb-3">
              <span className="fs-4 fw-bold">R$ 219,00</span>
              <span className="text-black-50 text-decoration-line-through ms-2">
                R$ 319,00
              </span>
            </div>
            <p>
              Descrição do produto: Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Delectus assumenda omnis cumque architecto autem
              sed ab nam repudiandae quas amet! Quam ab assumenda.
            </p>

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

        <section className={`mt-5 ${style.produtosrelacionados}`}>
          <h4>Produtos Relacionados</h4>
          <div className="row row-cols-2 row-cols-md-4 g-4">
            {[...Array(4)].map((_, idx) => (
              <div className="col" key={idx}>
                <div className="card h-100">
                  <div className={style.tagDesconto}>30% OFF</div>
                  <img
                    src={tenisNike}
                    className="card-img-top"
                    alt="nike"
                    style={{ objectFit: "contain", height: "140px" }}
                  />
                  <div className="card-body">
                    <p className="card-text">Tenis</p>
                    <h4 className="card-text">
                      Tenis Nike&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;Masculino
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
