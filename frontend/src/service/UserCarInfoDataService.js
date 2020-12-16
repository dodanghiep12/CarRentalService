import axios from 'axios';

class UserCarInfoDataService {

    retrieveAllFlashcardSets() {
        return axios.get(`http://localhost:8080/retrieveAllUserCarInfos`)
    }

    deleteFlashcardSet(id) {
        return axios.delete(`http://localhost:8080/deleteUserCarInfo/${id}`)
    }

    updateFlashcardSet(userCarInfo) {
        return axios.put(`http://localhost:8080/updateUserCarInfo`, userCarInfo)
    }

    createFlashcardSet(userCarInfo) {
        return axios.post(`/http://localhost:8080/addUserCarInfo`, userCarInfo)
    }
}

export default new UserCarInfoDataService();