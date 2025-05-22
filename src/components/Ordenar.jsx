import React, {useContext} from 'react'
import { SearchContext } from '../contexts/SearchContext'

const Ordenar = () => {
    const {searchTerm} = useContext(SearchContext)
  return (
    <>
        <div className='container-fluid'>
            <section className="row mx-auto d-flex align-items-center">
                <div className="col-6 text-start my-3">
                    <p className="m-0">Resultado para "<strong>{searchTerm}</strong>"" - produtos</p>
                </div>
                <div className="col-6 text-end my-3">
                    <p className="d-inline-flex"> Ordenar por:</p>
                    <select className="h-75 p-2 rounded-2">
                        <option value="relevante">mais relevante</option>
                        <option value="preco">Menor preço</option>
                        <option value="popularidade">Mais populares</option>
                        <option value="avaliacao">Melhor avaliados</option>
                    </select>
                </div>
            </section>
        </div>
    </>
  )
}

export default Ordenar