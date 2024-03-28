import RodapeConferenciaPedidoComponent from "../../components/RodapeConferenciaPedido/RodapeConferenciaPedidoComponent";
import "./PaginaInicial.css";

const PaginaInicial = () => {
  return (
    <>
      <div className="PaginaInicial">
        <h1>Página Inicial</h1>
      </div>
      <div>
      <RodapeConferenciaPedidoComponent
             subtotal="10,00"
             quantidadeItem={10}
             nomeBotao="Continuar"/>
      </div>
    </>
  );
};

export default PaginaInicial;
