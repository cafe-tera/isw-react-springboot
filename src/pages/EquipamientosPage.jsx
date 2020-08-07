import React,{useState, useEffect} from 'react';


import equipamientosService from '../services/equipamientos.services';

const EquipamientosPage = () => {

    const [equipamientos, setEquipamientos] = useState([]);
    useEffect(() => {
        equipamientosService.getEquipamientos().then(res =>{
            setEquipamientos(res.data);
            console.log(res);
        }).catch(error => {
            console.log(error);
        });
    }, []);

    
  const equipamientosItems = equipamientos.map((equipamiento) =>
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
);
    return(
    <div class="col-12">
    <h1>Equipamientos -
    <a href="/equipamientos/agregar" class="btn btn-primary mb-2">Agregar</a>
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
        <tbody>
            {equipamientosItems}
        </tbody>
    </table>
</div>
    )
}

export default EquipamientosPage;