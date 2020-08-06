import axios from "axios";

export default axios.create({
  baseURL: "https://LALA.herokuapp.com/api/", //Cambiar por el real xd
  headers: {
    "Content-type": "application/json"
  }
});

