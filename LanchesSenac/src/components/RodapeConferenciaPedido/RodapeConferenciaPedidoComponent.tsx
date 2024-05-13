import './RodapeConferenciaPedidoComponent.css';
import { Rodape } from "../../interfaces/Rodape";

const RodapeConferenciaPedidoComponent: React.FC<Rodape> = ({ subtotal, quantidadeItem, nomeBotao }) => {
    return (
      <div className='rodapeContainer'>
        <footer className="fixed-footer d-flex justify-content-between align-items-center py-2 px-4" style={{ height: '80px' }}>  {/* Adjust the value (e.g., '70px') for desired height */}
          <div className="d-flex align-items-center">
            <p className="text-muted me-3 mb-0">Total: R$ {subtotal} / {quantidadeItem} itens</p>
          </div>
          <button className="btn btn-primary">{nomeBotao}</button>
        </footer>
        </div>
      );
};

export default RodapeConferenciaPedidoComponent;

