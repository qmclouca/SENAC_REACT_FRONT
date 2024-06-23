import axios from "axios";

const url  = "http://localhost:8080/funcionarios";


class FuncionarioClient {
    constructor() {
    }

    findPaginationOfFuncionDto() {
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

    findPaginationOfFuncionariosBySearch(search: String) {
        return axios.get(`${url}`, {
            params: {
                search
            }
        })
        .then((response) => {
            return response.data;
        }).catch(error => {
            throw error;
        })
    }

}

export default new FuncionarioClient();