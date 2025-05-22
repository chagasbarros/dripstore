import Header from "./components/header"
import AppRoutes from "./routes/AppRoutes"
import Footer from "./components/footer"
import Carrossel from "./components/Carrossel";


import { BrowserRouter } from "react-router-dom"
import { SearchProvider } from "./contexts/SearchContext";

function App() {
  return (
    <div>
      <SearchProvider>
        <BrowserRouter>
          <Header />
          <AppRoutes />
          <Footer />
        </BrowserRouter>
      </SearchProvider>
    </div>
    
  );
}

export default App;
