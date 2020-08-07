import axios from 'axios';

const API_URL = "http://isw.f4d3.io:8080/api/v1/"


const getSalas = () => {
    let url = `${API_URL}/salasrec/`;
    return axios.get(url);
}

const getSalasById = (id) => {
    let url = `${API_URL}/salasrec/${id}`;
    return axios.get(url);
}

const editSalas = (id) => {
    let url = `${API_URL}/salasrec/edit/${id}`;
    return axios.put(url);
}

const deleteSalasById = (id) => {
    let url = `${API_URL}/salasrec/${id}`;
    return axios.delete(url);
}

const createSalas = () => {
    let url = `${API_URL}/salasrec/`;
    return axios.post(url);
}

const salasService = {
    getSalas,
    getSalasById,
};

export default salasService;