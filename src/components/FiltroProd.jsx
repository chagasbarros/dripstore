import React from 'react'

const FiltroProd = () => {
  return (
    <div className='h-100' style={{width: "20rem"}}>
        <div className="w-75 rounded-3 p-3 mx-5" style={{backgroundColor: "#ffffff"}}>
          <p>Filtrar por: </p>
          <div className='row'> 
            <div>
                <hr/>
                <p>Marca</p>
                <input id="Adidas" type="checkbox"/>
                <label htmlFor="Adidas"> Adidas</label><br/>
                <input id="Calenciaga" type="checkbox" className="Checkbox"/>
                <label htmlFor="Calenciaga"> Balenciaga</label><br/>
                <input id="K-Swiss" type="checkbox" className="Checkbox"/>
                <label htmlFor="K-Swiss"> K-Swiss</label><br/>
                <input id="Nike" type="checkbox" className="Checkbox"/>
                <label htmlFor="Nike"> Nike</label><br/>
                <input id="Puma" type="checkbox" className="Checkbox"/>
                <label htmlFor="Puma"> Puma</label><br/>
            </div>
            <div>
                <p className="p-tema-filtro">Categoria</p>
                <input id="Esporte e lazer" type="checkbox" className="Checkbox"/>
                <label htmlFor="Esporte e lazer"> Esporte e lazer</label><br/>
                <input id="Casual" type="checkbox" className="Checkbox"/>
                <label htmlFor="Casual"> Casual</label><br/>
                <input id="Utilitários" type="checkbox" className="Checkbox"/>
                <label htmlFor="Utilitários"> Utilitários</label><br/>
                <input id="Corrida" type="checkbox" className="Checkbox"/>
                <label htmlFor="Corrida"> Corrida</label><br/>
            </div>
            <div>
                <p className="p-tema-filtro">Gênero</p>
                <input id="Masculino" type="checkbox" className="Checkbox"/>
                <label htmlFor="Masculino"> Masculino</label><br/>
                <input id="Feminino" type="checkbox" className="Checkbox"/>
                <label htmlFor="Feminino"> Feminino</label><br/>
                <input id="Unisex" type="checkbox" className="Checkbox"/>
                <label htmlFor="Unisex"> Unisex</label><br/>
            </div>
            <div>
                <p className="p-tema-filtro">Estado</p>
                <div className="d-flex align-items-center">
                <input type="radio" className="radio m-1" name="radio"/>
                <p className="d-inline-flex m-0">Novo</p><br/>
                </div>
                <div className="d-flex align-items-center">
                <input type="radio" className="radio m-1" name="radio"/>
                <p className="d-inline-flex m-0">Usado</p><br/>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default FiltroProd