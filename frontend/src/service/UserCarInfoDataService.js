import axios from 'axios';

class UserCarInfoDataService {

    retrieveAllUserCarInfos() {
        return axios.get(`http://localhost:8080/retrieveAllUserCarInfos`)
    }

    retrieveSum(userID) {
        return axios.get(`http://localhost:8080/retrieveprice/${userID}`)
    }

    deleteUserCarInfo(id) {
        return axios.delete(`http://localhost:8080/deleteUserCarInfo/${id}`)
    }

    updateUserCarInfo(userCarInfo) {
        return axios.put(`http://localhost:8080/updateUserCarInfo`, userCarInfo)
    }

    createUserCarInfo(userCarInfo) {
        return axios.post(`http://localhost:8080/addUserCarInfo`, userCarInfo)
    }
}

export default new UserCarInfoDataService();