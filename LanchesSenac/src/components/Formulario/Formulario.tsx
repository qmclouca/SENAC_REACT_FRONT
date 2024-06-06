import React,{useState} from "react";


const Formulario = () =>{
    const [formData, setFormData] = useState({
        nome:'',
        email:'',
        mensagem:''
    });

    const handleChange =(e) =>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,

        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //chamada de API para enviar dados via POST
        console.log('Dados do formulário', formData)
    };

    return(
        <>
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange}/> 
                {/* Nesse label estamos usando o nome do handleChange (name) também puxando o valor do submit  */}
            </div>
            <div>
                <label htmlFor="email:">E-mail:</label>
                <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="mensagem">Mensagem:</label>
                <textarea name="mensagem" id="mensagem" value={formData.mensagem} onChange={handleChange} />
            </div>
            <button type="submit">Enviar</button>
            </form>
        </>
    );

    
};

export default Formulario;