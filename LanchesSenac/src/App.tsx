import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import PaginaInicial from "./Pages/PaginaInicial/PaginaInicial";
import Carrinho from "./Pages/Carrinho/Carrinho";
import Rodolfo from "./Pages/Rodolfo";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/carrinho" element={<Carrinho/>} />
        <Route path="/rodolfo" element={<Rodolfo/>} />
      </Routes>
    </Router>
  );
};

export default App;
