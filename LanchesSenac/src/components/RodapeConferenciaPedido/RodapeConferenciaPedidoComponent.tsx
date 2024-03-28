import { Col, Row } from "react-bootstrap";
import { Rodape } from "../../interfaces/Rodape";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const RodapeConferenciaPedidoComponent: React.FC<Rodape> = ({subtotal, quantidadeItem, nomeBotao}) => {
    return (
        <Card>
          <Card.Body>
            <Card.Text>
                <Row>
                    <Col className="d-flex align-items-center">  {}
                        {subtotal}/{quantidadeItem} itens
                        <Button variant="primary" style={{ marginLeft: '10px' }}>{nomeBotao}</Button>
                    </Col>
                </Row>
            </Card.Text>
          </Card.Body>
        </Card>
      );
};

export default RodapeConferenciaPedidoComponent;