import axios from 'axios';

const API_URL = "https://isw-omuga-spring.herokuapp.com"
// const API_URL = "localhost:3000"


const getTiendas = () => {
  let url = `${API_URL}/tiendas`;
  return axios.get(url);
}

const tiendasService = {
    getTiendas,
};

export default tiendasService;