import React from "react";
import bannerImg from "../assets/Produtos/jordan.svg";
import elli from "../assets/logo/elli.png";

const BannerOferta = () => {
    return (
        <section className="container py-5">
            <div className="row align-items-center">
                <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
                    <div
                        className="rounded-circle d-inline-block position-relative overflow-hidden"
                        style={{
                            width: "100%",
                            maxWidth: "400px",
                            height: "auto",
                            aspectRatio: "11/8",
                            background: "radial-gradient(circle at center, #f7f5ff 0%, transparent 70%)",
                            backgroundImage: `url(${elli})`,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            padding: 0,
                        }}
                    >
                        <img
                            src={bannerImg}
                            alt="Air Jordan edição de colecionador"
                            className="img-fluid position-absolute top-50 start-50 translate-middle"
                            style={{ maxHeight: "180px", width: "100%", objectFit: "contain" }}
                        />
                    </div>
                </div>
                <div className="col-12 col-md-6 text-center text-md-start">
                    <p className="text fw-semibold small mb-1" style={{ color: '#d10f7d' }}>Oferta especial</p>
                    <h2 className="fw-bold mb-3">Air Jordan edição de colecionador</h2>
                    <p className="text-muted mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                    </p>
                    <a href="#" className="btn px-4 py-2 fw-semibold" style={{ backgroundColor: '#d10f7d', color: '#fff' }}>
                        Ver Oferta
                    </a>
                </div>
            </div>
        </section>
    );
};

export default BannerOferta;
