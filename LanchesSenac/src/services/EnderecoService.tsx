import axios from "axios";

const baseURL = "http://localhost:8080";
const baseURLEndereco = "http://localhost:8080/enderecos";

const apiClient = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
})