import './RodapeConferenciaPedidoComponent.css';
import { Rodape } from "../../interfaces/Rodape";
import { Button } from 'react-bootstrap';

const RodapeConferenciaPedidoComponent: React.FC<Rodape> = ({ subtotal, quantidadeItem, nomeBotao }) => {
  return (
    <footer color="#FFBB00" className="rodapeContainer" style={{ height: '80px' }}>
      <p className="">Total: R$ {subtotal} / {quantidadeItem} itens</p>
      <Button variant="success" className="btn botao-concluir-pedido">{nomeBotao}</Button>
    </footer>
  );
};

export default RodapeConferenciaPedidoComponent;