import "./Login.css"


const Login = () => {
   return (

      <>
         <div className="main-login">
            <div className="left-login">
               <img src="src\assets\SenacXLanches.png" alt="Gon" width="500px" height="500px"></img>

            </div>
            <div className="right-login">
               <div className="card-login">
                  <h1>LOGIN</h1>
                  <h3>Bem vindo</h3>
                  <div className="textfield">
                     <label htmlFor="usuario">Usuario</label>
                     <input type="text" name="usuario" placeholder="Usuário"></input>
                  </div>
                  <div className="textfield">
                     <label htmlFor="senha">Senha</label>
                     <input type="password" name="senha" placeholder="Senha"></input>
                  </div>
                  <button className="btn-login">Login</button>
               </div>
            </div>
         </div>
      </>

   )

};

export default Login;