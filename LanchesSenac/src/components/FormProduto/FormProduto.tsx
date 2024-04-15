
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './FormProduto.css';
import InputImage from '../InputImage/InputImage';
import GenericSelection from '../GenericSelection/GenericSelection';

const FormProduto = () => {

    const listaDeUnidades: string[] = ["KILOS", "GRAMAS", "LITROS", "UNITÁRIO"]

    return (
        <div className='productform-background'>
        <Form className="productform">
            <div className="form-conteiner">
                <div>
                    <InputImage/>
                </div>
                <div className="basics-inputs">
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
                    <div className="pricing-group">
                        <div className="preco-compra">
                            <Form.Group controlId="preco-compra">
                                <Form.Label>Unidade</Form.Label>
                                <GenericSelection lista={listaDeUnidades}/> 
                            </Form.Group>
                        </div>
                        <div className="preco-venda">
                            <Form.Group controlId="preco-venda">
                                <Form.Label>Estoque</Form.Label>
                                <Form.Control type="text" placeholder="1" />
                            </Form.Group>
                        </div>
                    </div>
                </div>
            </div>

            <center>
                <Button variant="success" type="submit">
                    Salvar
                </Button>
            </center>
        </Form>
        </div>
    );
}

export default FormProduto;