import axios from "axios";

export default axios.create({
  baseURL: "https://dosmasdos.herokuapp.com/api/", //Cambiar por el real xd
  headers: {
    "Content-type": "application/json"
  }
});

