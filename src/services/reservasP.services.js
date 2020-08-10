import axios from 'axios';

const API_URL = "https://solicitudes-reservas.herokuapp.com"

const getReservasP = () => {
    let url = `${API_URL}/reservapabellon`;
    return axios.get(url);
}

const addReservasP = (idSolicitud, idPabellon, Reservado, Horario) => {
    let url = `${API_URL}/reservapabellon`;
    return axios.post(url,{
        idSolicitud: idSolicitud,
        idPabellon: idPabellon,
        Reservado: Reservado,
        Horario: Horario,
    });
}
const deleteReservasP = (id) => {
    let url = `${API_URL}/reservapabellon/${id}`;
    return axios.delete(url);
}

const updateReservasP = (id, idSolicitud, idPabellon, Reservado, Horario) => {
    let url = `${API_URL}/reservapabellon/${id}`;
    return axios.put(url,{
      idSolicitud: idSolicitud,
      idPabellon: idPabellon,
      Reservado: Reservado,
      Horario: Horario,
    });
}

const getReservaP = (id) => {
    let url = `${API_URL}/reservapabellon/${id}`;
    return axios.get(url);
}

const reservasPService = {
    getReservasP,
    addReservasP,
    deleteReservasP,
    getReservaP,
    updateReservasP
};

export default reservasPService;