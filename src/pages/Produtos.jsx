import React from 'react'
import Ordenar from '../components/Ordenar'
import FiltroProd from '../components/FiltroProd'
import CardProd from '../components/CardProd'

const Produtos = () => {
  return (
    <div style={{backgroundColor: "#f9f8fe"}} >
      <Ordenar />
      <div className='d-flex'>
      <FiltroProd />
      <CardProd />
      </div>
    </div>
  )
}

export default Produtos