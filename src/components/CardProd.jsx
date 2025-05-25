import React from 'react';
import styles from './CardProd.module.css';

const CardProd = ({ produtos }) => {
  return (
    <section className="d-flex">
      <div className="container">
        <div className="row">
          {produtos.map((produto, index) => (
            <div className="col-6 col-md-4 col-lg-3 mb-4" key={index}>
              <div className="card p-2 h-100">
                <h6
                  className="rounded-5 p-1 text-center bold"
                  style={{
                    backgroundColor: '#E7ff86',
                    width: '35%',
                    fontSize: '10px',
                  }}
                >
                  30% OFF
                </h6>
                <img
                  src={produto.image}
                  className={`${styles.cardImg} card-img-top`}
                  alt={produto.title}
                />
                <div className="card-body">
                  <p className={`${styles.cardText} mb-1`} style={{ fontSize: '12px', opacity: 0.4 }}>
                    Tênis
                  </p>
                  <h6 className="card-title" style={{ opacity: 0.7 }}>
                    {produto.title}
                  </h6>
                  <div className="d-flex gap-2 align-items-center">
                    <h6
                      className={`${styles.cardText} mb-0`}
                      style={{ textDecoration: 'line-through', opacity: 0.4 }}
                    >
                      $200
                    </h6>
                    <h6 className={`${styles.cardText} mb-0`} style={{ fontWeight: 'bold' }}>
                      {produto.price}
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
