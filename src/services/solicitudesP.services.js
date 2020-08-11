import axios from 'axios';

const API_URL = "https://solicitudes-reservas.herokuapp.com"

const getSolicitudesP = () => {
    let url = `${API_URL}/solicitudpabellon/`;
    return axios.get(url);
}

const addSolicitudesP = (idPaciente, Descripcion) => {
    let url = `${API_URL}/solicitudpabellon/`;
    return axios.post(url,{
        idPaciente: idPaciente,
        descripcion: Descripcion
    });
}
const deleteSolicitudesP = (id) => {
    let url = `${API_URL}/solicitudpabellon/${id}`;
    return axios.delete(url);
}

const getSolicitudP = (id) => {
    let url = `${API_URL}/solicitudpabellon/${id}`;
    return axios.get(url);
}

const solicitudesPService = {
    getSolicitudesP,
    addSolicitudesP,
    deleteSolicitudesP,
    getSolicitudP
};

export default solicitudesPService;