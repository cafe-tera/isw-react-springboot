import axios from 'axios';

const API_URL = "https://solicitudes-reservas.herokuapp.com"

const getReservasS = () => {
    let url = `${API_URL}/reservasillon`;
    return axios.get(url);
}

const addReservasS = (idSolicitud, idSillon, Reservado, Horario) => {
    let url = `${API_URL}/reservasillon`;
    return axios.post(url,{
        idSolicitud: idSolicitud,
        idSillon: idSillon,
        Reservado: Reservado,
        Horario: Horario,
    });
}
const deleteReservasS = (id) => {
    let url = `${API_URL}/reservasillon/${id}`;
    return axios.delete(url);
}

const updateReservasS = (id, idSolicitud, idSillon, Reservado, Horario) => {
    let url = `${API_URL}/reservasillon/${id}`;
    return axios.put(url,{
      idSolicitud: idSolicitud,
      idSillon: idSillon,
      Reservado: Reservado,
      Horario: Horario,
    });
}

const getReservaS = (id) => {
    let url = `${API_URL}/reservasillon/${id}`;
    return axios.get(url);
}

const reservasSService = {
    getReservasS,
    addReservasS,
    deleteReservasS,
    updateReservasS,
    getReservaS
};

export default reservasSService;