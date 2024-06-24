import { useEffect, useState } from 'react';
import FuncionarioClient from '../../client/FuncionarioClient';
import './FuncionarioForm.css';
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import FuncionarioDto from '../../dto/FuncionarioDto';
import CargoClient from '../../client/CargoClient';
import { useNavigate, useParams } from 'react-router-dom';
import FormModeEnum from '../../enums/FormModeEnum';

const FuncionarioForm = () => {
    const [funcionario, setFuncionario] = useState<FuncionarioDto>();
    const [cargos, setCargos] = useState<string[]>([]);
    const navigate = useNavigate();

    let { id, formMode } = useParams();

    const getFuncionarioById = async () => {
        try {
            const response = await FuncionarioClient.getFuncionarioById(id);
            setFuncionario(response.data);
        } catch (error) {
            console.log("Erro ao buscar funcionario: "+ error)
        }
    }

    const getAllCargos = async () => {
        try {
            const response = await CargoClient.getAllCargos();
            setCargos(response.data);
        } catch (error) {
            console.log("Erro ao buscar cargos: "+ error)
        }
    }

    useEffect(() => {
        getFuncionarioById();
        getAllCargos();
        console.log(funcionario);
    }, []);

    const handleClickinEditarButton = () => {
        navigate(`/Funcionarios/form/${id}/${FormModeEnum.Edicao}`);
    }

    return (
        <div>
            <Container fluid="md" style={{ marginTop: '20vh', padding: '4vh 2vw', borderRadius: '5px', backgroundColor: 'gray'}}>
                {funcionario != null ? (
                    <Form>
                        <Row>
                            <label>Nome funcionário</label>
                            <InputGroup className="mb-3">
                                <Form.Control placeholder="Nome Funcionario" value={funcionario.nome} aria-label="funcionarioNome" disabled={formMode == FormModeEnum.Visualizacao}/>
                            </InputGroup>
                        </Row>
                        <Row>
                            <label>Cargo</label>
                            {cargos != null ? (
                                <Form.Select aria-label="Default select example" disabled={formMode == FormModeEnum.Visualizacao}>
                                    {cargos.map(cargo => (
                                       <option>{cargo}</option> 
                                    ))}
                                </Form.Select>
                            ) : (
                                <Form.Select aria-label="Default select example" disabled={formMode == FormModeEnum.Visualizacao}>
                                    <option>Carregando Cargos...</option>
                                </Form.Select>
                            )}
                        </Row>
                        <Row>
                            <label>Cpf</label>
                            <InputGroup className="mb-3">
                                <Form.Control placeholder="Cpf" value={funcionario.cpf} aria-label="funcionarioCpf" disabled={formMode == FormModeEnum.Visualizacao}/>
                            </InputGroup>
                        </Row>
                        {formMode != undefined && formMode == FormModeEnum.Edicao ? (
                        <Row>
                            <Button type='submit'>Salvar</Button>
                        </Row>
                        ) : (
                        <Row>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: '5px' }}>
                                <Button variant='primary' onClick={() => handleClickinEditarButton()}>Editar</Button>
                                <Button variant='danger'>Excluir</Button>
                            </div>
                        </Row>
                        )}

                    </Form>
                ) : (
                    <div className='flex justify-content-center align-items-center'>
                        <img style={{ width: '22vw', height: '28vh'}} src="https://i.pinimg.com/originals/d9/f2/15/d9f21515b1e38d83e94fdbce88f623b6.gif" alt="loading"/>
                    </div>
                )}
            </Container>
        </div>
    )
}

export default FuncionarioForm;