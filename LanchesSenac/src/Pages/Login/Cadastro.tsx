import "./Cadastro.css"

const Cadastro = () => {
    return (

        <>
            <div className="container">
                <div className="form-image">
                    <img src="src\assets\SenacXLanches.png" alt="Gon" width="500px" height="500px"></img>
                </div>
                <div className="form">
                    <form action="#">
                        <div className="form-header">
                            <div className="title">
                                <h1>Cadastre-se</h1>
                            </div>
                        </div>

                        <div className="input-group">
                            <div className="input-box">
                                <label htmlFor="firstname">Primeiro Nome</label>
                                <input id="firstname" type="text" name="firstname" placeholder="Digite seu primeiro nome" required></input>
                            </div>

                            <div className="input-box">
                                <label htmlFor="lastname">Sobrenome</label>
                                <input id="lastname" type="text" name="lastname" placeholder="Digite seu sobrenome" required></input>
                            </div>
                            <div className="input-box">
                                <label htmlFor="email">E-mail</label>
                                <input id="email" type="email" name="email" placeholder="Digite seu e-mail" required></input>
                            </div>

                            <div className="input-box">
                                <label htmlFor="number">Celular</label>
                                <input id="number" type="tel" name="number" placeholder="(xx) xxxx-xxxx" required></input>
                            </div>

                            <div className="input-box">
                                <label htmlFor="password">Senha</label>
                                <input id="password" type="password" name="password" placeholder="Digite sua senha" required></input>
                            </div>


                            <div className="input-box">
                                <label htmlFor="confirmPassword">Confirme sua Senha</label>
                                <input id="confirmPassword" type="password" name="confirmPassword" placeholder="Digite sua senha novamente" required></input>
                            </div>

                            <div className="input-box">
                                <label htmlFor="CPF">CPF</label>
                                <input id="cpf" type="cpf" name="cpf" placeholder="Digite seu CPF" required></input>
                            </div>

                            <div className="input-box">
                                <label htmlFor="CEP">CEP</label>
                                <input id="cep" type="cep" name="cep" placeholder="Digite seu CEP" required></input>
                            </div>

                            <div className="input-box">
                                <label htmlFor="cidade">Cidade</label>
                                <input id="cidade" type="text" name="cidade" placeholder="Digite sua cidade" required></input>
                            </div>

                            <div className="input-box">
                                <label htmlFor="bairro">Bairro</label>
                                <input id="bairro" type="bairro" name="bairro" placeholder="Digite seu bairro" required></input>
                            </div>

                            <div className="input-box">
                                <label htmlFor="endereco">Endereço</label>
                                <input id="endereco" type="endereco" name="endereco" placeholder="Digite seu Endereço" required></input>
                            </div>

                            <div className="input-box">
                                <label htmlFor="complemento">Complemento</label>
                                <input id="complemento" type="complemento" name="complemento" placeholder="Digite um complemento" required></input>
                            </div>

                        </div>


                        <div className="continue-button">
                            <button><a href="#">Continuar</a> </button>
                        </div>
                    </form>
                </div>



            </div>



        </>



    );


};


export default Cadastro;