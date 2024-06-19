import axios from "axios";

const url  = "http://localhost:8080/funcionarios";


class FuncionarioClient {
    constructor() {
    }

    listAllFuncionarios() {
        return axios.get(url)
            .then((response) => {
                console.log(response.data);
                return response.data;
            })
            .catch(error => {
                console.log("Erro ao listar funcionários:", error);
                throw error;
            });
    }

}

export default new FuncionarioClient();