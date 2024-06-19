import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import "./App.css";
import PaginaInicial from "./Pages/PaginaInicial/PaginaInicial";
import Autor from "./Pages/Autor/Autor";
import Cardapio from "./Pages/Cardapio/Cardapio";
import Shares from "./Pages/Shares/Share";
import FormularioEx from "./Pages/FormularioEx/FormularioEx";
import Carrinho from "./Pages/Carrinho/Carrinho";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/admin" />
        <Route path="/autor" element={<Autor />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/Share" element={<Shares/>} />
        <Route path="/FormularioExemplo" element={<FormularioEx/>} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
    </Router>
  );
};

export default App;