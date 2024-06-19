import { useEffect, useState } from 'react';
import FuncionarioClient from '../../client/FuncionarioClient';
import './Funcionario.css';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import FuncionarioDto from '../../dto/FuncionarioDto';


const Funcionario = () => {

    const [funcionarios, setFuncionarios] = useState<FuncionarioDto[]>([]);

    useEffect(() => {
        const fetchFuncionarios = async () => {
            try {
                const response = await FuncionarioClient.listAllFuncionarios();
                setFuncionarios(response);
            } catch (error) {
                console.error('Erro ao buscar funcionários:', error);
            }
        };
        fetchFuncionarios();
    }, []);


    return (
        <div className="stack-of-records">
            <Form>
                <Row>
                    <Col xs="auto">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2"
                        />
                    </Col>
                    <Col xs="auto">
                        <Button type="submit">Submit</Button>
                    </Col>
                </Row>
            </Form>
            <Container className='header-of-records'>
                <Container>
                    <Row className='header-row-records'>
                        <Col sm={4}>
                            <label>Id</label>
                        </Col>
                        <Col>
                            <label>Nome</label>
                        </Col>
                        <Col>
                            <label>Cargo</label>
                        </Col>
                    </Row>
                </Container>
                {funcionarios.map(funcionario => (
                    <Container key={funcionario.id} className='conteiner-record'>
                        <Row>
                            <Col sm={4}>
                                <label>{funcionario.id}</label>
                            </Col>
                            <Col>
                                <label>{funcionario.nome}</label>
                            </Col>
                            <Col>
                                <label>{funcionario.cargo}</label>
                            </Col>
                        </Row>
                    </Container>
                ))}
            </Container>
        </div>
    );
}

export default Funcionario;