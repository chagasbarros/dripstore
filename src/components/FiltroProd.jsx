import React, { useState } from "react";
import styles from "./FiltroProd.module.css";

const FiltroProd = ({ filtros, onFiltroChange }) => {
  const [showFiltro, setShowFiltro] = useState(false);

  const marcas = ["Nike", "Adidas", "Puma"];
  const categorias = ["Headphones", "Shoes", "Accessories"];
  const generos = ["Masculino", "Feminino", "Unisex"];
  const estados = ["Novo", "Usado"];
  
  const handleCheckbox = (tipo, valor) => {
    onFiltroChange(tipo, valor);
  };
  
  const handleRadio = (valor) => {
    onFiltroChange("state", valor);
  };

  React.useEffect(() => {
    if (!showFiltro) return;
    const handleClick = (e) => {
      if (
        !e.target.closest(`.${styles.filtroBox}`) &&
        !e.target.closest(`.${styles.filtroBtn}`)
      ) {
        setShowFiltro(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [showFiltro, styles.filtroBox, styles.filtroBtn]);

  return (
    <div className="h-100" style={{ maxWidth: "100%", width: "18rem" }}>
      {/* Botão só aparece no mobile */}
      <div className=" d-md-none" style={{ display: "flex", justifyContent: "end", marginBottom: "1rem" }}>
      <button
        className={` ${styles.filtroBtn}`}
        style={{
          display: "block",
          justifyContent: 'end',
          width: "100%",
          borderRadius: "0.5rem",
          padding: "10px 0px 10px 8px",
          textAlign: "center",
          maxWidth: 70,
          backgroundColor: "#d10f7d",
          color: "#ffffff",
          border: "none",
          marginRight: "1rem",
        }}
        onClick={() => setShowFiltro((v) => !v)}
      >
        <i className="bi bi-funnel-fill" style={{ marginRight: 8 }}></i>
        
      </button></div>

      {/* Painel de filtros: visível sempre no desktop, condicional no mobile */}
      <div className=" d-sm-block d-md-none position-relative"style={{ display: "flex", justifyContent: "center", left: "-40%", position:"absolute", margin:"10px"}}>
      <div
        className={`w-100 rounded-3 p-3 mx-auto ${styles.filtroBox}`}
        style={{
          backgroundColor: "#ffffff",
          maxWidth: 320,
          display: showFiltro ? "block" : undefined, // undefined deixa o CSS controlar no desktop
        }}
      >
        <p className="m-0">Filtrar por:</p>
        <hr />

        <div className="mb-3">
          <p className={styles.ptemafiltro}>Marca</p>
          {marcas.map((marca) => (
            <div key={marca}>
              <input
                type="checkbox"
                id={marca}
                checked={filtros.brand?.includes(marca)}
                onChange={() => handleCheckbox("brand", marca)}
              />
              <label htmlFor={marca}> {marca}</label>
            </div>
          ))}
        </div>

        <div className="mb-3">
          <p className={styles.ptemafiltro}>Categoria</p>
          {categorias.map((cat) => (
            <div key={cat}>
              <input
                type="checkbox"
                id={cat}
                checked={filtros.category?.includes(cat)}
                onChange={() => handleCheckbox("category", cat)}
              />
              <label htmlFor={cat}> {cat}</label>
            </div>
          ))}
        </div>

        <div className="mb-3">
          <p className={styles.ptemafiltro}>Gênero</p>
          {generos.map((gen) => (
            <div key={gen}>
              <input
                type="checkbox"
                id={gen}
                checked={filtros.gender?.includes(gen)}
                onChange={() => handleCheckbox("gender", gen)}
              />
              <label htmlFor={gen}> {gen}</label>
            </div>
          ))}
        </div>

        <div className="mb-3">
          <p className={styles.ptemafiltro}>Estado</p>
          {estados.map((est) => (
            <div key={est}>
              <input
                type="radio"
                name="estado"
                id={est}
                checked={filtros.state === est}
                onChange={() => handleRadio(est)}
              />
              <label htmlFor={est}> {est}</label>
            </div>
          ))}
        </div>
      </div>
      </div>

      <div className=" d-md-block d-sm-none d-none position-relative "style={{ display: "flex", justifyContent: "center"}}>
      <div
        className={`w-100 rounded-3 p-3 mx-auto ${styles.filtroBox}`}
        style={{
          backgroundColor: "#ffffff",
          maxWidth: 320,
          display: showFiltro ? "block" : undefined, // undefined deixa o CSS controlar no desktop
        }}
      >
        <p className="m-0">Filtrar por:</p>
        <hr />

        <div className="mb-3">
          <p className={styles.ptemafiltro}>Marca</p>
          {marcas.map((marca) => (
            <div key={marca}>
              <input
                type="checkbox"
                id={marca}
                checked={filtros.brand?.includes(marca)}
                onChange={() => handleCheckbox("brand", marca)}
              />
              <label htmlFor={marca}> {marca}</label>
            </div>
          ))}
        </div>

        <div className="mb-3">
          <p className={styles.ptemafiltro}>Categoria</p>
          {categorias.map((cat) => (
            <div key={cat}>
              <input
                type="checkbox"
                id={cat}
                checked={filtros.category?.includes(cat)}
                onChange={() => handleCheckbox("category", cat)}
              />
              <label htmlFor={cat}> {cat}</label>
            </div>
          ))}
        </div>

        <div className="mb-3">
          <p className={styles.ptemafiltro}>Gênero</p>
          {generos.map((gen) => (
            <div key={gen}>
              <input
                type="checkbox"
                id={gen}
                checked={filtros.gender?.includes(gen)}
                onChange={() => handleCheckbox("gender", gen)}
              />
              <label htmlFor={gen}> {gen}</label>
            </div>
          ))}
        </div>

        <div className="mb-3">
          <p className={styles.ptemafiltro}>Estado</p>
          {estados.map((est) => (
            <div key={est}>
              <input
                type="radio"
                name="estado"
                id={est}
                checked={filtros.state === est}
                onChange={() => handleRadio(est)}
              />
              <label htmlFor={est}> {est}</label>
            </div>
          ))}
        </div>
      </div>
      </div>

      {/* CSS para esconder/mostrar no mobile/desktop */}
      <style>{`
        @media (min-width: 768px) {
          .${styles.filtroBtn} { display: none !important; }
          .${styles.filtroBox} { display: block !important; }
        }
        @media (max-width: 767.98px) {
          .${styles.filtroBox} { display: none; }
          .${styles.filtroBox}[style*="display: block"] { display: block !important; }
        }
      `}</style>
    </div>
  );
};

export default FiltroProd;
