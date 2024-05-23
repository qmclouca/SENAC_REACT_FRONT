import './RodapeConferenciaPedidoComponent.css';
import { Rodape } from "../../interfaces/Rodape";

const RodapeConferenciaPedidoComponent: React.FC<Rodape> = ({ subtotal, quantidadeItem, nomeBotao }) => {
    return (
      <div className='rodapeContainer'>
        <footer className="" style={{ height: '80px' }}>  {/* Adjust the value (e.g., '70px') for desired height */}
        <p className="">Total: R$ {subtotal} / {quantidadeItem} itens</p>
        <button className="btn btn-primary">{nomeBotao}</button>
        </footer>
        </div>
      );
};

export default RodapeConferenciaPedidoComponent;

