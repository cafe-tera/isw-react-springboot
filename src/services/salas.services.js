import axios from 'axios';

const API_URL = "http://isw.f4d3.io:8080/api/v1"


const getSalas = () => {
    let url = `${API_URL}/salasrec/`;
    return axios.get(url);
}

const getSalasById = (id) => {
    let url = `${API_URL}/salasrec/${id}`;
    return axios.get(url);
}

const editSalas = async (id, nombre, ubicacion, capacidad, disponible) => {
    let url = `${API_URL}/salasrec/${id}`;
    return axios.post(url, {
        nombre: nombre,
        ubicacion: ubicacion,
        capacidad: capacidad,
        estado: disponible
    });
}

const deleteSalasById = (id) => {
    let url = `${API_URL}/salasrec/${id}`;
    return axios.delete(url);
}

const createSalas = async (nombre, ubicacion, capacidad, disponible) => {
    let url = `${API_URL}/salasrec/`;
    return axios.post(url, {
        id: "",
        nombre: nombre,
        ubicacion: ubicacion,
        capacidad: capacidad,
        // estado: disponible
    });
}

const salasService = {
    getSalas,
    getSalasById,
    deleteSalasById,
    createSalas,
    editSalas
};

export default salasService;