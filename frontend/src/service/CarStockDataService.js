import axios from 'axios';

class CarStockDataService {

    retrieveAllCarStock() {
        return axios.get(`http://localhost:8080/retrieveAllCarStocks`)
    }

    deleteCarStock(id) {
        return axios.delete(`http://localhost:8080/deleteCarStock/${id}`)
    }

    updateCarStock(carstock) {
        return axios.put(`http://localhost:8080/updateCarStock`, carstock)
    }

    createCarStock(carstock) {
        return axios.post(`http://localhost:8080/addCarStock`, carstock)
    }
}

export default new CarStockDataService();