import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Categorias.module.css';

// Imagens locais
import tv from '../assets/Produtos/televisao.webp';
import anel from '../assets/Produtos/anel.webp';
import camisaM from '../assets/Produtos/camisaM.avif';
import esporte from '../assets/Produtos/esporte.jpg';
import vestido from '../assets/Produtos/vestido.jpg';

const categoriaImagens = {
  'Eletrônicos': tv,
  'Joias': anel,
  'Roupas Masculinas': camisaM,
  'Roupas Femininas': vestido,
  'Esportes': esporte,
};

const categoriasMap = {
  electronics: 'Eletrônicos',
  jewelery: 'Joias',
  "men's clothing": 'Roupas Masculinas',
  "women's clothing": 'Roupas Femininas',
  sports: 'Esportes',
};

const CategoriasComp = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const data = await response.json();
        const extras = ['sports']; // Livros removido
        const todas = [...data, ...extras];
        const traduzidas = todas
          .map(cat => categoriasMap[cat] || null)
          .filter(Boolean);
        setCategorias(traduzidas);
      } catch (error) {
        console.error('Erro ao buscar categorias:', error);
      }
    };

    fetchCategorias();
  }, []);

  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-5">🛍️ Categorias</h1>
      <div className="row g-4 justify-content-center">
        {categorias.map((categoria, index) => (
          <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-3 d-flex align-items-stretch justify-content-center">
            <div className={`card text-center border-0 shadow-sm ${styles.card}`}>
              <div className="mx-auto mt-4">
                <img
                  src={categoriaImagens[categoria] || 'https://via.placeholder.com/140?text=?'}
                  alt={categoria}
                  title={categoria}
                  className={`rounded-circle ${styles.image}`}
                />
              </div>
              <div className="card-body">
                <h6 className="card-title fw-semibold">{categoria}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriasComp;
