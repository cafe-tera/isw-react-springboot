import React,{useState, useEffect} from 'react';

//import NavigationComponent from '../components/NavigationComponent';
import { Table, Col } from 'reactstrap';
import reservasSService from '../services/reservasS.services';

const ReservasSPage = () => {

    const [reservasS, setReservasS] = useState([]);
    useEffect(() => {
        reservasSService.getReservasS().then(res =>{
            setReservasS(res.data);
        }).catch(error => {
            console.log(error);
        });
    }, []);

    
  const reservasSItems = reservasS.map((reservasS) =>
  <tr key={reservasS.id}>
        <td> {reservasS.id} </td>
        <td> {reservasS.idSillon} </td>
        <td> {reservasS.idSolicitud}</td>
        <td> {reservasS.horario}</td>
        <td>
            <button onClick={(event) => {
                event.preventDefault();
                reservasSService.deleteReservasS(reservasS.id);
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
                                <td> idSillon </td>
                                <td> idSolicitud </td>
                                <td> Horario </td>
                            </tr>
                        </thead>
                        <tbody>
                            {reservasSItems}                           
                        </tbody>
                    </Table>
                </Col>
        </div>
    )
}

export default ReservasSPage;