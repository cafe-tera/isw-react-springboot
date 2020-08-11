import axios from 'axios';

const API_URL = "https://solicitudes-reservas.herokuapp.com"

const getSolicitudesS = () => {
    let url = `${API_URL}/solicitudsillon/`;
    return axios.get(url);
}

const addSolicitudesS = (idPaciente, Descripcion) => {
    let url = `${API_URL}/solicitudsillon/`;
    return axios.post(url,{
        idPaciente: idPaciente,
        descripcion: Descripcion
    });
}
const deleteSolicitudesS = (id) => {
    let url = `${API_URL}/solicitudsillon/${id}`;
    return axios.delete(url);
}

const getSolicitudS = (id) => {
    let url = `${API_URL}/solicitudsillon/${id}`;
    return axios.get(url);
}

const solicitudesSService = {
    getSolicitudesS,
    addSolicitudesS,
    deleteSolicitudesS,
    getSolicitudS
};

export default solicitudesSService;