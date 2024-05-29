import React, { useState, useEffect } from "react";
import { Button, Col, Row } from 'react-bootstrap';
import { CarrinhoProps } from "../../interfaces/CarrinhoProps";
import { ItemCarrinhoProps } from "../../interfaces/ItemCarrinhoProps";
import TituloComponent from '../Titulo/TituloComponent.tsx';
import LinkComponent from '../Link/LinkComponent.tsx';
import RodapeConferenciaPedidoComponent from "../../components/RodapeConferenciaPedido/RodapeConferenciaPedidoComponent";
import { RiShoppingCartLine, RiCloseLine } from 'react-icons/ri';
import './CarrinhoComponent.css';

const CarrinhoComponent: React.FC<CarrinhoProps> = ({ pedido }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [itensPedido, setItensPedido] = useState<ItemCarrinhoProps[]>([]);

  useEffect(() => {
    setItensPedido([...pedido.itens]);
  }, [pedido]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const updatePedido = (index: number, updatedItem: ItemCarrinhoProps) => {
    const updatedItensPedido = [...itensPedido];
    updatedItensPedido[index] = updatedItem;
    setItensPedido(updatedItensPedido);
  };

  const increaseQuantity = (index: number) => {
    const updatedItem = { ...itensPedido[index], quantidade: itensPedido[index].quantidade + 1 };
    updatePedido(index, updatedItem);
  };

  const decreaseQuantity = (index: number) => {
    if (itensPedido[index].quantidade > 0) {
      const updatedItem = { ...itensPedido[index], quantidade: itensPedido[index].quantidade - 1 };
      updatePedido(index, updatedItem);
    }
  };

  const itemTemplate = (item: ItemCarrinhoProps, index: number) => (
    <Row className="carrinho-item" key={item.produto.id}>
      <Col xs={3}>
        <img className="item-foto" src={item.produto.foto} alt={item.produto.nome} />
      </Col>
      <Col xs={6} className="conteudo-item">
        <div className="item-nome">{item.produto.nome}</div>
        <div className="item-subtotal">Subtotal: ${item.subtotal}</div>
      </Col>
      <Col xs={3} className="botoes">
        <button className="botao-minus" onClick={() => decreaseQuantity(index)}>-</button>
        <span className="item-quantidade">{item.quantidade}</span>
        <button className="botao-plus" onClick={() => increaseQuantity(index)}>+</button>
      </Col>
    </Row>
  );

  const listTemplate = (items: ItemCarrinhoProps[]) => (
    <>
      {items.map((item, index) => itemTemplate(item, index))}
    </>
  );

  return (
    <div className={`carrinho-container ${isOpen ? 'sidebar-open' : ''}`}>
      <Button onClick={toggleSidebar} className="toggle-button">
        {isOpen ? <RiCloseLine className="close-icon" size={32} /> : <RiShoppingCartLine className="cart-icon" size={32} />}
      </Button>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="carrinho-conteudo">
          <div className="titulo">
            <TituloComponent texto={`Sua sacola tem ${pedido.itens.length} itens`} negrito tamanho="h3" />
          </div>
          {listTemplate(itensPedido)}
          <LinkComponent texto="Adicionar mais itens" whereToGo="/" cor="red" tamanho={20} />
          <footer className={`rodape ${isOpen ? 'open' : ''}`}>
          <RodapeConferenciaPedidoComponent nomeBotao="Concluir Pedido" quantidadeItem={3} subtotal={"10,00"} />
          </footer>
        </div>
      </div>
    </div>
  );
};

export default CarrinhoComponent;