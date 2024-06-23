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

    findPaginationOfFuncionariosBySearch(search: String, pageNumber: number) {
        return axios.get(`${url}`, {
            params: {
                search,
                pageNumber
            }
        })
        .then((response) => {
            return response.data;
        }).catch(error => {
            throw error;
        })
    }

    async deleteFuncionarioById(funcionarioId:number) {
        await axios.delete(`${url}/${funcionarioId}`)
        .then((response) => {
            console.log(response);
        }).catch(error => {
            console.log("Erro ao deletar funcionario:", error);
        })
    }

    async getFuncionarioById(funcionarioId:number) {
        return await axios.get(`${url}/${funcionarioId}`)
        .then((response) => {
            return response;
        }).catch(error => {
            console.log("Erro ao buscar funcionario", error);
        })
    }

}

export default new FuncionarioClient();