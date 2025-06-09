import React, { useEffect, useState } from 'react';
import Ordenar from '../components/Ordenar';
import FiltroProd from '../components/FiltroProd';
import CardProd from '../components/CardProd';
import produtosJson from '../assets/produtos.json';

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);
  const [ordem, setOrdem] = useState("relevante");
  const [filtros, setFiltros] = useState({
    brand: [],
    category: [],
    gender: [],
    estado: ''
  });

  const handleFiltro = (tipo, valor) => {
    if (tipo === 'estado') {
      setFiltros({ ...filtros, estado: filtros.estado === valor ? '' : valor });
    } else {
      const existe = filtros[tipo].includes(valor);
      const atualizado = existe
        ? filtros[tipo].filter(item => item !== valor)
        : [...filtros[tipo], valor];
      setFiltros({ ...filtros, [tipo]: atualizado });
    }
  };

  const filtrarProdutos = () => {
    return produtos.filter(produto => {
      const marcaOK = filtros.brand.length === 0 || filtros.brand.includes(produto.brand);
      const categoriaOK = filtros.category.length === 0 || filtros.category.includes(produto.category);
      const generoOK = filtros.gender.length === 0 || filtros.gender.includes(produto.gender);
      const estadoOK = filtros.estado === '' || produto.estado === filtros.estado;
      return marcaOK && categoriaOK && generoOK && estadoOK;
    });
  };

  const ordenarProdutos = (lista) => {
    const copia = [...lista];
    if (ordem === 'preco') {
      return copia.sort((a, b) => a.price - b.price);
    } else if (ordem === 'popularidade') {
      return copia.sort((a, b) => b.popularidade - a.popularidade); // precisa ter essa chave no JSON
    }
    return copia; // relevante = padrão
  };

  useEffect(() => {
    setProdutos(produtosJson);
  }, []);

  const produtosFiltradosEOrdenados = ordenarProdutos(filtrarProdutos());

  return (


    
    <div style={{ backgroundColor: '#f9f8f6' }}>
      
      <Ordenar ordem={ordem} setOrdem={setOrdem} />
      
      <div className=" justify-content-end  d-flex d-md-none">
        <FiltroProd filtros={filtros} onFiltroChange={handleFiltro} />
        </div><div  className="d-flex justify-content-center d-md-none">

        <CardProd produtos={produtosFiltradosEOrdenados} />
      </div>
      <div className=" d-none d-md-flex">
        <FiltroProd filtros={filtros} onFiltroChange={handleFiltro} />
        <CardProd produtos={produtosFiltradosEOrdenados} />
      </div>
    </div>
    
  );
};
export default Produtos