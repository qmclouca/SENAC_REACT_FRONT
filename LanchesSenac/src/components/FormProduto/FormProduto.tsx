import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './FormProduto.css';
import InputImage from '../InputImage/InputImage';
import GenericSelection from '../GenericSelection/GenericSelection';
import ProdutoClient from '../../client/ProdutoClient';
import ProdutoDto from '../../dto/ProdutoDto';
import { useNavigate } from 'react-router-dom';

const listaDeUnidades: string[] = ["KILOS", "GRAMAS", "LITROS", "UNITÁRIO"];

const FormProduto: React.FC = () => {
    const [novoProduto, setNovoProduto] = useState<ProdutoDto>({
        nome: '',
        valor: '',
        unidade: listaDeUnidades[0],
        estoque: '',
        linkFoto: ''
    });
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<any>) => {
        const { id, value } = e.target;
        setNovoProduto((prevProduto) => ({
            ...prevProduto,
            [id]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await ProdutoClient.salvarProduto(novoProduto);
            setNovoProduto({ nome: '', valor: '', unidade: listaDeUnidades[0], estoque: '', linkFoto: '' });
         //   navigate('/produtos'); TODO: Navegar para a lista de produtos após salvar
        } catch (error) {
            console.error('Erro ao salvar produto:', error);
        }
    };

    return (
        <div className='productform-background'>
            <Form className="productform" onSubmit={handleSubmit}>
                <div className="form-conteiner">
                    <div>
                        <InputImage />
                    </div>
                    <div className="basics-inputs">
                        <div className="product-description">
                            <Form.Group className="mb-3" controlId="nome">
                                <Form.Label>Nome do produto</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Descrição do produto"
                                    value={novoProduto.nome}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </div>
                        <div className="pricing-group">
                            <div className="preco-compra">
                                <Form.Group controlId="valor">
                                    <Form.Label>Preço de compra</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="00.00"
                                        value={novoProduto.valor}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </div>
                        </div>
                        <div className="pricing-group">
                            <div className="preco-compra">
                                <Form.Group controlId="unidade">
                                    <Form.Label>Unidade</Form.Label>
                                    <GenericSelection
                                        lista={listaDeUnidades}
                                        value={novoProduto.unidade}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </div>
                        </div>
                        <div className="pricing-group">
                            <div className="preco-compra">
                                <Form.Group controlId="estoque">
                                    <Form.Label>Estoque</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Quantidade em estoque"
                                        value={novoProduto.estoque}
                                        onChange={handleChange}
                                    />
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
};

export default FormProduto;
