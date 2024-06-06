import axios from "axios";
import { UsuarioAsaas } from "../interfaces/UsuarioAsaas";


const apiClient = axios.create({
    baseURL: 'https://sandbox.asaas.com/api/v3/',
    headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'access_token': '$aact_YTU5YTE0M2M2N2I4MTliNzk0YTI5N2U5MzdjNWZmNDQ6OjAwMDAwMDAwMDAwMDAwNzk0NTA6OiRhYWNoXzRmYTQwZjJlLTRmM2MtNDcwNy1iNTA2LTk3MDVmMmM0MThiMQ=='
    }
})



export const CriarUsuarioAsaas = (usuarioAsaas: UsuarioAsaas)  => {
   return apiClient.post<any>('customers',  usuarioAsaas);
}

export const CriarPedidoPagamento = () => {
    return apiClient
}