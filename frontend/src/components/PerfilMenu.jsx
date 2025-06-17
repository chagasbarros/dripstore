import { useState, useEffect } from "react";
import PerfilInformacao from "./PerfilInformacao";
import PerfilPedido from "./PerfilPedido";
import PerfilPessoal from "./PerfilPessoal";
import PerfilPagamento from "./PerfilPagamento";

const PerfilMenu = () => {

  const [perfil, setPerfil] = useState(null)
  const[mostrarCard, setMostrarCard] = useState("perfil")

  let usuarioLocal = JSON.parse(localStorage.getItem('usuario'))
  const idPerfil = usuarioLocal.id

  useEffect(() => {

    if(!idPerfil) return
    
    async function buscarPerfil() {
      try {
        const resposta = await fetch(`http://localhost:3000/perfil/${idPerfil}`)
        const dados = await resposta.json()
        setPerfil(dados)
      } catch (erro) {
        console.error('Erro ao buscar Perfil', erro)
      }
    }

    buscarPerfil()
  }, [idPerfil])

  
  console.log(perfil)

  return (
    <>
      <div className="container vh-100">
        <div className="row">
          <section className=" p-5 col-4 ">
            <div className="">
              <ul className="navbar-nav">
                <li
                  onClick={() => setMostrarCard("perfil")}
                  style={{ cursor: "pointer" }}
                >
                  Meu Perfil
                </li>
                <hr />

                <li
                  onClick={() => setMostrarCard("pedido")}
                  style={{ cursor: "pointer" }}
                >
                  Meus Pedidos
                </li>
                <hr />

                <li
                  onClick={() => setMostrarCard("informacao")}
                  style={{ cursor: "pointer" }}
                >
                  Minhas Informações
                </li>
                <hr />

                <li
                  onClick={() => setMostrarCard("pagamento")}
                  style={{ cursor: "pointer" }}
                >
                  Métodos de Pagamento
                </li>
              </ul>
            </div>
          </section>

          {mostrarCard === "perfil" && perfil &&  (
            <div className="col-8"><PerfilInformacao perfil={perfil}/></div>
            )}

          {mostrarCard === "pedido" && perfil && (
            <div className="col-8"><PerfilPedido/></div>
          )}

          {mostrarCard === "informacao" && perfil && (
            <div className="col-8"><PerfilPessoal perfil={perfil}/></div>
          )}

          {mostrarCard === "pagamento" && perfil && (
            <div className="col-8"><PerfilPagamento perfil={perfil}/></div>
          )}
        </div>
      </div>
    </>
  );
};

export default PerfilMenu;
