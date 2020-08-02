import axios from 'axios';

const API_URL = "https://isw-rifeco-equipamientos.herokuapp.com"


const getEquipamientos = () => {
  let url = `${API_URL}/equipamientos`;
  return axios.get(url);
}

const equipamientosService = {
    getEquipamientos,
};

export default equipamientosService;