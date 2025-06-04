import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Produtos from "../pages/Produtos";
import MeusPedidos from "../pages/MeusPedidos";
import Formulario from "../pages/Formulario";
import Sucesso from "../pages/Sucesso";
import DescricaoProd from "../pages/DescriProdutos"
import Categorias from "../pages/Categorias"
import styles from './Loade.module.css'
import CadastreSe from "../pages/CadastreSe";

const LoadingScreen = () => (
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
<div className={styles.loader} style={{margin:"0 auto"}}><span>Loading...</span></div>
</div>
);

const AppRoutes = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, [location]);

  if (loading) return <LoadingScreen />;

  return (
    <Routes>  
      <Route path="/DripStore" element={<Home />} />
      <Route path="/DripStore/Home" element={<Home />} />
      <Route path="/DripStore/Produtos" element={<Produtos />} />
      <Route path="/DripStore/DescricaoProd" element={<DescricaoProd/>} />
      <Route path="/DripStore/MeusPedidos" element={<MeusPedidos />} />
      <Route path="/DripStore/Formulario" element={<Formulario />} />
      <Route path="/DripStore/Sucesso" element={<Sucesso />} />
      <Route path="/DripStore/Categorias" element={<Categorias />} />
      <Route path="/DripStore/CadastreSe" element={<CadastreSe/>} />

    </Routes>
  );
};

export default AppRoutes;
