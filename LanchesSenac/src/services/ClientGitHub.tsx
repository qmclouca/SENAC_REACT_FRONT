import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        'Content-Type': 'application/json'
    }
})


export const fetchGitHubUser = (username: string)  => {
   return apiClient.get<any>(`https://api.github.com/users/${username}`);
}

