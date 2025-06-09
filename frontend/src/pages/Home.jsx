import React from 'react'
import Carrossel from '../components/Carrossel'
import ProdutosEmAlta from '../components/ProdutosEmAlta'
import BannerOferta from '../components/BannerOferta'
import ColecoesEmDestaque from '../components/ColecoesEmDestaque '

const Home = () => {
  return (
    <div>
      <Carrossel />
      <ColecoesEmDestaque/>
      <ProdutosEmAlta />
      <BannerOferta/>
    </div>
  )
}

export default Home