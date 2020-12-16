import axios from 'axios';

class CarStockDataService {

    retrieveAllFlashcardSets() {
        return axios.get(`http://localhost:8080/retrieveAllCarStocks`)
    }

    deleteFlashcardSet(id) {
        return axios.delete(`http://localhost:8080/deleteCarStock/${id}`)
    }

    updateFlashcardSet(cardSet) {
        return axios.put(`http://localhost:8080/updateCarStock`, cardSet)
    }

    createFlashcardSet(cardSet) {
        return axios.post(`http://localhost:8080/addCarStock`, cardSet)
    }
}

export default new CarStockDataService();