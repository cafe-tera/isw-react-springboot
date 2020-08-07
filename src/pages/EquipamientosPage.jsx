import React, { useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import { blue } from "@material-ui/core/colors";

import equipamientosService from "../services/equipamientos.services";

function SimpleDialog(props) {
  const currencies = [
    {
      value: "prestado",
      label: "prestado",
    },
    {
      value: "disponible",
      label: "disponible",
    },
  ];
  const { onClose, selectedValue, open } = props;
  const [currency, setCurrency] = React.useState("disponible");

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Editar pabellon</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Completa los campos para agregar un equipamiento.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="nombre"
          label="Nombre"
          fullWidth
        />
        <TextField autoFocus margin="dense" id="tipo" label="Tipo" fullWidth />
        <TextField
          autoFocus
          margin="dense"
          id="ubicacion"
          label="Ubicacion"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="estado"
          select
          fullWidth
          label="Estado"
          value={currency}
          onChange={handleChange}
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </DialogContent>
      <DialogActions>
        <button onClick={handleClose} class="btn btn-danger">
          Cancel
        </button>
        <button onClick={handleClose} class="btn btn-primary mb-2">
          Agregar
        </button>
      </DialogActions>
    </Dialog>
  );
}

const EquipamientosPage = () => {
  const [equipamientos, setEquipamientos] = useState([]);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    equipamientosService
      .getEquipamientos()
      .then((res) => {
        setEquipamientos(res.data);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const equipamientosItems = equipamientos.map((equipamiento) => (
    <tr>
      <td>{equipamiento.nombre ?? "campo nulo"}</td>
      <td>{equipamiento.tipo ?? "campo nulo"} </td>
      <td>{equipamiento.ubicacion ?? "campo nulo"}</td>
      <td>{equipamiento.estado ?? "campo nulo"}</td>
      <td>
        <a href="/equipamientos/" class="btn btn-warning">
          Editar
        </a>
      </td>
      <td>
        <a href="/equipamientos/" class="btn btn-danger">
          Eliminar
        </a>
      </td>
    </tr>
  ));
  return (
    <div class="col-12">
      <h1>
        Equipamientos -
        <button class="btn btn-primary mb-2" onClick={handleClickOpen}>
          Agregar
        </button>
      </h1>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Ubicacion</th>
            <th>Estado</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>{equipamientosItems}</tbody>
      </table>
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
};

export default EquipamientosPage;
