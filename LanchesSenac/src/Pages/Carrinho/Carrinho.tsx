import React from "react";
import CarrinhoComponent from "../../components/Carrinho/CarrinhoComponent";
import { Pedido } from "../../interfaces/Pedido";
import { ItemCarrinhoProps } from "../../interfaces/ItemCarrinhoProps";
import { UsuarioProps } from "../../interfaces/UsuarioProps";

const Carrinho: React.FC = () => {
  const itemCarrinho: ItemCarrinhoProps = {
    produto: {
    id: 1,
    nome: "X-burguer",
    descricao: "Saboroso",
    valor: 19.99,
    linkFoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGBaisU9d80P-ks9Pplz_SoWB6iK7W08iZcg&s"
    },
    quantidade: 1,
    valor: 19.99,
  };

  const usuario: UsuarioProps = {
    nome: 'João',
    username: 'joao.joao'
  };

  const pedido: Pedido = {
    id: 10,
    itensPedido: [
      itemCarrinho,
      itemCarrinho,
      itemCarrinho
    ],
    usuario: usuario,
    subtotal: 10.99,
    taxaDeEntrega: 5,
    valor: 15.99
  };

  return (
    <div className="carrinho-container">
      <CarrinhoComponent pedido={pedido} />
    </div>
  );
};

export default Carrinho;