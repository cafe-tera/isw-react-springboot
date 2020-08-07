import React,{useState, useEffect} from 'react';

<<<<<<< HEAD
import NavigationComponent from '../components/NavigationComponent';
=======
>>>>>>> master
import pabellonesService from '../services/pabellones.services';

const PabellonesPage = () => {

    const [pabellones, setPabellones] = useState([]);
    useEffect(() => {
        pabellonesService.getPabellones().then(res =>{
            setPabellones(res.data);
            console.log(res);
        }).catch(error => {
            console.log(error);
        });
    }, []);

    
    const pabellonesItems = pabellones.map((pabellon) =>
        <tr key={pabellon.id}>
            <td> {pabellon.nombre ?? "campo nulo"} </td>
            <td> {pabellon.capacidad ?? "campo nulo"} </td>
            <td> {pabellon.ubicacion ?? "campo nulo"} </td>
        </tr>
    );

    return(
        <div>
<<<<<<< HEAD
            <NavigationComponent></NavigationComponent>
=======
>>>>>>> master
            <div>Lista de todas las Equipamientos</div>
            <table class="egt">
                <tr>
                    <td>Nombre</td>
                    <td>Capacidad</td>
                    <td>Ubicacion</td>
                </tr>
                {pabellonesItems}
            </table>
        </div>
    )
}

export default PabellonesPage;