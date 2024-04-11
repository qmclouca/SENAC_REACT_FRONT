import "./Login.css"


const Login = () => {
   return (

      <>
         <div className="BarraPreencher">

            <img src="https://static.wixstatic.com/media/eda1f3_e691b9dd8a1a4c719b53f1cab3f1bce3~mv2.png/v1/fit/w_2500,h_1330,al_c/eda1f3_e691b9dd8a1a4c719b53f1cab3f1bce3~mv2.png" width="130px" height="100px"/>

            <label id="email">
            <br/><br/>  Email:
               <input type="text" autoFocus placeholder="fulano@gmail.com"/>

            </label>
            <label id="senha">
            <br/><br/> Senha:
               <input type="password" placeholder="xxx123"/>

            </label>

         </div>

         <div className="BotoLogin">

         <label id="botaoLogin">
         <br/>
            <input type="button" value="ENTRAR"/>

         </label>

         </div>

         <div className="redirecionarCadastro">

         <label>
         <a href="localhost:5173/cadastro">Cadastre-se</a>

         </label>


         </div>


      </>

   )

};

export default Login;