import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import PaginaInicial from "./Pages/PaginaInicial/PaginaInicial";
import Autor from "./Pages/Autor/Autor";
import Cardapio from "./Pages/Cardapio/Cardapio";
import Pagamento from "./Pages/Pagamento/Pagamento";
import Formulario from "./components/Formulario/Formulario";
import Cadastro from "./components/Formulario/Cadastro";
import QRCodeImage from "./components/QRCode/QRCode";
import QRCodePage from "./Pages/QRCodePixTest/QRCodePixTest";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/admin" />
        <Route path="/autor" element={<Autor />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/pagamento" element={<Pagamento />}/>
        <Route path="/Formulario" element={<Formulario/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/pix" element={<QRCodePage/>}/>
      </Routes> 
    </Router>
  );
};

export default App;
