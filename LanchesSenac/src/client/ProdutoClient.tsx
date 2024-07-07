import axios from 'axios';
import ProdutoDto from '../dto/ProdutoDto';

const url = "http://localhost:8080/produtos";

class ProdutoClient {
    constructor() {
    }

    salvarProduto(produto: ProdutoDto) {
        return axios.post<ProdutoDto>(url, produto)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.error("Erro ao salvar produto:", error);
                throw error;
            });
    }

    listarTodosProdutos() {
        return axios.get<ProdutoDto[]>(url)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.error("Erro ao listar produtos:", error);
                throw error;
            });
    }
}

export default new ProdutoClient();
