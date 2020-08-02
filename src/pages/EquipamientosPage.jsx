import React,{useState, useEffect} from 'react';

import NavigationComponent from '../components/NavigationComponent';
import equipamientosService from '../services/equipamientos.services';

const EquipamientosPage = () => {

    const [equipamientos, setEquipamientos] = useState([]);
    useEffect(() => {
        equipamientosService.getEquipamientos().then(res =>{
            setEquipamientos(res.data);
        }).catch(error => {
            console.log(error);
        });
    }, []);

    
  const equipamientosItems = equipamientos.map((tienda) =>
  <li key={tienda.id}>
    {tienda.nombre} - {tienda.direccion}
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