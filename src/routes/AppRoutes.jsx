// <<<<<<< HEAD
import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Produtos from '../pages/Produtos'
import Categoria from '../pages/Categorias'
import MeusPedidos from '../pages/MeusPedidos'
import Formulario from '../pages/Formulario'
import DescriProdutos from '../pages/DescriProdutos'



const AppRoutes = () => {
  return (
    <Routes>
{/* <<<<<<< HEAD */}
        <Route path='/' element={<Home />} />
        <Route path='/Produtos' element={<Produtos />} />
        <Route path='/Categoria' element={<DescriProdutos/>} />
        <Route path='/MeusPedidos' element={<MeusPedidos />} />
        <Route path='/Formulario' element={<Formulario />} />
{/* ======= */}
      <Route path="/DripStore" element={<Home />} />
     
    </Routes>
  );
};

export default AppRoutes;
