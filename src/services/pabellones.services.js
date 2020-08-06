import axios from 'axios';

const API_URL = "http://isw.f4d3.io:8080/api/v1/"


const getPabellones = () => {
    let url = `${API_URL}/pabellones/`;
    return axios.get(url);
}

const getPabellonesById = (id) => {
    let url = `${API_URL}/pabellones/${id}`;
    return axios.get(url);
}

const editPabellones = (id) => {
    let url = `${API_URL}/pabellones/edit/${id}`;
    return axios.put(url);
}

const deletePabellonesById = (id) => {
    let url = `${API_URL}/pabellones/${id}`;
    return axios.delete(url);
}

const createPabellones = () => {
    let url = `${API_URL}/pabellones/`;
    return axios.post(url);
}

const pabellonesService = {
    getPabellones,
    getPabellonesById,
};

export default pabellonesService;