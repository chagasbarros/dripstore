import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Produtos from '../pages/Produtos'
import Categoria from '../pages/Categorias'
import MeusPedidos from '../pages/MeusPedidos'
import Formulario from '../pages/Formulario'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Produtos' element={<Produtos />} />
        <Route path='/Categoria' element={<Categoria />} />
        <Route path='/MeusPedidos' element={<MeusPedidos />} />
        <Route path='/Formulario' element={<Formulario />} />
    </Routes>
  )
}

export default AppRoutes