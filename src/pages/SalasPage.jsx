import React,{useState, useEffect} from 'react';

import NavigationComponent from '../components/NavigationComponent';
import salasService from '../services/salas.services';

const SalasPage = () => {

    const [salas, setSalas] = useState([]);
    useEffect(() => {
        salasService.getSalas().then(res =>{
            setSalas(res.data);
            console.log(res);
        }).catch(error => {
            console.log(error);
        });
    }, []);

    
    const salasItems = salas.map((Sala) =>
        <tr key={Sala.id}>
            <td> {Sala.nombre ?? "campo nulo"} </td>
            <td> {Sala.capacidad ?? "campo nulo"} </td>
            <td> {Sala.ubicacion ?? "campo nulo"} </td>
        </tr>
    );

    return(
        <div>
            <NavigationComponent></NavigationComponent>
            <div>Lista de todas las Equipamientos</div>
            <table class="egt">
                <tr>
                    <td>Nombre</td>
                    <td>Capacidad</td>
                    <td>Ubicacion</td>
                </tr>
                {salasItems}
            </table>
        </div>
    )
}

export default SalasPage;