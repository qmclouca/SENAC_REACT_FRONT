import axios from "axios";

const url  = "http://localhost:8080/funcionarios";

class CargoClient {
    constructor() {
    }

    async getAllCargos() {
        return await axios.get(`${url}/allCargos`)
        .then((response) => {
            return response;
        }).catch(error => {
            console.log("Erro ao carregar cargos: "+error)
        }) 
    }

}

export default new CargoClient();