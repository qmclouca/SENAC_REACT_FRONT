import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrimeReactProvider } from 'primereact/api'; 
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css'; 
import "./App.css";
import PaginaInicial from "./Pages/PaginaInicial/PaginaInicial";
import Carrinho from "./Pages/Carrinho/Carrinho";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <PrimeReactProvider> {}
      <Router>
        <Routes>
          <Route path="/" element={<PaginaInicial />} />
          <Route path="/carrinho" element={<Carrinho />} />        
        </Routes>
      </Router>
    </PrimeReactProvider>
  );
};

export default App;