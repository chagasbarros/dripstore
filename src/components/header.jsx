import React, { useContext, useState } from "react";
import logoDrip from "../assets/logo/Vector.svg";
import cartDrip from "../assets/logo/carrinho.svg";
import { Link } from "react-router-dom";
import { SearchContext } from "../contexts/SearchContext";
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setSearchTerm } = useContext(SearchContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <header className="sticky-top bg-light shadow-sm</header>">
      <nav className="navbar navbar-expand-lg navbar-light px-4 py-3">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="#">
            <img
              src={logoDrip}
              alt="Logo"
              className="me-2"
              style={{ width: "40px", height: "40px" }}
            />
            <span
              className="text-pink fw-bold"
              style={{ color: "#d10f7d", fontSize: "1.5rem" }}
            >
              Digital Store
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <form
              className="d-flex mx-auto w-100 mt-3 mt-lg-0 justify-content-lg-center"
              onSubmit={handleSearch}
            >
              <input
                className={`${styles.form}`}
                type="search"
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Pesquisar produto..."
                aria-label="Search"
                style={{ maxWidth: "350px", padding: "0.5rem" }}
              />
              <button
                className={`btn btn-outline ${styles.pesquisa}`}
                type="submit"
                
              >
                <i className="bi bi-search"></i>
              </button>
            </form>
            <ul className="navbar-nav me-auto mt-3 mt-lg-0 d-xl-flex d-lg-none">
              <li className="nav-item">
                <Link
                  className="nav-link fw-bold"
                  to={"/DripStore"}
                  style={{
                    fontSize: "14px",
                    color: "#d10f7d",
                    whiteSpace: "nowrap",
                  }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-dark"
                  to="/DripStore/Produtos"
                  style={{ fontSize: "14px", whiteSpace: "nowrap" }}
                >
                  Produtos
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-dark"
                  to="/DripStore/Categoria"
                  style={{ fontSize: "14px", whiteSpace: "nowrap" }}
                >
                  Categoria
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-dark"
                  to="/DripStore/MeusPedidos"
                  style={{ fontSize: "14px", whiteSpace: "nowrap" }}
                >
                  Meus Pedidos
                </Link>
              </li>
            </ul>
            <div className="d-flex align-items-center mt-3 mt-lg-0">
              <Link
                to="/DripStore/Cadastro"
                className="me-3 text-decoration-none text-cian fw-bold"
                style={{ fontSize: "14px", whiteSpace: "nowrap" }}
              >
                Cadastre-se
              </Link>
              <Link
                to="/Formulario"
                className="btn btn-pink text-white fw-bold"
                style={{ backgroundColor: "#d10f7d" }}
              >
                Entrar
              </Link>
              <Link to="/DripStore/Carrinho" className="ms-3">
                <img
                  src={cartDrip}
                  alt="Carrinho"
                  style={{ width: "30px", height: "30px" }}
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="container col d-lg-flex d-none d-xl-none d-md-none">
        <ul className="navbar-nav me-auto d-flex flex-row mt-lg-0">
          <li className="nav-item mx-2">
            <Link
              className="nav-link fw-bold"
              to="/DripStore"
              style={{
                fontSize: "14px",
                color: "#d10f7d",
                whiteSpace: "nowrap",
              }}
            >
              Home
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link
              className="nav-link text-dark"
              to="/DripStore/Produtos"
              style={{ fontSize: "14px", whiteSpace: "nowrap" }}
            >
              Produtos
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link
              className="nav-link text-dark"
              to="/DripStore/Categoria"
              style={{ fontSize: "14px", whiteSpace: "nowrap" }}
            >
              Categoria
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link
              className="nav-link text-dark"
              to="/DripStore/MeusPedidos"
              style={{ fontSize: "14px", whiteSpace: "nowrap" }}
            >
              Meus Pedidos
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
