import { useState } from "react";

const PerfilMenu = () => {

   const[mostrarCard, setMostrarCard] = useState("perfil")
   let usuario = JSON.parse(localStorage.getItem('usuario')) || {}
   
//oi
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

          {mostrarCard === "perfil" && (
            <section className="bg-white p-5 col-8 ">
              <div className="d-flex justify-content-between">
                <h6>Informações de Perfil</h6>
                <button
                  className="btn btn-pink text-white fw-bold"
                  style={{ backgroundColor: "#d10f7d" }}
                >
                  Alterar
                </button>
              </div>
              <hr />
              <div className="container">
                <h4 className="mb-3">Alterar Senha</h4>
                <div className="row">
                  <div className="col-6">
                  <label htmlFor="" className="form-label"> Digite nova Senha: </label>
                  <input type="password" name="" id="" className="form-control" placeholder="Digite nova senha" />
                </div>
                <div className="col-6">
                  <label htmlFor="" className="form-label"> Repita nova Senha: </label>
                  <input type="password" name="" id="" className="form-control" placeholder="Repita nova senha" />
                </div>
                </div>
                <div className="mt-4">
                  <span>Data de criação da Conta:</span> 
                </div>
                
                
              </div>
            </section>
          )}

          {mostrarCard === "pedido" && (
            <section className="bg-white p-5 col-8">
              <h1>Não há pedidos</h1>
            </section>
          )}

          {mostrarCard === "informacao" && (
            <section className="bg-white p-5 col-8">
              <div className="d-flex justify-content-between">
                <h6>Minhas Informações</h6>
                <button
                  className="btn btn-pink text-white fw-bold"
                  style={{ backgroundColor: "#d10f7d" }}
                >
                  Editar
                </button>
              </div>
              <hr />
              <div>
                <h5>Informações Pessoais</h5>
                <ul className="navbar-nav">
                  <li>Nome: {usuario.nome || ""}</li>{" "}
                  {/*chagas, eu alterei aqui. */}
                  <li>CPF: {usuario.cpf_cnpj || " "}</li>{" "}
                  {/*chagas, eu alterei aqui. */}
                  <li>Email: {usuario.email || " "}</li>{" "}
                  {/*chagas, eu alterei aqui. */}
                  <li>Celular: {usuario.telefone || " "}</li>{" "}
                  {/*chagas, eu alterei aqui. */}
                </ul>
                <hr />
              </div>

              <div>
                <h5>Informações de Entrega</h5>
                <ul className="navbar-nav">
                  <li>Endereço:</li>
                  <li>Bairro:</li>
                  <li>Cidade:</li>
                  <li>CEP:</li>
                </ul>
              </div>
            </section>
          )}

          {mostrarCard === "pagamento" && (
            <section className="bg-white p-5 col-8">
              <div className="d-flex justify-content-between">
                <h6>Métodos de pagamento</h6>
                <button
                  className="btn btn-pink text-white fw-bold"
                  style={{ backgroundColor: "#d10f7d" }}
                >
                  Editar
                </button>
              </div>
              <hr />
              <div>
                <h5>Informações de pagamento</h5>
                <ul className="navbar-nav">
                  <li>Nome do Titular:</li>
                  <li>Final do Cartão:</li>
                </ul>
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
};

export default PerfilMenu;
