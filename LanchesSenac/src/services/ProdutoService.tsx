import axios from "axios";
import { Produto } from "../interfaces/Produto";

const baseURL = "http://localhost:8080";
const baseURLProdutos = "http://localhost:8080/produtos";

const apiClient = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
})

export const getListar = ()  => {
    return apiClient.get<any>(`${baseURLProdutos}`);
}

export const postProduto = async (produto: Produto)  => {
    return await apiClient.post<any>(`${baseURLProdutos}`, produto); 
}