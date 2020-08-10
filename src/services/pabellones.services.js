import axios from 'axios';

const API_URL = "http://isw.f4d3.io:8080/api/v1"


const getPabellones = () => {
    let url = `${API_URL}/pabellones/`;
    return axios.get(url);
}

const getPabellonesById = (id) => {
    let url = `${API_URL}/pabellones/${id}`;
    return axios.get(url);
}

const editPabellones = async (id, nombre, ubicacion, capacidad, disponible) => {
    let url = `${API_URL}/pabellones/${id}`;
    return axios.post(url, {
        nombre: nombre,
        ubicacion: ubicacion,
        capacidad: capacidad,
        estado: disponible
    });
}

const deletePabellonesById = (id) => {
    let url = `${API_URL}/pabellones/${id}`;
    return axios.delete(url);
}

const createPabellones = async (nombre, ubicacion, capacidad, disponible) => {
    let url = `${API_URL}/pabellones/`;
    return axios.post(url, {
        id: "",
        nombre: nombre,
        ubicacion: ubicacion,
        capacidad: capacidad
        // estado: disponible
    });
}

const pabellonesService = {
    getPabellones,
    getPabellonesById,
    deletePabellonesById,
    createPabellones,
    editPabellones
};

export default pabellonesService;