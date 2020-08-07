import axios from 'axios';

const API_URL = "https://isw-rifeco-equipamientos.herokuapp.com"


const getEquipamientos = async () =>{
  let url = `${API_URL}/equipamientos/`;
  return axios.get(url)
  .then(res => {
    console.log(res);
    console.log(res.data);
  });
}

const getEquipamientosById = async (id) => {
  let url = `${API_URL}/equipamientos/${id}`;
  return axios.get(url)
  .then(res => {
    console.log(res);
    console.log(res.data);
  });
}

const crearEquipamiento = async (equipamiento) => {
  let url = `${API_URL}/equipamientos/`;
  return axios.post(url, { equipamiento })
  .then(res => {
    console.log(res);
    console.log(res.data);
  });
}

const crearEquipamiento = async (equipamiento, id) => {
  let url = `${API_URL}/equipamientos/${id}`;
  return axios.put(url, { equipamiento })
  .then(res => {
    console.log(res);
    console.log(res.data);
  });
}


const eliminarEquipamiento = async (id) => {
  let url = `${API_URL}/equipamientos/${id}`;
  return axios.delete(url)
  .then(res => {
    console.log(res);
    console.log(res.data);
  });
}

const equipamientosService = {
    getEquipamientos,
    getEquipamientosById,
    crearEquipamiento,
    eliminarEquipamiento,
};

export default equipamientosService;