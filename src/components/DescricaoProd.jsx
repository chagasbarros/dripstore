import React from "react";
import style from "./DescricaoProd.module.css";
import tenisNike2 from "../assets/ProdDetDesign/tenisNike2.svg";
import tenisNike from "../assets/ProdDetDesign/tenisNike.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

const DescricaoProd = () => {
  return (
    <>
      <div className="container produto " style={{ padding: "2rem" }}>
        <section className="row">
          <div className="col-md-6">
            <div
              className="galeria mb-3 d-flex justify-content-center"
              style={{ backgroundColor: "#E2E3FF", padding: "100px" }}
            >
              <img src={tenisNike2} alt="Tenis Nike" />
            </div>
            <div className="d-flex justify-content-between">
              <div
                className="d-flex justify-content-center"
                style={{
                  backgroundColor: " #E2E3FF",
                  width: "100px",
                  height: "80px",
                }}
              >
                <img
                  src={tenisNike2}
                  alt="Variação 3"
                  style={{ width: "80px", cursor: "pointer" }}
                />
              </div>
              <div
                className="d-flex justify-content-center"
                style={{
                  backgroundColor: " #FFE8BC",
                  width: "100px",
                  height: "80px",
                }}
              >
                <img
                  src={tenisNike2}
                  alt="Variação 3"
                  style={{ width: "80px", cursor: "pointer" }}
                />
              </div>
              <div
                className="d-flex justify-content-center"
                style={{
                  backgroundColor: " #FFC0BC",
                  width: "100px",
                  height: "80px",
                }}
              >
                <img
                  src={tenisNike2}
                  alt="Variação 3"
                  style={{ width: "80px", cursor: "pointer" }}
                />
              </div>
              <div
                className="d-flex justify-content-center"
                style={{
                  backgroundColor: " #DEC699",
                  width: "100px",
                  height: "80px",
                }}
              >
                <img
                  src={tenisNike2}
                  alt="Variação 3"
                  style={{ width: "80px", cursor: "pointer" }}
                />
              </div>
              <div
                className="d-flex justify-content-center"
                style={{
                  backgroundColor: " #E8DFCF",
                  width: "100px",
                  height: "80px",
                }}
              >
                <img
                  src={tenisNike2}
                  alt="Variação 3"
                  style={{ width: "80px", cursor: "pointer" }}
                />
              </div>
            </div>
          </div>

          <div className={`col-md-6 ${style.infoproduto}`}>
            <h1>Tênis Nike Revolution 6 Next Nature Masculino</h1>
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
              <div className="d-flex mt-2">
                <div className={`${style.tamanhopcao}`}>39</div>
                <div className={`${style.tamanhopcao} `}>40</div>
                <div className={`${style.tamanhopcao} `}>41</div>
                <div className={`${style.tamanhopcao} `}>42</div>
                <div className={`${style.tamanhopcao}`}>43</div>
              </div>
            </div>

            <div className="mb-3">
              <strong>Cor</strong> <br />
              <div className="d-flex mt-2">
                <div className={`${style.coropcao} ${style.corcyan}`}></div>
                <div className={`${style.coropcao} ${style.corgray}`}></div>
                <div className={`${style.coropcao} ${style.corpurple}`}></div>
                <div className={`${style.coropcao} ${style.corpink}`}></div>
              </div>
            </div>
            <Link to={"/DripStore/MeusPedidos"}>
              <button className="btn btn-warning btn-lg mt-3">COMPRAR</button>
            </Link>
          </div>
        </section>

        <section className={`mt-5 ${style.produtosrelacionados}`}>
          <h4>Produtos Relacionados</h4>
          <div className="row row-cols-2 row-cols-md-4 g-4">
            <div className="col">
              <div className="card">
                <div className={`${style.tagDesconto}`}>30% OFF</div>
                <img src={tenisNike} className="card-img-top" alt="nike" />
              </div>
              <div className="card-body">
                <p className="card-text">Tenis</p>
                <h4 className="card-text">
                  Tenis
                  Nike&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;Masculino
                </h4>
                <p>
                  <span className={`${style.precooriginal}`}>R$ 289,00</span>{" "}
                  <span className={`${style.precodiconto}`}>R$159,95</span>
                </p>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <div className={`${style.tagDesconto}`}>30% OFF</div>
                <img src={tenisNike} className="card-img-top" alt="nike" />
              </div>
              <div className="card-body">
                <p className="card-text">Tenis</p>
                <h4 className="card-text">
                  Tenis
                  Nike&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;Masculino
                </h4>
                <p>
                  <span className={`${style.precooriginal}`}>R$ 289,00</span>{" "}
                  <span className={`${style.precodiconto}`}>R$159,95</span>
                </p>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <div className={`${style.tagDesconto}`}>30% OFF</div>
                <img src={tenisNike} className="card-img-top" alt="nike" />
              </div>
              <div className="card-body">
                <p className="card-text">Tenis</p>
                <h4 className="card-text">
                  Tenis
                  Nike&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;Masculino
                </h4>
                <p>
                  <span className={`${style.precooriginal}`}>R$ 289,00</span>{" "}
                  <span className={`${style.precodiconto}`}>R$159,95</span>
                </p>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <div className={`${style.tagDesconto}`}>30% OFF</div>
                <img src={tenisNike} className="card-img-top" alt="nike" />
              </div>
              <div className="card-body">
                <p className="card-text">Tenis</p>
                <h4 className="card-text">
                  Tenis
                  Nike&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;Masculino
                </h4>
                <p>
                  <span className={`${style.precooriginal}`}>R$ 289,00</span>{" "}
                  <span className={`${style.precodiconto}`}>R$159,95</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DescricaoProd;
