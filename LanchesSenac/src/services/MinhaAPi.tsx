import axios from "axios";
import { Usuario } from "../interfaces/Usuario";

const apiClient = axios.create({
    baseURL: 'http://localhost:8080/api/',
    headers: {
        'Content-Type': 'application/json'
    }
})

export const cadastrar = (usuario: Usuario)  => {
    return apiClient.post<UsuarioDetalhes>(`$(baseURL}+https://api.github.com/users/${usuario}`);
 }