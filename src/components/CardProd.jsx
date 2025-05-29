import styles from './CardProd.module.css'
import image from '../assets/ProdDetDesign/tenisNike2.svg'
import { Link } from 'react-router-dom';

const CardProd = ({ produtos }) => {
  return (
    <section className="d-flex">
      <div className="container">
        <div className="row">
          {/* Card fixo */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card p-2 h-100">
              <Link to="/DripStore/DescricaoProd">
                <img
                  src={image}
                  className={`${styles.cardImg} card-img-top img-fluid`}
                  alt={'Tênis Nike'}
                  style={{ objectFit: "contain", height: "180px", marginTop: "30px" }}
                />
              </Link>
              <div className="card-body py-4">
                <p className={`${styles.cardText} mb-1`} style={{ fontSize: '12px', opacity: 0.4 }}>
                  Tênis
                </p>
                <h6 className="card-title" style={{ opacity: 0.7 }}>
                  Tênis Nike Revolution 6 Next Nature Masculino
                </h6>
                <div className="d-flex gap-2 align-items-center">
                  <h6 className={`${styles.cardText} mb-0`} style={{ textDecoration: "line-through", opacity: 0.5 }}>
                    R$ 319,00
                  </h6>
                  <h6 className={`${styles.cardText} mb-0`} style={{ fontWeight: 'bold' }}>
                    R$ 219,00
                  </h6>
                </div>
              </div>
            </div>
          </div>
          {/* Cards dinâmicos */}
          {produtos.map((produto) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={produto.id}>
              <div className="card p-2 h-100">
                <img
                  src={produto.image}
                  className={`${styles.cardImg} card-img-top img-fluid`}
                  alt={produto.title}
                  style={{ objectFit: "contain", height: "180px" }}
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
                      R${produto.price}
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
