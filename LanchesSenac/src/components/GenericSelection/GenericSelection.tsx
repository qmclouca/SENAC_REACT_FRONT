import './GenericSelection.css';
import Form from 'react-bootstrap/Form';

const GenericSelection = (props: []) => {

    return (
        <div>
            <Form.Select aria-label="Default select example">
                <option>Selecione um tipo de unidade</option>  
                {props.lista.map((item) => {
                    return <option>{item}</option>
                })}
            </Form.Select>
        </div>
    )
}

export default GenericSelection;