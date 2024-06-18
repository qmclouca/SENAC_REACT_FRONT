import React, { useEffect, useState } from "react";
import CarrinhoComponent from "../../components/Carrinho/CarrinhoComponent";
import { Pedido } from "../../interfaces/Pedido";
import { getUltimoPedidoEmAberto } from "../../services/PedidoService";

const Carrinho: React.FC = () => {
  const [pedido, setPedido] = useState<Pedido | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const buscarPedido = async () => {
      try {
        let ultimoPedidoResponse = await getUltimoPedidoEmAberto(1);
        if (ultimoPedidoResponse && ultimoPedidoResponse.data) {
          const ultimoPedidoData: Pedido = ultimoPedidoResponse.data;
          setPedido(ultimoPedidoData);
        } else {
          setPedido(null);
        }
      } catch (err) {
        setPedido(null);
      } finally {
        setLoading(false);
      }
    };

    buscarPedido();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="carrinho-container">
      {pedido ? (
        <CarrinhoComponent pedido={pedido} />
      ) : (
        <div>Nenhum pedido em aberto encontrado.</div>
      )}
    </div>
  );
};

export default Carrinho;