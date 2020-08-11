import React,{useState, useEffect} from 'react';

//import NavigationComponent from '../components/NavigationComponent';
import { Table, Col } from 'reactstrap';
import solicitudesPService from '../services/solicitudesP.services';

const SolicitudesPPage = () => {

    const [solicitudesP, setSolicitudesP] = useState([]);
    useEffect(() => {
        solicitudesPService.getSolicitudesP().then(res =>{
            setSolicitudesP(res.data);
        }).catch(error => {
            console.log(error);
        });
    }, []);

    
const solicitudesPItems = solicitudesP.map((solicitudesP) =>
  <tr key={solicitudesP.id}>
        <td> {solicitudesP.id} </td>
        <td> {solicitudesP.idPaciente} </td>
        <td> {solicitudesP.descripcion}</td>
        <td>
            <button onClick={(event) => {
                event.preventDefault();
                solicitudesPService.deleteSolicitudesP(solicitudesP.id);
                window.location.reload();
            }} className="btn btn-danger"
            >
                Eliminar
            </button>
        </td>
  </tr>
);
    return(
        <div>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
                integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
                crossOrigin="anonymous"></link>
                <Col>
                    <Table>
                        <thead>
                            <tr>
                                <td> id </td>
                                <td> idPaciente </td>
                                <td> Descripcion </td>
                            </tr>
                        </thead>
                        <tbody>
                            {solicitudesPItems}
                        </tbody>
                    </Table>
                </Col>
        </div>
    )
}

export default SolicitudesPPage;