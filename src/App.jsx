import React from "react";
import Header from "./components/header";
import Footer from "./components/footer"
import Carrossel from "./components/Carrossel";
import FormCadastro from "./components/FormCadastro";
import FormPagamento from "./components/FormaPagamento";
import FormaPagamento from "./components/FormaPagamento";






function App() {
  return (
    <div>
      <Header />
      <FormCadastro/>
      
      <Carrossel />
      <Footer />
    </div>
    
  );
}

export default App;
