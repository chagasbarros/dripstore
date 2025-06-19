import { useEffect } from "react";
import Header from "./components/header";
import AdmHeader from "./components/AdmHeader";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import { SearchProvider } from "./contexts/SearchContext";
import { FormProvider } from "./contexts/FormContext";
import { UserProvider, UserContext } from "./contexts/UserContext";
import { useContext } from "react";

function AppContent() {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const usuarioStr = localStorage.getItem("usuario");
    if (usuarioStr && !user?.email) {
      try {
        const parsedUser = JSON.parse(usuarioStr);
        setUser(parsedUser);
      } catch (error) {
        console.error("Erro ao fazer parse do usuário:", error);
      }
    }
  }, [user, setUser]);

  return (
    <>
      {user?.id_roles === undefined && <Header />}
      {user?.id_roles === 1 && <AdmHeader />}
      {user?.id_roles === 2 && <Header />}
      <AppRoutes />
      <Footer />
    </>
  );
}

function App() {
  return (
    <FormProvider>
      <SearchProvider>
        <UserProvider>
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </UserProvider>
      </SearchProvider>
    </FormProvider>
  );
}

export default App;
