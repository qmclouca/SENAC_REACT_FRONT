import CarrinhoComponent from "../../components/Carrinho/CarrinhoComponent";
import { getUltimoPedidoEmAberto } from "../../services/PedidoService";
import { Pedido } from "../../interfaces/Pedido";
import { useEffect, useState } from "react";

const PaginaInicial: React.FC = () => {
  const [pedidoSalvo, setPedidoSalvo] = useState<Pedido | null>(null);

  useEffect(() => {
    const buscarPedido = async () => {
          let ultimoPedidoResponse = await getUltimoPedidoEmAberto(1);
          const ultimoPedidoData: Pedido = ultimoPedidoResponse.data;
          setPedidoSalvo(ultimoPedidoData);
    };
    buscarPedido();
  });

  return (
    <div className="pagina-inicial">
      <h1>Página Inicial</h1>
      {pedidoSalvo && <CarrinhoComponent pedido={pedidoSalvo} />}
    </div>
  );
};

export default PaginaInicial;