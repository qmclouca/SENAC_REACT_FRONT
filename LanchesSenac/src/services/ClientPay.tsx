import axios from "axios";


const ApiClient = axios.create({
    baseURL:'https://sandbox.asaas.com/api/v3/',
    headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        access_token: '$aact_YTU5YTE0M2M2N2I4MTliNzk0YTI5N2U5MzdjNWZmNDQ6OjAwMDAwMDAwMDAwMDA0MTM1Njc6OiRhYWNoX2I4NzYxZjhhLWFmZTYtNGQ1Yi1hNmVjLTliNTVhNGQ1YTIwMQ=='
      }
})

export const PayClient = (payform:string) =>{
    return ApiClient.get<any>(`https://sandbox.asaas.com/api/v3/${payform}`)
}


