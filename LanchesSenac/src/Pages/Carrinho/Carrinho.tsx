import React from "react";
import ItemCarrinhoComponent from "../../components/ItemCarrinho/ItemCarrinhoComponent";
import "./Carrinho.css";
import { Produto } from "../../interfaces/Produto";

const Carrinho: React.FC = () => {
  const produto: Produto = {
    nome: "X-burguer",
    descricao: "Saboroso",
    valor: 19.99,
    foto: "urlfoto"
  };

  return (
    <>
      <ItemCarrinhoComponent
        produto={produto}
        quantidade={1}
        subtotal={1}
      />
    </>
  );
};

export default Carrinho;
