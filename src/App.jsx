import Header from "./components/header"
import AppRoutes from "./routes/AppRoutes"
import Footer from "./components/footer"
import Carrossel from "./components/Carrossel";


import { BrowserRouter } from "react-router-dom"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </div>
    
  );
}

export default App;
