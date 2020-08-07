import React, { useState, useEffect } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { blue } from '@material-ui/core/colors';

import pabellonesService from '../services/pabellones.services';

function SimpleDialog(props) {
    // const classes = useStyles();
    const { onClose, selectedValue, open } = props;
  
    const handleClose = () => {
      onClose(selectedValue);
    };
  
    const handleListItemClick = (value) => {
      onClose(value);
    };
  
    return (
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">Editar pabellon</DialogTitle>
      </Dialog>
    );
  }

const PabellonesPage = () => {

    const [pabellones, setPabellones] = useState([]);
    const [open, setOpen] = React.useState(false);
    useEffect(() => {
        pabellonesService.getPabellones().then(res => {
            setPabellones(res.data);
            console.log(res);
        }).catch(error => {
            console.log(error);
        });
    }, []);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
    };


    const pabellonesItems = pabellones.map((pabellon) =>
        <tr>
            <td>{pabellon.nombre ?? "campo nulo"}</td>
            <td>{pabellon.ubicacion ?? "campo nulo"}</td>
            <td>{pabellon.estado ?? "no asignado"}</td>
            <td>
                <button class="btn btn-warning" onClick={handleClickOpen}>
                    Editar
                </button>
            </td>
            <td>
                <a href="/pabellones/" class="btn btn-danger">
                    Eliminar
                </a>
            </td>
        </tr>
    );
    return (
        <div class="col-12">
            <h1>Pabellones - <a href="/pabellones/agregar" class="btn btn-primary mb-2">Agregar</a>
            </h1>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Ubicacion</th>
                        <th>Estado</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {pabellonesItems}
                </tbody>
            </table>
            <SimpleDialog open={open} onClose={handleClose} />
        </div>
    )
}

export default PabellonesPage;