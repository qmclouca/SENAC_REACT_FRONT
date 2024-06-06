import { useState } from "react"


const Cadastro = () =>{
    const[cadastroData, setCadsatroData] = useState({
        name:'',
        cpfCnpj: '',
        email:''

    });

    const handleChange =(e) =>{
        const {name, value} = e.target;
        setCadsatroData({
            ...cadastroData,
            [name]: value,
        });
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('Dados do Cadastro', cadastroData)
    };

    return(
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" id="name" name="name"value={cadastroData.name} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="cpjCnpj">CPF:</label>
                <input type="text" id="cpfCnpj" name="cpfCnpj" value={cadastroData.cpfCnpj} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="email">E-mail:</label>
                <input type="text" id="email" name="email" value={cadastroData.email} onChange={handleChange} />
            </div>
            <div>
                <button type="submit">Enviar</button>
            </div>
        </form>
        </>
    );
};

export default Cadastro;