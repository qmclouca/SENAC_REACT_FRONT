
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './FormProduto.css';

const FormProduto = () => {
    return (
        <div className='productform-background'>
        <Form className="productform">
            <div className="product-description">
                <Form.Group className="mb-3 " controlId="productName">
                    <Form.Label>Nome do produto</Form.Label>
                    <Form.Control type="text" placeholder="Descrição do produto" />
                </Form.Group>
            </div>
            <div className="pricing-group">
                <div className="preco-compra">
                    <Form.Group controlId="preco-compra">
                        <Form.Label>Preço de compra</Form.Label>
                        <Form.Control type="text" placeholder="00.00" />
                    </Form.Group>
                </div>

                <div className="preco-venda">
                    <Form.Group controlId="preco-venda">
                        <Form.Label>Preço de venda</Form.Label>
                        <Form.Control type="text" placeholder="00.00" />
                    </Form.Group>
                </div>

            </div>
            <div className='conteiner-adicionais'>
                <div className="adicionais">
                    teste
                </div>
            </div>
            <div>
                <Button variant="primary" type="submit">
                    Salvar
                </Button>
            </div>
        </Form>
        </div>
    );
}

export default FormProduto;