import axios from "axios";
import { UsuarioProps } from "../interfaces/UsuarioProps";

const baseURL = "http://localhost:8080";
const baseURLUsuarios= "http://localhost:8080/usuarios";

const apiClient = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
})

export const getListar = ()  => {
    return apiClient.get<any>(`${baseURLUsuarios}`);
}

export const postUsuario = async (usuario: UsuarioProps)  => {
    return await apiClient.post<any>(`${baseURLUsuarios}`, usuario); 
}