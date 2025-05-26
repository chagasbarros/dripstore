import React from 'react';
import styles from './CardProd.module.css';

const CardProd = ({ produtos }) => {
  return (
    <section className="d-flex">
      <div className="container">
        <div className="row">
          {produtos.map((produto) => (
            <div className="col-6 col-md-4 col-lg-3 mb-4" key={produto.id}>
              <div className="card p-2 h-100">
                <img
                  src={produto.image}
                  className={`${styles.cardImg} card-img-top`}
                  alt={produto.title}
                  style={{ height: "60%" }}
                />
                <div className="card-body">
                  <p className={`${styles.cardText} mb-1`} style={{ fontSize: '12px', opacity: 0.4 }}>
                    {produto.category}
                  </p>
                  <h6 className="card-title" style={{ opacity: 0.7 }}>
                    {produto.title}
                  </h6>
                  <div className="d-flex gap-2 align-items-center">
                    <h6 className={`${styles.cardText} mb-0`} style={{ fontWeight: 'bold' }}>
                      R{produto.price}
                    </h6>
                  </div>
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
