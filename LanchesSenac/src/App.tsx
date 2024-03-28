import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import PaginaInicial from "./Pages/PaginaInicial/PaginaInicial";
import Carrinho from "./Pages/Carrinho/Carrinho";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/carrinho" element={<Carrinho/>} />
      </Routes>
    </Router>
  );
};

export default App;
