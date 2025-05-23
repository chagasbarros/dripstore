import React from "react";
import tenis from "../assets/logo/tenis.svg";
import bolinha from "../assets/logo/bolinha.svg";
import camisa from "../assets/logo/camisa.svg";
import fone from "../assets/logo/fone.svg";
import sapato from "../assets/logo/sapato.svg";
import styles from './Carrossel.module.css';

const slides = [
  {
    title: "Queima de estoque Nike🔥",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    img: tenis,
    alt: "Tenis"
  },
  {
    title: "Promoção exclusiva Nike🔥",
    desc: "Aproveite descontos imperdíveis em toda a linha.",
    img: tenis,
    alt: "Tenis"
  },
  {
    title: "Promoção exclusiva Nike🔥",
    desc: "Aproveite descontos imperdíveis em toda a linha.",
    img: tenis,
    alt: "Tenis"
  },
  // Adicione mais slides aqui se quiser
];

const Carrossel = () => {
  return (
    <div className="container-fluid mb-5">
      <div
        className="container p-3 rounded-5"
        style={{ width: "80%", backgroundColor: "#f5f5f5" }}
      >
        <img
          src={bolinha}
          alt=""
          style={{ position: "relative", left: "75%", top: "40px" }}
        />

        <div
          id="carouselExample"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {slides.map((slide, idx) => (
              <div
                className={`carousel-item${idx === 0 ? " active" : ""}`}
                key={idx}
              >
                <div className="d-flex">
                  <div className="container d-md-none d-lg-block d-none">
                    <h1 className="fw-bold">
                      {slide.title.split("🔥")[0]}<br />estoque Nike🔥
                    </h1>
                    <p>{slide.desc}</p>
                    <a href="#">
                      <button className={styles.butaoo}>
                        <div>
                          <span>
                            <p>Ver-Ofertas</p>
                          </span>
                        </div>
                        <div>
                          <span>
                            <p>Interesse?</p>
                          </span>
                        </div>
                      </button>
                    </a>
                  </div>
                  <img
                    src={slide.img}
                    className={`d-block w-100 ${styles.sapatin}`}
                    alt={slide.alt}
                    style={{ objectFit: "contain", maxHeight: "400px" }}
                  />
                </div>
                <div className="container d-md-block d-lg-none">
                  <h1 className="fw-bold">{slide.title}</h1>
                  <p>{slide.desc}</p>
                  <a href="#">
                    <button className={styles.butaoo}>
                      <div>
                        <span>
                          <p>Ver-Ofertas</p>
                        </span>
                      </div>
                      <div>
                        <span>
                          <p>Interesse?</p>
                        </span>
                      </div>
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container justify-content-center align-content-center text-center">
        <h2 className="mb-5 fw-bold mt-5" style={{ color: "#474747" }}>
          Coleção em Destaque
        </h2>
        <div id="cartao" className="flex-lg-row flex-column d-flex text-start justify-content-center align-items-center">
          <div className={styles.parent}>
            <div className={styles.card}>
              <img src={camisa} alt="Camisa Supreme" />
              <div className={styles["content-box"]}>
                <span className={styles["card-title"]}>Camisa Supreme</span>
                <p className={styles["card-content"]}>Camisa super confortavel</p>
                <span className={styles["see-more"]}>Add Cart</span>
              </div>
              <div className={styles["date-box"]}>
                <span className={styles.month}>Maio</span>
                <span className={styles.date}>12</span>
              </div>
            </div>
          </div>
          <div className={styles.parent}>
            <div className={styles.card}>
              <img src={fone} alt="Fone Gamer" />
              <div className={styles["content-box"]}>
                <span className={styles["card-title"]}>Fone Gamer</span>
                <p className={styles["card-content"]}>Melhor qualidade de audio</p>
                <span className={styles["see-more"]}>Add Cart</span>
              </div>
              <div className={styles["date-box"]}>
                <span className={styles.month}>Maio</span>
                <span className={styles.date}>12</span>
              </div>
            </div>
          </div>
          <div className={styles.parent}>
            <div className={styles.card}>
              <img src={sapato} alt="Sapato Jordan" />
              <div className={styles["content-box"]}>
                <span className={styles["card-title"]}>Jordan</span>
                <p className={styles["card-content"]}>Super confortavel</p>
                <span className={styles["see-more"]}>Add Cart</span>
              </div>
              <div className={styles["date-box"]}>
                <span className={styles.month}>Maio</span>
                <span className={styles.date}>12</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrossel;
