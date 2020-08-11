import React,{useState, useEffect} from 'react';

//import NavigationComponent from '../components/NavigationComponent';
import { Table, Col } from 'reactstrap';
import reservasPService from '../services/reservasP.services';
import pabellonesService from '../services/pabellones.services';

const ReservasPPage = () => {

    const [reservasP, setReservasP] = useState([]);
    useEffect(() => {
        reservasPService.getReservasP().then(res =>{
            setReservasP(res.data);
        }).catch(error => {
            console.log(error);
        });
    }, []);

    
const reservasPItems = reservasP.map((reservasP) =>
  <tr key={reservasP.id}>
        <td> {reservasP.id} </td>
        <td> {reservasP.idPabellon} </td>
        <td> {reservasP.idSolicitud}</td>
        <td> {reservasP.horario}</td>
        <td>
            <button onClick={(event) => {
                event.preventDefault();
                reservasPService.deleteReservasP(reservasP.id);
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
                                <td> idPabellon </td>
                                <td> idSolicitud </td>
                                <td> Horario </td>
                            </tr>
                        </thead>
                        <tbody>
                            {reservasPItems}
                        </tbody>
                    </Table>
                </Col>
        </div>
    )
}

export default ReservasPPage;