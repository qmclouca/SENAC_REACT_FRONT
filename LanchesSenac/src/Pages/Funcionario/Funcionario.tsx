import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import FuncionarioClient from '../../client/FuncionarioClient';
import './Funcionario.css';
import { Button, Col, Container, Form, Placeholder, Row } from "react-bootstrap";
import FuncionarioDto from '../../dto/FuncionarioDto';
import Pagination from '../../interfaces/Pagination';

const Funcionario = () => {
    const [search, setSearch] = useState<string>('');
    const [funcionarios, setFuncionarios] = useState<FuncionarioDto[]>([]);

    useEffect(() => {
        const fetchFuncionarios = async () => {
            try {
                const response:Pagination = await FuncionarioClient.findPaginationOfFuncionariosBySearch("");
                setFuncionarios(response.content);
            } catch (error) {
                console.error('Erro ao buscar funcionários:', error);
            }
        };
        fetchFuncionarios();
    }, []);

    const searchByFuncionario = async (search: string) => {
        try {
            const response = await FuncionarioClient.findPaginationOfFuncionariosBySearch(search);
            setFuncionarios(response.content);
        } catch (error) {
            console.error('Erro ao buscar funcionarios por pesquisa:', error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await searchByFuncionario(search);
    };

    return (
        <Container fluid="md" style={{ marginTop: '20vh', padding: '4vh 2vw', borderRadius: '5px', backgroundColor: 'gray'}}>
            <Row>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col xs="auto">
                            <Form.Control
                                type="text"
                                placeholder="Pesquisa por nome de funcionário"
                                className="mr-sm-2"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </Col>
                        <Col xs="auto">
                            <Button type="submit">Pesquisar</Button>
                        </Col>
                    </Row>
                </Form>
            </Row>
            <Row style={{marginTop: '10vh', cursor: 'pointer'}}>
                {funcionarios != null && funcionarios.length > 0 ? (
                <Table hover>
                    <thead>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Cargo</th>
                    </thead>
                    <tbody>
                        {funcionarios.map(funcionario => (
                        <tr>
                            <td>{funcionario.id}</td>
                            <td>{funcionario.nome}</td>
                            <td>{funcionario.cargo}</td>
                        </tr>
                        ))}
                    </tbody>
                </Table>
                ) : (
                    <div className='flex justify-content-center align-items-center'>
                        <img style={{ width: '22vw', height: '28vh'}} src="https://i.pinimg.com/originals/d9/f2/15/d9f21515b1e38d83e94fdbce88f623b6.gif" alt="loading"/>
                    </div>
                )}
            </Row>

        </Container>
    );
};

export default Funcionario;
