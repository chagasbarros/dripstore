import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Carrinho.module.css";

// Importando as imagens corretamente
import sapatoImg from "../assets/carrinho/sapato.png";
import nikeShoeImg from "../assets/carrinho/nike-shoe.png";

export default function PaginaCarrinho() {
  const [quantidade, setQuantidade] = useState(1);
  const [itemRemovido, setItemRemovido] = useState(false);

  const diminuirQuantidade = () => {
    if (quantidade > 1) setQuantidade(quantidade - 1);
  };

  const aumentarQuantidade = () => {
    setQuantidade(quantidade + 1);
  };

  const removerItem = () => {
    setItemRemovido(true);
  };

  const precoUnitario = 219;
  const desconto = itemRemovido ? 0 : 30;
  const subtotal = itemRemovido ? 0 : quantidade * precoUnitario;
  const total = subtotal - desconto;

  return (
    <div className="container-fluid bg-light-subtle py-4">
      <div className="row justify-content-center">

        {/* COLUNA PRINCIPAL */}
        <div className="col-12 col-lg-9 pe-lg-4">
          {/* CARD DO CARRINHO */}
          <div className="card p-3 p-md-4 mb-4 border-0 shadow-sm">

            {/* CABEÇALHO */}
            <div className="row border-bottom pb-3 mb-3 mx-0">
              <div className="col-12 col-md-6 mb-3 mb-md-0">
                <h5 className="fw-bold mb-0">MEU CARRINHO</h5>
              </div>
              <div className="col-12 col-md-6 d-none d-md-block">
                <div className="d-flex justify-content-between text-uppercase small fw-semibold">
                  <div className="text-center" style={{ width: "120px" }}>Quantidade</div>
                  <div className="text-center" style={{ width: "100px" }}>Unitário</div>
                  <div className="text-center" style={{ width: "100px" }}>Total</div>
                </div>
              </div>
            </div>

            {/* CONTEÚDO DO CARRINHO */}
            {itemRemovido ? (
              <div className="text-center py-5">
                <div className="mb-3">
                  <i className="bi bi-cart-x fs-1 text-muted"></i>
                </div>
                <h5 className="text-muted mb-2">Seu carrinho está vazio</h5>
                <p className="text-muted mb-4">
                  Adicione produtos para continuar sua compra
                </p>
                <button
                  className={`${styles.correstaurar} border-0 px-4 py-2 rounded-3`}
                  onClick={() => setItemRemovido(false)}
                >
                  Restaurar item
                </button>
              </div>
            ) : (
              <div className="row mx-0">
                {/* INFORMAÇÕES DO PRODUTO */}
                <div className="col-12 col-md-6 d-flex align-items-center mb-3 mb-md-0">
                  <div className="position-relative me-3 flex-shrink-0">
                    <img
                      src={sapatoImg}
                      alt="Tênis"
                      className="rounded-3"
                      style={{
                        width: "120px",
                        height: "100px",
                        objectFit: "contain",
                        backgroundColor: "#E2E3FF",
                      }}
                    />
                  </div>
                  <div>
                    <h6 className="mb-1 fw-semibold">
                      Tênis Nike Revolution 6 Next Nature Masculino
                    </h6>
                    <div className="text-muted small">
                      Cor: Vermelho / Branco
                    </div>
                    <div className="text-muted small">
                      Tamanho: <strong>42</strong>
                    </div>
                  </div>
                </div>

                {/* CONTROLES E PREÇOS */}
                <div className="col-12 col-md-6">
                  <div className="d-flex d-md-none justify-content-between small fw-semibold mb-2 text-muted px-2">
                    <div className="text-center" style={{ width: "33%" }}>Quantidade</div>
                    <div className="text-center" style={{ width: "33%" }}>Unitário</div>
                    <div className="text-center" style={{ width: "33%" }}>Total</div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    {/* QUANTIDADE */}
                    <div style={{ width: "120px" }}>
                      <div className="d-flex flex-column align-items-center">
                        <div className="d-flex align-items-center mb-2">
                          <button
                            className="btn btn-outline-secondary btn-sm rounded d-flex align-items-center justify-content-center"
                            style={{ width: "32px", height: "32px" }}
                            onClick={diminuirQuantidade}
                          >
                            -
                          </button>
                          <span className="mx-2 fw-semibold">{quantidade}</span>
                          <button
                            className="btn btn-outline-secondary btn-sm rounded d-flex align-items-center justify-content-center"
                            style={{ width: "32px", height: "32px" }}
                            onClick={aumentarQuantidade}
                          >
                            +
                          </button>
                        </div>
                        <button
                          className="btn btn-link p-0 text-decoration-underline text-muted small"
                          onClick={removerItem}
                        >
                          Remover item
                        </button>
                      </div>
                    </div>

                    {/* PREÇO UNITÁRIO */}
                    <div className="text-center" style={{ width: "100px" }}>
                      <div className="text-decoration-line-through text-muted small mb-1">
                        R$ 219,00
                      </div>
                      <div className="fw-semibold">
                        R$ {precoUnitario.toFixed(2)}
                      </div>
                    </div>

                    {/* TOTAL */}
                    <div className="text-center" style={{ width: "100px" }}>
                      <div className="text-decoration-line-through text-muted small mb-1">
                        R$ 219,00
                      </div>
                      <div className="fw-semibold">
                        R$ {(precoUnitario * quantidade).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <hr className="my-4" />

            {/* CUPOM E FRETE */}
            <div className="row g-3">
              <div className="col-12 col-md-6">
                <label className="form-label fw-semibold">Cupom de desconto</label>
                <div className="d-flex">
                  <input
                    type="text"
                    className={`form-control rounded-2 ${styles.BotaoOk}`}
                    placeholder="Insira seu código"
                  />
                  <button className={`${styles.BotaoOk} btn ms-2 rounded-2`}>
                    OK
                  </button>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <label className="form-label fw-semibold">Calcular frete</label>
                <div className="d-flex">
                  <input
                    type="text"
                    className={`form-control rounded-2 ${styles.BotaoOk}`}
                    placeholder="Insira seu CEP"
                  />
                  <button className={`${styles.BotaoOk} btn ms-2 rounded-2`}>
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* PRODUTOS RELACIONADOS */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h5 className="fw-bold mb-0">Produtos Relacionados</h5>
            <Link
              to="/DripStore/Produtos"
              className={`${styles.corvertodos} text-decoration-none fw-semibold`}
            >
              Ver todos →
            </Link>
          </div>

          <div className="row g-3">
            {[...Array(4)].map((_, i) => (
              <div className="col-6 col-md-3" key={i}>
                <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                  <div className="card-body p-3">
                    {i === 0 && (
                      <span
                        className={`${styles.corbotao} badge position-absolute top-0 start-0 m-2 text-black`}
                      >
                        30% OFF
                      </span>
                    )}
                    <div
                      className="d-flex justify-content-center align-items-center m-4 pb-3"
                      style={{ height: "120px" }}
                    >
                      <img
                        src={nikeShoeImg}
                        alt="Produto"
                        className="img-fluid"
                        style={{
                          maxHeight: "100%",
                          transform: "rotate(-19deg)",
                        }}
                      />
                    </div>
                    <div className="mt-3">
                      <small className="text-muted d-block">Tênis</small>
                      <h6 className="fw-semibold mb-1">K-Swiss V8 - Masculino</h6>
                      <div className="d-flex align-items-center">
                        <small className="text-muted text-decoration-line-through me-2">
                          R$ 200,00
                        </small>
                        <span className="fw-bold text-danger">R$ 100,00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RESUMO DO PEDIDO */}
        <div className="col-12 col-lg-3 mt-4 mt-lg-0 h-50">
          <div className="card border-0 shadow-sm p-4 h-100">
            <h5 className="fw-bold mb-4">RESUMO DO PEDIDO</h5>

            <div className="mb-3">
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Subtotal:</span>
                <span className="fw-semibold">R$ {subtotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Frete:</span>
                <span className="fw-semibold">Grátis</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Desconto:</span>
                <span className="fw-semibold">-R$ {desconto.toFixed(2)}</span>
              </div>
            </div>

            <hr className="my-2" />

            <div className="d-flex justify-content-between mb-3">
              <span className="fw-bold">Total</span>
              <span className="fw-bold fs-5 text-danger">
                R$ {total.toFixed(2)}
              </span>
            </div>

            <small className="d-block text-center text-muted mb-4">
              ou 10x de R$ {(total / 10).toFixed(2)} sem juros
            </small>

            <Link to="/DripStore/Formulario">
              <button className="btn btn-warning w-100 py-2 fw-bold text-white rounded-3">
                Finalizar Compra
              </button>
            </Link>
            <div className="mt-3 text-center">
              <small className="text-muted">
                <i className="bi bi-lock-fill me-2"></i>
                Compra 100% segura
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
