import React,{useState, useEffect} from 'react';

//import NavigationComponent from '../components/NavigationComponent';
import { Table, Col, Container } from 'reactstrap';
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
        <td className="text-white"> {reservasS.id} </td>
        <td className="text-white"> {reservasS.idSillon} </td>
        <td className="text-white"> {reservasS.idSolicitud}</td>
        <td className="text-white"> {reservasS.horario}</td>
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
                <Container className='bg-dark'>
                <Col sm="12" md={{ size: 7, offset: 4 }}>
                <h2 className="text-white"> </h2>
                <h2 className="text-white"> Reservas de Sillones </h2>
                    <h2 className="text-white"> </h2>
                </Col>
                <Col>
                    <Table>
                        <thead>
                            <tr>
                                <td className="text-white"> id </td>
                                <td className="text-white"> idSillon </td>
                                <td className="text-white"> idSolicitud </td>
                                <td className="text-white"> Horario </td>
                            </tr>
                        </thead>
                        <tbody>
                            {reservasSItems}
                        </tbody>
                    </Table>
                </Col>
                <h2 className="text-white"> </h2>
            </Container>
        </div>
    )
}

export default ReservasSPage;