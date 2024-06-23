import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import FuncionarioClient from '../../client/FuncionarioClient';
import './Funcionario.css';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import FuncionarioDto from '../../dto/FuncionarioDto';
import Pagination from '../../interfaces/Pagination';

const Funcionario = () => {
    const [search, setSearch] = useState<string>('');
    const [funcionarios, setFuncionarios] = useState<FuncionarioDto[]>([]);
    const [paginaAtual, setPaginaAtual] = useState<Pagination>();

    useEffect(() => {
        const fetchFuncionarios = async () => {
            try {
                const response:Pagination = await FuncionarioClient.findPaginationOfFuncionariosBySearch("", 0);
                setPaginaAtual(response);
                setFuncionarios(response.content);
            } catch (error) {
                console.error('Erro ao buscar funcionários:', error);
            }
        };
        fetchFuncionarios();
    }, []);

    const searchByFuncionario = async (search: string, pageNumber: number) => {
        try {
            const response = await FuncionarioClient.findPaginationOfFuncionariosBySearch(search, pageNumber);
            setPaginaAtual(response);
            setFuncionarios(response.content);
        } catch (error) {
            console.error('Erro ao buscar funcionarios por pesquisa:', error);
        }
    };

    const handleSubmit = async (event?: any) => {
        event.preventDefault();
        await searchByFuncionario(search, paginaAtual ? paginaAtual.pageable.pageNumber : 0);
    };

    const proximaPagina = async (event?: any) => {
        event.preventDefault();
        await searchByFuncionario(search, paginaAtual ? (paginaAtual.pageable.pageNumber + 1) : (1));
    }

    const paginaAnterior = async (event?: any) => {
        event.preventDefault();
        let pageNumber = paginaAtual ? paginaAtual.pageable.pageNumber : 0;

        if (pageNumber == 0) {
            await searchByFuncionario(search, 0);
        } else {
            await searchByFuncionario(search, (pageNumber - 1));
        }
        
    }

    const handleDeletarFuncionario = async (funcionarioId: number) => {
        try {
            await FuncionarioClient.deleteFuncionarioById(funcionarioId);
            console.log(`Funcionario com ID ${funcionarioId} deletado com sucesso.`);
            let pageNumber = paginaAtual ? paginaAtual.pageable.pageNumber : 0;
            await searchByFuncionario(search, pageNumber);
        } catch (error) {
            console.error('Erro ao deletar funcionario:', error);
        }
    }

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
                {funcionarios != undefined && funcionarios != null ? (
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
                            <td colSpan={2} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px'}}>
                                <Button variant="primary">Editar</Button> 
                                <Button variant="danger" onClick={() => handleDeletarFuncionario(funcionario.id)}>Deletar</Button>
                            </td>
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
            <Row style={{marginTop: '2vh'}}>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px'}}>
                    <Form onSubmit={paginaAnterior}>
                        <Button type="submit">Página Anterior</Button>
                    </Form>
                    <Form onSubmit={proximaPagina}>
                        <Button type="submit">Próxima Página</Button>
                    </Form>
                </div>
            </Row>
        </Container>
    );
};

export default Funcionario;
