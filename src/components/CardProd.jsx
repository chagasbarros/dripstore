import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CardProd.module.css'
import tenisNike from '../assets/ProdDetDesign/tenisNike.svg'
import tenisNike2 from '../assets/ProdDetDesign/tenisNike2.svg'

const CardProd = ({ produtos }) => {
  return (
    <section className="d-flex">
      <div className="container">
        <div className="row">
            <div className="col-6 col-md-4 col-lg-3 mb-4">
              <div className="card p-2 h-75">
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
                <Link to={"/DripStore/DescricaoProd"}>
                <img
                  src={tenisNike2}
                  className={`${styles.cjardImg} card-img-top`}
                  alt={'TênisNike'} 
                /></Link>
                <div className="card-body">
                  <p className={`${styles.cardText} mb-1`} style={{ fontSize: '12px', opacity: 0.4 }}>
                    Tênis 
                  </p>
                  <h6 className="card-title" style={{ opacity: 0.7 }}>
                    {'Tênis Nike Revolution 6 Next Nature Masculino'}    
                  </h6>
                  <div className="d-flex gap-2 align-items-center">
                    <h6
                      className={`${styles.cardText} mb-0`}
                      style={{ textDecoration: 'line-through', opacity: 0.4 }}
                    >
                      R$ 319,00
                    </h6>
                    <h6 className={`${styles.cardText} mb-0`} style={{ fontWeight: 'bold' }}>
                      {'R$ 219,00'}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          {produtos.map((produto, index) => (
            <div className="col-6 col-md-4 col-lg-3 mb-4" key={index}>
              <div className="card p-2 h-75">
                <img
                  src={produto.image}
                  className={`${styles.cardImg} card-img-top`}
                  alt={produto.title}
                  style={{height: "60%"}}
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
