import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        'Content-Type': 'application/json'
    }
})

export const fetchRodolfo = (symbol: string)  => {
   return apiClient.get<any>(`https://g183k2nx-7029.brs.devtunnels.ms/Share/${symbol}`);
}

