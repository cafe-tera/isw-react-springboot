import React, { useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";

import equipamientosService from "../services/equipamientos.services";

//----------------------------------------------------------------------
//              MAIN PAGE
//----------------------------------------------------------------------
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
  }, [equipamientos]);

  const handleClickOpen = (event) => {
    setOpen(true);
  };

  const handleClose = (event) => {
    setOpen(false);
  };

  const equipamientosItems = equipamientos.map((equipamiento) => (
    console.log(equipamiento),
    <tr key={equipamiento.id} >
      <td>{equipamiento.nombre ?? "campo nulo"}</td>
      <td>{equipamiento.tipo ?? "campo nulo"} </td>
      <td>{equipamiento.ubicacion ?? "campo nulo"}</td>
      <td>{equipamiento.estado ?? "campo nulo"}</td>
      <td>
        <button onClick={(event) => {
          event.preventDefault();
          equipamientosService.prestarEquipamiento(equipamiento.id);
        }} className="btn btn-primary mb-2">
          Prestar
        </button>
      </td>
      <td>
        <button onClick={(event) => {
          event.preventDefault();
          equipamientosService.devolverEquipamiento(equipamiento.id);
        }} className="btn btn-warning">
          Devolver
        </button>
      </td>
      <td>
        <button
          onClick={(event) => {
            event.preventDefault();
            equipamientosService.eliminarEquipamiento(equipamiento.id);
          }}
          className="btn btn-danger"
        >
          Eliminar
        </button>
      </td>
      {/* <EditEquipamiento open={openEdit} onClose={(event) => handleCloseEdit(event)} /> */}
    </tr>
  ));
  return (
    <div className="col-12">
      <h1>
        Equipamientos -
        <button
          className="btn btn-primary mb-2"
          onClick={(event) => handleClickOpen(event)}
        >
          Agregar
        </button>
      </h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Ubicacion</th>
            <th>Estado</th>
            <th>Prestar</th>
            <th>Devolver</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>{equipamientosItems}</tbody>
      </table>
      <AddEquipamiento open={open} onClose={(event) => handleClose(event)} />
    </div>
  );
};
//----------------------------------------------------------------------



//----------------------------------------------------------------------
//              ADD EQUIPAMENT DIALOG
//----------------------------------------------------------------------
function AddEquipamiento(props) {
  const disponibilidad = [
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
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [disponible, setDisponible] = React.useState("disponible");

  const handleChange = (event) => {
    console.log(event)
    const keyname = event.target.name;
    if (keyname === "nombre") {
      setNombre(event.target.value);
    } else if (keyname === "tipo") {
      setTipo(event.target.value);
    } else if (keyname === "ubicacion") {
      setUbicacion(event.target.value);
    } else if (keyname === "tipo") {
      setTipo(event.target.value);
    } else if (keyname === "estado") {
      setDisponible(event.target.value);
    } else {
      setDisponible(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    console.log(event.target.value);
    event.preventDefault();
    equipamientosService
      .crearEquipamiento(nombre, tipo, ubicacion, disponible)
      .then((res) => {
        console.log(res);
      });
    onClose(selectedValue);
  };

  const handleClose = (event) => {
    onClose(selectedValue);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Agregar equipamiento</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Completa los campos para agregar un equipamiento.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="nombre"
          key="nombre"
          name="nombre"
          label="Nombre"
          fullWidth
          onChange={(event) => handleChange(event)}
        />
        <TextField
          autoFocus
          margin="dense"
          id="tipo"
          key="tipo"
          name="tipo"
          label="Tipo"
          onChange={(event) => handleChange(event)}
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="ubicacion"
          key="ubicacion"
          name="ubicacion"
          label="Ubicacion"
          fullWidth
          onChange={(event) => handleChange(event)}
        />
        <TextField
          autoFocus
          margin="dense"
          id="estado"
          name="estado"
          select
          fullWidth
          label="Estado"
          value={disponible}
          onChange={(event) => handleChange(event)}
        >
          {disponibilidad.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </DialogContent>
      <DialogActions>
        <button
          onClick={(event) => handleClose(event)}
          className="btn btn-danger"
        >
          Cancel
        </button>
        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          className="btn btn-primary mb-2"
        >
          Agregar
        </button>
      </DialogActions>
    </Dialog>
  );
}
//----------------------------------------------------------------------

export default EquipamientosPage;
