import React,{useState, useEffect} from 'react';
//import NavigationComponent from '../components/NavigationComponent';
import { Table, Col, Container} from 'reactstrap';
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
        <td className="text-white">  {reservasP.id} </td>
        <td className="text-white"> {reservasP.idPabellon} </td>
        <td className="text-white"> {reservasP.idSolicitud}</td>
        <td className="text-white"> {reservasP.horario}</td>
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
                <Container className='bg-dark'>
                <Col sm="12" md={{ size: 7, offset: 4 }}>
                <h2 className="text-white"> </h2>
                <h2 className="text-white"> Reservas de pabellones </h2>
                    <h2 className="text-white"> </h2>
                </Col>
                <Col>
                    <Table>
                        <thead>
                            <tr>
                                <td className="text-white"> id </td>
                                <td className="text-white"> IdPabellon </td>
                                <td className="text-white"> IdSolicitud </td>
                                <td className="text-white"> Horario </td>
                            </tr>
                        </thead>
                        <tbody>
                            {reservasPItems}
                        </tbody>
                    </Table>
                </Col>
                <h2 className="text-white"> </h2>
            </Container>
        </div>
    )
}

export default ReservasPPage;