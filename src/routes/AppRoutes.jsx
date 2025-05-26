
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

        <Route path='/DripStore/' element={<Home />} />
        <Route path='/DripStore/Produtos' element={<Produtos />} />
        <Route path='/DripStore/Categoria' element={<DescriProdutos/>} />
        <Route path='/DripStore/MeusPedidos' element={<MeusPedidos />} />
        <Route path='/DripStore/Formulario' element={<Formulario />} />

     
    </Routes>
  );
};

export default AppRoutes;
