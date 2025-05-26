import styles from './FiltroProd.module.css';

const FiltroProd = ({ filtros, onFiltroChange }) => {
  const marcas = ['Nike', 'Adidas', 'Puma'];
  const categorias = ['Headphones', 'Shoes', 'Accessories'];
  const generos = ['Masculino', 'Feminino', 'Unisex'];
  const estados = ['Novo', 'Usado'];

  const handleCheckbox = (tipo, valor) => {
    onFiltroChange(tipo, valor);
  };

  const handleRadio = (valor) => {
    onFiltroChange('estado', valor);
  };

  return (
    <div className="h-100" style={{ width: '18rem' }}>
      <div className="w-75 rounded-3 p-3 mx-5" style={{ backgroundColor: '#ffffff' }}>
        <p className="m-0">Filtrar por:</p>
        <hr />

        <div className="mb-3">
          <p className={styles.ptemafiltro}>Marca</p>
          {marcas.map((marca) => (
            <div key={marca}>
              <input
                type="checkbox"
                id={marca}
                checked={filtros.brand.includes(marca)}
                onChange={() => handleCheckbox('brand', marca)}
              />
              <label htmlFor={marca}> {marca}</label>
            </div>
          ))}
        </div>

        <div className="mb-3">
          <p className={styles.ptemafiltro}>Categoria</p>
          {categorias.map((cat) => (
            <div key={cat}>
              <input
                type="checkbox"
                id={cat}
                checked={filtros.category.includes(cat)}
                onChange={() => handleCheckbox('category', cat)}
              />
              <label htmlFor={cat}> {cat}</label>
            </div>
          ))}
        </div>

        <div className="mb-3">
          <p className={styles.ptemafiltro}>Gênero</p>
          {generos.map((gen) => (
            <div key={gen}>
              <input
                type="checkbox"
                id={gen}
                checked={filtros.gender.includes(gen)}
                onChange={() => handleCheckbox('gender', gen)}
              />
              <label htmlFor={gen}> {gen}</label>
            </div>
          ))}
        </div>

        <div className="mb-3">
          <p className={styles.ptemafiltro}>Estado</p>
          {estados.map((est) => (
            <div key={est}>
              <input
                type="radio"
                name="estado"
                id={est}
                checked={filtros.estado === est}
                onChange={() => handleRadio(est)}
              />
              <label htmlFor={est}> {est}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FiltroProd;
