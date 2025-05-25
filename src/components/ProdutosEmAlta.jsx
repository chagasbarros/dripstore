import React, { useEffect, useState } from "react";

const ProdutosEmAlta = () => {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products?limit=8")
            .then(resposta => resposta.json())
            .then(dados => setProdutos(dados));
    }, []);

    const calcularDesconto = (precoOriginal, percentual) => {
        return (precoOriginal - (precoOriginal * percentual / 100)).toFixed(2);
    };

    return (
        <section style={{ background: "#f7f5ff" }} className="py-5 px-2 px-md-4 rounded-3">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-2">
                <h2 className="fs-6 fw-bold mb-0">Produtos em alta</h2>
                <a href="#" className="text-decoration-none small fw-medium" style={{ color: '#d10f7d' }}>
                    Ver todos →
                </a>
            </div>

            <div
                className="row g-3 g-md-4 justify-content-center"
            >
                {produtos.map((produto, indice) => {
                    const temDesconto = indice % 3 === 0;
                    const precoComDesconto = calcularDesconto(produto.price, 30);

                    return (
                        <div
                            className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
                            key={produto.id}
                        >
                            <div
                                className="card h-100 border-0 shadow-sm rounded-3 position-relative w-100"
                                style={{
                                    transition: "transform .2s",
                                    cursor: "pointer",
                                    maxWidth: "100%",
                                    minWidth: 0,
                                    padding: "14px",
                                    margin: "0 0 8px 0",
                                    display: "flex",
                                    flexDirection: "column"
                                }}
                                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.02)")}
                                onMouseLeave={e => (e.currentTarget.style.transform = "none")}
                            >
                                <div className="position-relative bg-white d-flex justify-content-center align-items-center" style={{ minHeight: "120px" }}>
                                    {temDesconto && (
                                        <span
                                            className="position-absolute top-0 start-0 m-2 badge rounded-pill fw-bold"
                                            style={{
                                                background: "#ecffdb",
                                                color: "#4aa71b",
                                                fontSize: ".65rem"
                                            }}
                                            aria-label="30% de desconto"
                                        >
                                            30% OFF
                                        </span>
                                    )}
                                    <img
                                        src={produto.image}
                                        alt={produto.title}
                                        className="card-img-top p-2"
                                        style={{
                                            objectFit: "contain",
                                            height: "7rem",
                                            width: "100%",
                                            maxWidth: "120px"
                                        }}
                                    />
                                </div>
                                <div className="card-body text-center p-2 d-flex flex-column justify-content-between" style={{ flex: 1 }}>
                                    <p className="text-muted small mb-1">Tênis</p>
                                    <h3
                                        className="fs-6 fw-semibold mb-2"
                                        style={{
                                            display: "-webkit-box",
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: "vertical",
                                            overflow: "hidden",
                                            fontSize: "0.95rem",
                                            minHeight: "2.4em"
                                        }}
                                    >
                                        {produto.title}
                                    </h3>
                                    <p className="mb-0" style={{ fontSize: "0.95rem" }}>
                                        <span className="text-decoration-line-through text-black-50 me-1">
                                            R${produto.price}
                                        </span>
                                        <span className="fw-bold">
                                            R${temDesconto ? precoComDesconto : produto.price}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ProdutosEmAlta;
