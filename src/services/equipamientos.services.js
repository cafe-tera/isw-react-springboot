import axios from "axios";

const API_URL = "https://isw-rifeco-equipamientos.herokuapp.com";

const getEquipamientos = () => {
  let url = `${API_URL}/equipamientos/`;
  return axios.get(url);
};

const getEquipamientosById = async (id) => {
  let url = `${API_URL}/equipamientos/${id}`;
  return axios.get(url);
};

const crearEquipamiento = async (nombre, tipo, ubicacion, disponibilidad) => {
  let url = `${API_URL}/equipamientos/`;
  return axios.post(url, {
    nombre: nombre,
    tipo: tipo,
    ubicacion: ubicacion,
    estado: disponibilidad
  });
};

const actualizarEquipamiento = async (id, nombre, tipo, ubicacion, disponibilidad) => {
  let url = `${API_URL}/equipamientos/${id}`;
  return axios.put(url,  {
    nombre: nombre,
    tipo: tipo,
    ubicacion: ubicacion,
    estado: disponibilidad
  });
};

const eliminarEquipamiento = async (id) => {
  let url = `${API_URL}/equipamientos/${id}`;
  return axios.delete(url);
};

const equipamientosService = {
  getEquipamientos,
  getEquipamientosById,
  crearEquipamiento,
  actualizarEquipamiento,
  eliminarEquipamiento,
};

export default equipamientosService;
