import axios from "axios";
const baseUrl = 'https://jq8d6sq2-7029.brs.devtunnels.ms';
const apiClient = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json'
    }
})

export const consultaAcaoPorCodigo = (codigoAcao: string)  => {
    return apiClient.get<any>(`${baseUrl}/Share/${codigoAcao}`);
 }