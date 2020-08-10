import React, { Component, useState, useEffect } from "react";
import ChairDataService from "../services/chairService";
import salasService from '../services/salas.services';

export default class AddChair extends Component {
  constructor(props) {
    super(props);
    this.onChangeRoom = this.onChangeRoom.bind(this);
    this.onChangePatient = this.onChangePatient.bind(this);
    this.saveChair = this.saveChair.bind(this);
    this.newChair = this.newChair.bind(this);
    
    this.state = {
      id: null,
      room: "",
      patient: "", 
      salas: [],
      selectedSala: "",
      occupied: false,

      submitted: false
    };

  }
  componentDidMount() {
    salasService.getSalas().then(lista_salas => this.setState({ salas: lista_salas }));

    const salasItems = this.state.salas.map((sala) =>
      <option>{sala.id}</option>
    );
  }

  componentDidMount() {
      salasService.getSalas()
      .then(data => {
        let salasFromApi = data.data.map(sala => {
          return { value: sala.id, display: sala.nombre };
        });
        this.setState({
          salas: [
            {
              value: "",
              display:
                "(Select your favourite sala)"
            }
          ].concat(salasFromApi)
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  

  onChangeRoom(e) {
    this.setState({
      room: e.target.value
    });
  }

  onChangePatient(e) {
    this.setState({
      patient: e.target.value
    });
  }

  saveChair() {
    var data = {
      room: this.state.room,
      patient: this.state.patient
    };

    ChairDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          room: response.data.room,
          patient: response.data.patient,
          occupied: response.data.occupied,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newChair() {
    this.setState({
      id: null,
      room: "",
      patient: "",
      occupied: false,

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>Se ha creado exitosamente</h4>
            <button className="btn btn-success" onClick={this.newChair}>
              Añadir
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="room">Sala</label>
                <select
                  id="room"
                  required
                  value={this.state.room}
                  onChange={this.onChangeRoom}
                  name="room"
                >
                  {this.state.salas.map(sala => (
                    <option
                      key={sala.value}
                    >
                      {sala.display}
                    </option>
                  ))}
                </select>
            </div>

            <div className="form-group">
              <label htmlFor="patient">Paciente</label>
              <input
                type="text"
                className="form-control"
                id="patient"
                required
                value={this.state.patient}
                onChange={this.onChangePatient}
                name="patient"
              />
            </div>

            <button onClick={this.saveChair} className="btn btn-success">
              Agregar
            </button>
          </div>
        )}
      </div>
    );
  }
}
