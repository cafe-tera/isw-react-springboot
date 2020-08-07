import React, { Component } from "react";
import ChairDataService from "../services/chairService";

export default class Chair extends Component {
  constructor(props) {
    super(props);
    this.onChangeRoom = this.onChangeRoom.bind(this);
    this.onChangePatient = this.onChangePatient.bind(this);
    this.getChair = this.getChair.bind(this);
    this.updateOccupied = this.updateOccupied.bind(this);
    this.updateChair = this.updateChair.bind(this);
    this.deleteChair = this.deleteChair.bind(this);

    this.state = {
      currentChair: {
        id: null,
        room: "",
        patient: "",
        occupied: false
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getChair(this.props.match.params.id);
  }

  onChangeRoom(e) {
    const room = e.target.value;

    this.setState(function(prevState) {
      return {
        currentChair: {
          ...prevState.currentChair,
          room: room
        }
      };
    });
  }

  onChangePatient(e) {
    const patient = e.target.value;
    
    this.setState(prevState => ({
      currentChair: {
        ...prevState.currentChair,
        patient: patient
      }
    }));
  }

  getChair(id) {
    ChairDataService.get(id)
      .then(response => {
        this.setState({
          currentChair: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateOccupied(status) {
    var data = {
      id: this.state.currentChair.id,
      room: this.state.currentChair.room,
      patient: this.state.currentChair.patient,
      occupied: status
    };

    ChairDataService.update(this.state.currentChair.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentChair: {
            ...prevState.currentChair,
            occupied: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateChair() {
    ChairDataService.update(
      this.state.currentChair.id,
      this.state.currentChair
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "Información Actualizada"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteChair() {    
    ChairDataService.delete(this.state.currentChair.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/chairs')
      })
      .catch(e => {
        console.log(e);
      });
  }


  render() {
    const { currentChair } = this.state;

    return (
      <div>
        {currentChair ? (
          <div className="edit-form">
            <h4>Silla</h4>
            <form>

              <div className="form-group">
                <label htmlFor="room">Sala</label>
                <input
                  type="text"
                  className="form-control"
                  id="room"
                  value={currentChair.room}
                  onChange={this.onChangeRoom}
                />
              </div>
              <div className="form-group">
                <label htmlFor="patient">Paciente</label>
                <input
                  type="text"
                  className="form-control"
                  id="patient"
                  value={currentChair.patient}
                  onChange={this.onChangePatient}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Estado:</strong>
                </label>
                {currentChair.occupied ? "Ocupado" : "Pending"}
              </div>
            </form>

            {currentChair.occupied ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updateOccupied(false)}
              >
                Disponible
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updateOccupied(true)}
              >
                En Uso
              </button>
            )}

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteChair}
            >
              Eliminar
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateChair}
            >
              Actualizar
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Haga click en una silla</p>
          </div>
        )}
      </div>
    );
  }
}