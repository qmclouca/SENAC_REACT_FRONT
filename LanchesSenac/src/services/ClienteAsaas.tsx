import axios from "axios";
import { RequestQRCode } from "../interfaces/RequestQRCode";
import { ResponseQRCode } from "../interfaces/ResponseQRCode";


const apiClient = axios.create({
    baseURL: 'https://sandbox.asaas.com/api/v3/',
    headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'access_token': '$aact_YTU5YTE0M2M2N2I4MTliNzk0YTI5N2U5MzdjNWZmNDQ6OjAwMDAwMDAwMDAwMDAwNzk0NTA6OiRhYWNoXzU0YWYwZGU2LTIzN2MtNDRkYy05ZGIyLTJmN2Y4ZjAxNGE5ZQ=='
    }
})

export const QRPixCode = (requestData:RequestQRCode) =>{
    return apiClient.post<ResponseQRCode>('pix/qrCodes/static', requestData);
}