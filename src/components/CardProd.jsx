import React from 'react'
import tenisFundoRemovido from '../assets/Produtos/TênisDigitalStoreFundoRemovido.png'

const CardProd = () => {
  return (
    <>
        <section className='d-flex'>
            <div className="container">
                <div className="row">
                        <div className="card" style={{width: "18rem"}}>
                            <img src={tenisFundoRemovido} className="card-img-top" alt="Tênis Digital Store" />
                            <div className="card-body">
                                <h5 className="card-title">Tênis Digital Store</h5>
                                <p className="card-text">R$ 199,99</p>
                                <a href="#" className="btn btn-primary">Ver Produto</a>
                            </div>
                        </div>
                        <div className="card" style={{width: "18rem"}}>
                            <img src={tenisFundoRemovido} className="card-img-top" alt="Tênis Digital Store" />
                            <div className="card-body">
                                <h5 className="card-title">Tênis Digital Store</h5>
                                <p className="card-text">R$ 199,99</p>
                                <a href="#" className="btn btn-primary">Ver Produto</a>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default CardProd