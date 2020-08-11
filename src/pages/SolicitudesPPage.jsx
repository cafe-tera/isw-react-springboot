import React,{useState, useEffect} from 'react';

//import NavigationComponent from '../components/NavigationComponent';
import { Table, Col, Container } from 'reactstrap';
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
                <Container className='bg-dark'>
                <Col sm="12" md={{ size: 7, offset: 4 }}>
                <h2 className="text-white"> </h2>
                <h2 className="text-white"> Solicitudes de pabellón </h2>
                    <h2 className="text-white"> </h2>
                </Col>
                <Col>
                    <Table>
                        <thead>
                            <tr>
                                <td className="text-white"> id </td>
                                <td className="text-white"> idPaciente </td>
                                <td className="text-white"> Descripcion </td>
                            </tr>
                        </thead>
                        <tbody>
                            {solicitudesPItems}
                        </tbody>
                    </Table>
                </Col>
                <h2 className="text-white"> </h2>
            </Container>
        </div>
    )
}

export default SolicitudesPPage;