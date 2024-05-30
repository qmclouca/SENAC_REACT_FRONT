import axios from "axios";

const baseURL = "http://localhost:8080";
const baseURLItensPedido = "http://localhost:8080/itenspedido";

const apiClient = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
})

export const getListar = ()  => {
    return apiClient.get<any>(`${baseURLItensPedido}`);
}