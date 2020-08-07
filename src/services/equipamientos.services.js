import axios from 'axios';

const API_URL = "https://isw-rifeco-equipamientos.herokuapp.com"


const getEquipamientos = () =>{
  let url = `${API_URL}/equipamientos/`;
  return axios.get(url);
}

const getEquipamientosById = async (id) => {
  let url = `${API_URL}/equipamientos/${id}`;
  return axios.get(url);
}

const crearEquipamiento = async (equipamiento) => {
  let url = `${API_URL}/equipamientos/`;
  return axios.post(url,  equipamiento );
}

const actualizarEquipamiento = async (equipamiento, id) => {
  let url = `${API_URL}/equipamientos/${id}`;
  return axios.put(url, { equipamiento });
}


const eliminarEquipamiento = async (id) => {
  let url = `${API_URL}/equipamientos/${id}`;
  return axios.delete(url);
}

const equipamientosService = {
    getEquipamientos,
    getEquipamientosById,
    crearEquipamiento,
    actualizarEquipamiento,
    eliminarEquipamiento,
};

export default equipamientosService;