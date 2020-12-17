import axios from 'axios';

class CarStockDataService {

    retrieveAllFlashcardSets() {
        return axios.get(`http://localhost:8080/retrieveAllCarStocks`)
    }

    deleteFlashcardSet(id) {
        return axios.delete(`http://localhost:8080/deleteCarStock/${id}`)
    }

    updateFlashcardSet(carstock) {
        return axios.put(`http://localhost:8080/updateCarStock`, carstock)
    }

    createFlashcardSet(carstock) {
        return axios.post(`http://localhost:8080/addCarStock`, carstock)
    }
}

export default new CarStockDataService();