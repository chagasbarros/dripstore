import React from 'react';
import styles from './FiltroProd.module.css';

const FiltroProd = () => {
  return (
    <div className="h-100" style={{ width: '18rem' }}>
      <div className="w-75 rounded-3 p-3 mx-5" style={{ backgroundColor: '#ffffff' }}>
        <p className="m-0">Filtrar por:</p>
        <hr />

        <div className="mb-3">
          <p className={styles.ptemafiltro}>Marca</p>
          {['Adidas', 'Balenciaga', 'K-Swiss', 'Nike', 'Puma'].map((marca) => (
            <div key={marca}>
              <input type="checkbox" id={marca} value={marca} />
              <label htmlFor={marca}> {marca}</label>
            </div>
          ))}
        </div>

        <div className="mb-3">
          <p className={styles.ptemafiltro}>Categoria</p>
          {['Esporte e lazer', 'Casual', 'Utilitários', 'Corrida'].map((cat) => (
            <div key={cat}>
              <input type="checkbox" id={cat} value={cat} />
              <label htmlFor={cat}> {cat}</label>
            </div>
          ))}
        </div>

        <div className="mb-3">
          <p className={styles.ptemafiltro}>Gênero</p>
          {['Masculino', 'Feminino', 'Unisex'].map((gen) => (
            <div key={gen}>
              <input type="checkbox" id={gen} value={gen} />
              <label htmlFor={gen}> {gen}</label>
            </div>
          ))}
        </div>

        <div className="mb-3">
          <p className={styles.ptemafiltro}>Estado</p>
          {['Novo', 'Usado'].map((estado) => (
            <div className="d-flex align-items-center" key={estado}>
              <input type="radio" name="estado" id={estado} value={estado} className="m-1" />
              <label htmlFor={estado} className="m-0">{estado}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FiltroProd;
