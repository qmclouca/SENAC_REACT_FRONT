import axios from "axios";



const apiClient = axios.create({
    baseURL: 'https://localhost:8080',
        headers: {
        'Content-Type': 'application/json'
    }

    


})

export const fetchLogin = (username: string)  => {
    return apiClient.get<any>(`https://localhost:8080/cadastro`);
 }