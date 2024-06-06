import './RodapeConferenciaPedidoComponent.css';
import { Rodape } from "../../interfaces/Rodape";

const RodapeConferenciaPedidoComponent: React.FC<Rodape> = ({ subtotal, quantidadeItem, nomeBotao }) => {
  return (
    <footer className="rodapeContainer" style={{ height: '80px' }}>
      <p className="">Total: R$ {subtotal} / {quantidadeItem} itens</p>
      <button className="btn btn-primary botao-concluir-pedido">{nomeBotao}</button>
    </footer>
  );
};

export default RodapeConferenciaPedidoComponent;