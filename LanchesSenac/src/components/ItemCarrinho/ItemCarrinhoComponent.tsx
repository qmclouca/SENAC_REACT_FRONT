import React from "react";
import { Button, Card, Nav } from "react-bootstrap";
import { ItemCarrinhoProps } from "../../interfaces/ItemCarrinhoProps";

const ItemCarrinhoComponent: React.FC<ItemCarrinhoProps> = ({ produto, quantidade, subtotal }) => {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={produto?.foto} alt={produto?.descricao} width={100} />
        <Card.Body>
          <Card.Title>{produto?.nome}</Card.Title>
          <Card.Text>{produto?.descricao}</Card.Text>
          <Card.Text>Subtotal: {subtotal}</Card.Text>
          <Button variant="primary">+</Button>
          <span>{quantidade}</span>
          <Button variant="primary">-</Button>
          <Nav.Link href="#cardapio">Adicionar mais itens</Nav.Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default ItemCarrinhoComponent;