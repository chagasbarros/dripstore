import React from "react";
import Header from "./components/header";
import Footer from "./components/footer"
import Carrossel from "./components/Carrossel";
import FormCadastro from "./components/FormCadastro";
import FormPagamento from "./components/FormaPagamento";
import FormaPagamento from "./components/FormaPagamento";
import FormCep from "./components/FormCep";






function App() {
  return (
    <div>
      <Header />
      <FormCep/>
      
      <Carrossel />
      <Footer />
    </div>
    
  );
}

export default App;
