import React, {useState} from "react";
import  { Container, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import reservasPService from '../services/reservasP.services';
//import NavigationComponent from "../components/NavigationComponent";

const ReservasPFormPage = () => {

    const [idPabellon, setidPabellon] = useState('');
    const [idSolicitud, setidSolicitud] = useState('');
    const [Horario, setHorario] = useState('');

    const handleChange = (event) =>{
        const keyname = event.target.name;
        if (keyname === "idPabellon") {
            setidPabellon(event.target.value);
        } else if (keyname === "idSolicitud") {
            setidSolicitud(event.target.value);
        } else if (keyname === "Horario") {
            setHorario(event.target.value);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        reservasPService.addReservasP(idPabellon, idSolicitud, Horario).then(response => {
            console.log(response);
        });
    }

    return(
        <div>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
                integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
                crossOrigin="anonymous"></link>
                <h2 className="text-white"> </h2>
            <Container className='bg-dark'>
                    <Col sm="12" md={{ size: 7, offset: 4 }}>
                        <h2 className="text-white"> </h2>
                        <h2 className="text-white"> Reservar un pabellón </h2>
                    </Col>
                <Container>
                    <Form>
                        <h5 className="text-white"> ID del pabellón </h5>
                        <FormGroup>
                            <Input type = "text" name = "idPabellon" placeholder = "idPabellon" onChange = {(event) => handleChange(event)}> </Input>
                        </FormGroup>
                        <h5 className="text-white"> ID de la solicitud </h5>
                        <FormGroup>
                            <Input type = "text" name = "idSolicitud" placeholder = "idSolicitud" onChange = {(event) => handleChange(event)}> </Input>
                        </FormGroup>
                        <h5 className="text-white"> Horario de la reserva </h5>
                        <FormGroup>
                            <Input type = "text" name = "Horario" placeholder = "Horario" onChange = {(event) => handleChange(event)}> </Input>
                        </FormGroup>
                        <Button type= "submit" color="primary" onClick ={(event) => handleSubmit(event)}>Reservar</Button>
                        <h2 className="text-white"> </h2>
                    </Form>
                </Container>    
            </Container>
        </div>
    );
} 

export default ReservasPFormPage;