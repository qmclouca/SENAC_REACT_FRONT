import React from "react";
import ItemCarrinhoComponent from "../../components/ItemCarrinho/ItemCarrinhoComponent";
import "./Carrinho.css";
import { Produto } from "../../interfaces/Produto";
import { Row } from "react-bootstrap";
import RodapeConferenciaPedidoComponent from "../../components/RodapeConferenciaPedido/RodapeConferenciaPedidoComponent";

const Carrinho: React.FC = () => {
  const produto: Produto = {
    nome: "X-burguer",
    descricao: "Saboroso",
    valor: "19,99",
    foto: "urlfoto"
  };

  return (
    <>
      <Row>
      <ItemCarrinhoComponent
        produto={produto}
        quantidade={1}
        subtotal={1}
      />
      </Row>
      <Row>
      <RodapeConferenciaPedidoComponent
             subtotal="10,00"
             quantidadeItem={10}
             nomeBotao="Continuar"/>
      </Row>
    </>
  );
};

export default Carrinho;
