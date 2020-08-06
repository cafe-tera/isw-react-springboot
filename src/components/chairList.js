import React, { Component } from "react";
import ChairDataService from "../services/chairService";
import { Link } from "react-router-dom";
import one from "../assets/silla2.png";
import two from "../assets/silla3.png";
import { Button } from 'react-bootstrap';
import history from './../history';

export default class ChairsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchRoom = this.onChangeSearchRoom.bind(this);
    this.retrieveChairs = this.retrieveChairs.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveChair = this.setActiveChair.bind(this);
    this.removeAllChairs = this.removeAllChairs.bind(this);
    this.searchRoom = this.searchRoom.bind(this);

    this.state = {
      chairs: [],
      currentChair: null,
      currentIndex: -1,
      searchRoom: ""
    };
  }

  componentDidMount() {
    this.retrieveChairs();
  }

  onChangeSearchRoom(e) {
    const searchRoom = e.target.value;

    this.setState({
      searchRoom: searchRoom
    });
  }

  retrieveChairs() {
    ChairDataService.getAll()
      .then(response => {
        this.setState({
          chairs: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveChairs();
    this.setState({
      currentChair: null,
      currentIndex: -1
    });
  }

  setActiveChair(chair, index) {
    this.setState({
      currentChair: chair,
      currentIndex: index
    });
  }

  removeAllChairs() {
    ChairDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchRoom() {
    ChairDataService.findByRoom(this.state.searchRoom)
      .then(response => {
        this.setState({
          chairs: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  render() {
    const { searchRoom, chairs, currentChair, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar Sala"
              value={searchRoom}
              onChange={this.onChangeSearchRoom}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchRoom}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Salas:</h4>

          <ul className="list-group">
            {chairs &&
              chairs.map((chair, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveChair(chair, index)}
                  key={index}
                >
                  {chair.room}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllChairs}
          >
            Eliminar Sillones
          </button>
        </div>
        <div className="col-md-6">
          {currentChair ? (
            <div>
              <h4>Sillón</h4>
              <div>
                <label>
                  <strong>Sala:</strong>
                </label>{" "}
                {currentChair.room}
              </div>
              <div>
                <label>
                  <strong>Paciente:</strong>
                </label>{" "}
                {currentChair.patient}
              </div>
              <div>
                <label>
                  <strong>Estatus:</strong>
                </label>{" "}
                {currentChair.occupied ? "Ocupado" : "Free"}
              </div>
              <div className="grid-box">
            {currentChair.occupied ? (
                <img src={one} alt="libre" width="150" height="150"/> 
                ) : <img src={two} alt="ocupado" width="150" height="150"/> }
              </div>
              <Link
                to={"/chairs/" + currentChair.id}
                className="badge badge-warning"
              >
                Editar
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Haga click en un Sillón</p>
              <Button variant="btn btn-success" onClick={() => history.push("/add")}>Añadir</Button>
            </div>
          )}
        </div>
      </div>
    );
  }
}