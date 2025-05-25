import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Produtos from "../pages/Produtos";
import Categoria from "../pages/Categorias";
import MeusPedidos from "../pages/MeusPedidos";
import Formulario from "../pages/Formulario";
import Sucesso from "../pages/Sucesso";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/DripStore" element={<Home />} />
      <Route path="/DripStore/Produtos" element={<Produtos />} />
      <Route path="/DripStore/Categoria" element={<Categoria />} />
      <Route path="/DripStore/MeusPedidos" element={<MeusPedidos />} />
      <Route path="/DripStore/Formulario" element={<Formulario />} />
      <Route path="/DripStore/Sucesso" element={<Sucesso/>} />
    </Routes>
  );
};

export default AppRoutes;
