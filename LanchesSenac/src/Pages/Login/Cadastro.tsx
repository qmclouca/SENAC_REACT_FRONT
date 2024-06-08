import "./Cadastro.css"

const Cadastro = () => {
    return (

        <>
            <div className="main-cadastro">
                <div className="left-cadastro">
                    <img src="src\assets\SenacXLanches.png" alt="Gon" width="500px" height="500px"></img>
                </div>
                <div className="right-cadastro">
                    <div className="card-cadastro">
                        <h1>CADASTRO</h1>
                        <h3>Seja bem vindo</h3>
                            <div className="textfield">
                                <input type="text" name="nome" placeholder="Nome"></input>
                                <input type="text" name="sobrenome" placeholder="Sobrenome"></input>
                            </div>
                        <div className="textfield">
                            <input type="text" name="cpf" placeholder="CPF"></input>
                            <input type="text" name="email" placeholder="E-mail"></input>
                            <input type="text" name="telefone" placeholder="Telefone"></input>
                        </div>
                        <div className="textfield">
                            <input type="text" name="senha" placeholder="Senha"></input>
                            <input type="text" name="confirmarsenha" placeholder="Confirmar Senha"></input>
                        </div>
                        <div className="textfield">
                            <input type="text" name="cep" placeholder="CEP"></input>
                            <input type="text" name="cidade" placeholder="Cidade"></input>
                            <input type="text" name="bairro" placeholder="Bairro"></input>
                        </div>
                        <div className="textfield">
                            <input type="text" name="endereco" placeholder="endereco"></input>
                            <input type="text" name="complemento" placeholder="complemento"></input>
                        </div>
                        <button className="btn-cadastro">Cadastro</button>
                        <label htmlFor="login">Você já tem login?</label>
                    </div>
                </div>


            </div>



        </>



    );


};

export default Cadastro;