import "./Cadastro.css"

const Cadastro = () => {
    return (

        <>

            <div className="BarraPreencher">



                <label id="nome">
                    <br /><br />  Nome :
                    <input type="text" autoFocus />

                </label>
                <label id="sobrenome">
                    Sobrenome :
                    <input type="text" autoFocus />

                </label>



                <label id="email">
                    <br /><br />  Email :
                    <input type="text" autoFocus placeholder="fulano@gmail.com" />

                </label>

                <label id="telefone">
                    Telefone :
                    <input type="text" autoFocus placeholder="(xx)xxxx-xxxx" />

                </label>
                <label id="senha">
                    <br /><br /> Senha :
                    <input type="text" placeholder="xxx123" />

                </label>
                <label id="confirmacao">
                     Confirmar senha :
                    <input type="text"/>

                </label>
                

            </div>

            <div className="BotoCadastrar">

                <label id="botaoCadastro">
                    <br />
                    <input type="button" value="CADASTRAR" />

                </label>

            </div>

            <div className="redirecionarLogin">

                <label>
                    <a href="localhost:5173/login">Login</a>

                </label>


            </div>




        </>



    );


};

export default Cadastro;