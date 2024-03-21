import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import PaginaInicial from "./Pages/PaginaInicial/PaginaInicial";
import Autor from "./Pages/Autor/Autor";
import Cardapio from "./Pages/Cardapio/Cardapio";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/admin" />
        <Route path="/autor" element={<Autor />} />
        <Route path="/cardapio" element={<Cardapio />} />
      </Routes>
    </Router>
  );
};

export default App;
