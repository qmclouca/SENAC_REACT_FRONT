import axios from "axios";
import { UsuarioAsaas } from "../interfaces/UsuarioAsaas";
import { PagamentoAsaas } from "../interfaces/PagamentoAsaas";
import { BuscaId } from "../interfaces/BuscaId";


const apiClient = axios.create({
    baseURL: 'https://sandbox.asaas.com/api/v3/',
    headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'access_token': '$aact_YTU5YTE0M2M2N2I4MTliNzk0YTI5N2U5MzdjNWZmNDQ6OjAwMDAwMDAwMDAwMDAwNzk0NTA6OiRhYWNoXzU0YWYwZGU2LTIzN2MtNDRkYy05ZGIyLTJmN2Y4ZjAxNGE5ZQ=='
    }
})



export const CriarUsuarioAsaas = (usuarioAsaas: UsuarioAsaas)  => {
   return apiClient.post<any>('customers',  usuarioAsaas);
}

export const CriarPedidoPagamento = (pagamentoAsaas: PagamentoAsaas) => {
    return apiClient.post<any>('payments', pagamentoAsaas)
}

export const QRPixCode = (id:BuscaId) =>{
    return apiClient.get<any>(`payments/${id}/pixQrCode`)
}