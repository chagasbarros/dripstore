// Ordenar.jsx
import React, { useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext';

const Ordenar = ({ ordem, setOrdem }) => {
  const { searchTerm } = useContext(SearchContext);

  return (
    <div className='container-fluid' style={{ width: "100%" }}>
      <section className="row mx-auto d-flex align-items-center" style={{ width: "90%" }}>
        <div className="col-6 my-3">
          <p className="m-0"><strong>Resultado para "{searchTerm}"</strong> - produtos</p>
        </div>
        <div className="col-6 text-end my-3">
          <p className="d-inline-flex"> Ordenar por:</p>
          <select
            className="h-75 p-2 rounded-2"
            value={ordem}
            onChange={(e) => setOrdem(e.target.value)}
          >
            <option value="Ordem de Criação">Ordem de Criação</option>
            <option value="popularidade">Popularidade</option>
          </select>
        </div>
      </section>
    </div>
  );
};

export default Ordenar;
