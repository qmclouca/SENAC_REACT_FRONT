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

export const getUltimoPedidoEmAberto = (usuarioId: number)  => {
    return apiClient.get<any>(`${baseURLPedidos}/${usuarioId}`);
}

export const postPedido = (pedido: Pedido)  => {
    return apiClient.post<any>(`${baseURLPedidos}`, pedido); // Certifique-se de enviar o objeto pedido
}

export const putPedido = (pedido: Pedido, pedidoId: number)  => {
    return apiClient.put<any>(`${baseURLPedidos}/${pedidoId}`, pedido); // Certifique-se de enviar o objeto pedido e o pedidoId
}
