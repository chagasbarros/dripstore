import Header from "./components/header"
import AppRoutes from "./routes/AppRoutes"
import Footer from "./components/footer"
import { BrowserRouter } from "react-router-dom"
import { SearchProvider } from "./contexts/SearchContext";
import { FormProvider } from "./contexts/FormContext";
import AdmHeader from "./components/AdmHeader";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <FormProvider>
          <SearchProvider>
        <BrowserRouter>
          <Header />
          <AppRoutes />
          <Footer />
        </BrowserRouter>
      </SearchProvider>
      </FormProvider>
      
    </div>
    
  );
}

export default App;
