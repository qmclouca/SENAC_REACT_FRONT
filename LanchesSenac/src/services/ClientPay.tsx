import axios from "axios";
const url = 'https://sandbox.asaas.com/api/v3/';

const ApiClient = axios.create({
    baseURL: url,
    headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        access_token: '$aact_YTU5YTE0M2M2N2I4MTliNzk0YTI5N2U5MzdjNWZmNDQ6OjAwMDAwMDAwMDAwMDAwNzk0NTA6OiRhYWNoXzIxZDQyNjM1LWFjY2QtNDVhZi04ZmRmLWM3YTg4MjdjOTc5Mg=='
      }
})

export const PayClient = (payform:string) =>{
  return ApiClient.post<any>(`url${payform}`);
}

const options = {
    method: 'POST',
    headers: {accept: 'application/json', 'content-type': 'application/json'}
  };




