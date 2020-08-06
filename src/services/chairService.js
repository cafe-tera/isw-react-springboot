import http from "../http-common";
//OJO ESTO VA A CAMBIAR CUANDO AGREGEMOS LA API A HEROKU
class ChairDataService {
  getAll() {
    return http.get("/chairs");
  }

  get(id) {
    return http.get(`/chairs/${id}`);
  }

  create(data) {
    return http.post("/chairs", data);
  }

  update(id, data) {
    return http.put(`/chairs/${id}`, data);
  }

  delete(id) {
    return http.delete(`/chairs/${id}`);
  }

  deleteAll() {
    return http.delete(`/chairs`);
  }

  findByRoom(room) {
    return http.get(`/chairs?room=${room}`);
  }
}

export default new ChairDataService();
