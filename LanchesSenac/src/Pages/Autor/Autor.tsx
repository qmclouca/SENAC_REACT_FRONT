import GitHubUser from "../../components/GitHubUser/GitHubUser";
import "./Autor.css";

const estiloPersonalizado = {
  color: 'white'
}
const Autor = () => {
  return (
    <>
    <div style={estiloPersonalizado }></div>
      
      <GitHubUser username = "qmclouca" />
    </>
  );
};
export default Autor;
