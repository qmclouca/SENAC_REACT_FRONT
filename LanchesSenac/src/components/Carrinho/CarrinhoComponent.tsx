import React, { useState, useEffect } from "react";
import { Button, Col, Row } from 'react-bootstrap';
import { CarrinhoProps } from "../../interfaces/CarrinhoProps";
import { ItemCarrinhoProps } from "../../interfaces/ItemCarrinhoProps";
import TituloComponent from '../Titulo/TituloComponent.tsx';
import LinkComponent from '../Link/LinkComponent.tsx';
import RodapeConferenciaPedidoComponent from "../../components/RodapeConferenciaPedido/RodapeConferenciaPedidoComponent";
import { RiShoppingCartLine, RiCloseLine } from 'react-icons/ri';
import { postPedido } from "../../services/PedidoService.tsx";
import './CarrinhoComponent.css';

const CarrinhoComponent: React.FC<CarrinhoProps> = ({ pedido }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [itensPedido, setItensPedido] = useState<ItemCarrinhoProps[]>([]);
  const [valorTotalPedido, setValorTotalPedido] = useState(0);
  const [quantidadeTotalItensPedido, setQuantidadeTotalItensPedido] = useState(0);

  useEffect(() => {
    if (pedido && pedido.itensPedido) {
      setItensPedido([...pedido.itensPedido]);
    }
  }, [pedido]);

  useEffect(() => {
    const total = itensPedido.reduce((acc, item) => acc + item.valor, 0);
    const quantidade = itensPedido.reduce((acc, item) => acc + item.quantidade, 0);
    setValorTotalPedido(total);
    setQuantidadeTotalItensPedido(quantidade);
  }, [itensPedido]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const updateItemPedido = (index: number, updatedItem: ItemCarrinhoProps) => {
    const updatedItensPedido = [...itensPedido];
    updatedItensPedido[index] = updatedItem;
    setItensPedido(updatedItensPedido);
    postPedido({ ...pedido, itensPedido: updatedItensPedido });
  };

  const removeItemPedido = (index: number) => {
    const updatedItensPedido = itensPedido.filter((_, i) => i !== index);
    setItensPedido(updatedItensPedido);
    postPedido({ ...pedido, itensPedido: updatedItensPedido });
  };

  const increaseQuantity = (index: number) => {
    const item = itensPedido[index];
    const updatedItem = { ...item, quantidade: item.quantidade + 1, valor: item.produto.valor * (item.quantidade + 1) };
    updateItemPedido(index, updatedItem);
  };

  const decreaseQuantity = (index: number) => {
    const item = itensPedido[index];
    if (item.quantidade > 1) {
      const updatedItem = { ...item, quantidade: item.quantidade - 1, valor: item.produto.valor * (item.quantidade - 1) };
      updateItemPedido(index, updatedItem);
    } else if (item.quantidade === 1) {
      if (window.confirm("Deseja remover o item do pedido?")) {
        removeItemPedido(index);
      }
    }
  };

  const itemTemplate = (item: ItemCarrinhoProps, index: number) => (
    <Row className="carrinho-item" key={index}>
      <Col xs={3}>
        <img className="item-foto img-fluid" src={item.produto.linkFoto} alt={item.produto.nome} />
      </Col>
      <Col md={6} sm={6} xs={4} className="conteudo-item">
        <div className="item-nome">{item.produto.nome}</div>
        <div className="item-subtotal">Subtotal: ${item.valor != null ? `${item.valor.toFixed(2)}` : '0'}</div>
      </Col>
      <Col sm={3} xs={3} className="botoes">
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
      <Button variant="outline-warning" onClick={toggleSidebar} className="toggle-button">
        {isOpen ? <RiCloseLine className="close-icon" size={28} /> : <RiShoppingCartLine className="cart-icon" size={28} />}
      </Button>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="carrinho-conteudo">
          <div className="titulo">
            <TituloComponent texto={`Sua sacola tem ${itensPedido.length} itens`} negrito />
          </div>
          <div style={{ marginTop: 50 }}></div>
          {listTemplate(itensPedido)}
          <LinkComponent texto="Adicionar mais itens" whereToGo="/" cor="red" tamanho={20} />
          <Row className="justify-content-center mt-4">
            <Col xs={12} sm={8} md={6}>
              <footer className={`rodape ${isOpen ? 'open' : ''}`}>
                <RodapeConferenciaPedidoComponent 
                  nomeBotao="Concluir Pedido" 
                  quantidadeItem={quantidadeTotalItensPedido} 
                  subtotal={valorTotalPedido != null ? `${valorTotalPedido.toFixed(2)}` : '0'} 
                />
              </footer>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default CarrinhoComponent;