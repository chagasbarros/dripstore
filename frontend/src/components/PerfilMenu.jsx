import { useState } from "react";

const PerfilMenu = () => {

   const[mostrarCard, setMostrarCard] = useState("perfil")

   

  return (
    <>
      <div className="container">
        <div className="row">
          <section className=" p-5 col-4 ">
            <div className="">
              <ul className="navbar-nav">
                <li
                  onClick={() => setMostrarCard("perfil")}
                  style={{ cursor: 'pointer' }}
                >
                 Meu Perfil
                </li>
                <hr />

                <li
                  onClick={() => setMostrarCard("pedido")}
                  style={{ cursor: 'pointer' }}
                >
                  Meus Pedidos
                </li>
                <hr />

                <li
                  onClick={() => setMostrarCard("informacao")}
                  style={{ cursor: 'pointer' }}
                >
                  Minhas Informações
                </li>
                <hr />

                <li
                  onClick={() => setMostrarCard("pagamento")}
                  style={{ cursor: 'pointer' }}
                >
                  Métodos de Pagamento
                </li>
              </ul>
            </div>
          </section>

          {mostrarCard === "perfil" && (
            <section className="bg-white p-5 col-8 ">
              <h1>As informações do Meu Perfil aparecerão aqui</h1>
            </section>
          )}

          {mostrarCard === "pedido" && (
            <section className="bg-white p-5 col-8">
              <h1>As informaçõe do Meu Pedido aparecerão aqui</h1>
            </section>
          )}

          {mostrarCard === "informacao" && (
            <section className="bg-white p-5 col-8">
              <div className="d-flex justify-content-between">
                <h6>Minhas Informações</h6>
                <a>Editar</a>
              </div>
              <hr />
              <div>
                <h5>Informações Pessoais</h5>
                <ul className="navbar-nav">
                  <li>Nome:</li>
                  <li>CPF:</li>
                  <li>Email:</li>
                  <li>Celular:</li>
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
                <a>Editar</a>
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
