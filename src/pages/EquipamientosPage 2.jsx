import React,{useState, useEffect} from 'react';

import NavigationComponent from '../components/NavigationComponent';
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
  <li key={equipamiento.id}>
    {equipamiento.nombre ?? "campo nulo"} - {equipamiento.tipo ?? "campo nulo"} 
    - {equipamiento.ubicacion ?? "campo nulo"} - {equipamiento.estado ?? "campo nulo"}

  </li>
);
    return(
        <div>
            <NavigationComponent></NavigationComponent>
            <div>Lista de todas las Equipamientos</div>
            <ul>
                {equipamientosItems}
            </ul>
        </div>
    )
}

export default EquipamientosPage;