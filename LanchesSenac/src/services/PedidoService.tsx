import axios from "axios";
import { Pedido } from "../interfaces/Pedido";

const baseURL = "http://localhost:8080";
const baseURLPedidos = "http://localhost:8080/pedidos";

const apiClient = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
})

export const getUltimoPedidoEmAberto = async (usuarioId: number)  => {
    return await apiClient.get<any>(`${baseURLPedidos}/aberto/${usuarioId}`);
}

export const postPedido = async (pedido: Pedido)  => {
    return await apiClient.post<any>(`${baseURLPedidos}`, pedido); 
}

export const putPedido = (pedido: Pedido, pedidoId: number)  => {
    return apiClient.put<any>(`${baseURLPedidos}/${pedidoId}`, pedido); 
}
