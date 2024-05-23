import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import { CarrinhoProps } from "../../interfaces/CarrinhoProps";
import { ItemCarrinhoProps } from "../../interfaces/ItemCarrinhoProps";
import TituloComponent from '../Titulo/TituloComponent.tsx';
import LinkComponent from '../Link/LinkComponent.tsx';
import RodapeConferenciaPedidoComponent from "../../components/RodapeConferenciaPedido/RodapeConferenciaPedidoComponent";
import { RiShoppingCartLine, RiCloseLine } from 'react-icons/ri';
import { Col, Container, Row } from "react-bootstrap";

const CarrinhoComponent: React.FC<CarrinhoProps> = ({ pedido }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const itemTemplate = (item: ItemCarrinhoProps) => (
    <Row className="carrinho-item" key={item.produto.id}>
      <Col xs={1}>
        <img className="item-foto" src={item.produto.foto} alt={item.produto.nome} />
      </Col>
      <Col xs={8} className="conteudo-item">
        <div className="item-nome">{item.produto.nome}</div>
        <div className="item-subtotal">Subtotal: ${item.subtotal}</div>
      </Col>
      <Col xs={3} className="botoes">
        <button className="botao-minus">-</button>
        <span className="item-quantidade">{item.quantidade}</span>
        <button className="botao-plus">+</button>
      </Col>
    </Row>
  );

  const listTemplate = (items: ItemCarrinhoProps[]) => (
    <>
      {items.map(item => itemTemplate(item))}
    </>
  );

  return (
    <div className={`carrinho-container ${isOpen ? 'sidebar-open' : ''}`}>
      <Button onClick={toggleSidebar} className="toggle-button">
        {isOpen ? <RiCloseLine className="close-icon" size={32} /> : <RiShoppingCartLine className="cart-icon" size={32} />}
      </Button>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <Container>
          <div className="titulo">
            <TituloComponent texto={`Sua sacola tem ${pedido.itens.length} itens`} negrito tamanho="h3" />
          </div>
          <div className="carrinho-conteudo">
            {listTemplate(pedido.itens)}
          </div>
          <LinkComponent texto="Adicionar mais itens" whereToGo="/paginaPrincipal" cor="red" tamanho={20} />
          <RodapeConferenciaPedidoComponent nomeBotao="Concluir Pedido" quantidadeItem={3} subtotal={"10,00"} />
        </Container>
      </div>
    </div>
  );
};

export default CarrinhoComponent;