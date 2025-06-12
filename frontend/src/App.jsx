import { useEffect, useState } from "react";
import Header from "./components/header";
import AdmHeader from "./components/AdmHeader";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/footer";
import { BrowserRouter } from "react-router-dom";
import { SearchProvider } from "./contexts/SearchContext";
import { FormProvider } from "./contexts/FormContext";

function App() {
  const [usuario, setUsuario] = useState(2);

  useEffect(() => {
    const usuarioStr = localStorage.getItem("usuario");
    if (usuarioStr) {
      try {
        const parsedUser = JSON.parse(usuarioStr);
        setUsuario(parsedUser);
      } catch (error) {
        console.error("Erro ao fazer parse do usuário:", error);
      }
    }
  }, []);

  return (
    <div>
      <FormProvider>
        <SearchProvider>
          <BrowserRouter>
            {usuario?.id_roles === 1 && <AdmHeader />}
            {usuario?.id_roles === 2 && <Header />}
            <AppRoutes onLogin={setUsuario} />
            <Footer />
          </BrowserRouter>
        </SearchProvider>
      </FormProvider>
    </div>
  );
}

export default App;
