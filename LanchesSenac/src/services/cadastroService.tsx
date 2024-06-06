import axios from "axios";
import { cadastroProps } from "../interfaces/cadastroProps";



const apiClient = axios.create({
    baseURL: 'https://localhost:8080',
        headers: {
        'Content-Type': 'application/json'
    }

    


})

export const cadastrar= (cadastro : cadastroProps)  => {
    return apiClient.post<any>(`https://localhost:8080/cadastrar`);
 }




