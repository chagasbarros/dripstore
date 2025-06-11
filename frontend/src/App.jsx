import Header from "./components/header"
import AppRoutes from "./routes/AppRoutes"
import Footer from "./components/footer"
import { BrowserRouter } from "react-router-dom"
import { SearchProvider } from "./contexts/SearchContext";
import { FormProvider } from "./contexts/FormContext";
import AdmHeader from "./components/AdmHeader";



function App() {

  
  let logado = JSON.parse(localStorage.getItem('usuario')).id_roles
  console.log(logado)


  return (
    <div>
      <FormProvider>
          <SearchProvider>
        <BrowserRouter>
          {logado == 2 && <Header />}
          {logado == 1 && <AdmHeader />}
          <AppRoutes />
          <Footer />
        </BrowserRouter>
      </SearchProvider>
      </FormProvider>
      
    </div>
    
  );
}

export default App;
