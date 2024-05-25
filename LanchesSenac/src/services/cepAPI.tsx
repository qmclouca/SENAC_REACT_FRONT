import axios from "axios";


const apiClient = axios.create({
    baseURL: 'https://viacep.com.br/',
    headers: {
        'Content-Type': 'application/json'
    }


})