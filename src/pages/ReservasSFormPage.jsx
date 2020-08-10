import React, {useState} from "react";
import  { Container, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import reservasSService from '../services/reservasS.services';
import NavigationComponent from "../components/NavigationComponent";

const ReservasSFormPage = () => {

    const [idSillon, setidSillon] = useState('');
    const [idSolicitud, setidSolicitud] = useState('');
    const [Reservado, setReservado] = useState('');
    const [Horario, setHorario] = useState('');

    const handleChange = (event) =>{
        const keyname = event.target.name;
        if (keyname === "idSillon") {
            setidSillon(event.target.value);
        } else if (keyname === "idSolicitud") {
            setidSolicitud(event.target.value);
        } else if (keyname === "Reservado") {
            setReservado(event.target.value);
        } else if (keyname === "Horario") {
            setHorario(event.target.value);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        reservasSService.addReservasS(idSillon, idSolicitud, Reservado, Horario).then(response => {
            console.log(response);
        });
    }

    return(
        <div>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
                integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
                crossOrigin="anonymous"></link>
            <NavigationComponent></NavigationComponent>

            <Container>
                    <Col sm="12" md={{ size: 6, offset: 4 }}>
                        <h2> Agregar reserva de sillón </h2>
                    </Col>
                <Container>
                    <Form>
                        <FormGroup>
                            <Input type = "text" name = "idSillon" placeholder = "idSillon" onChange = {(event) => handleChange(event)}> </Input>
                        </FormGroup>
                        <FormGroup>
                            <Input type = "text" name = "idSolicitud" placeholder = "idSolicitud" onChange = {(event) => handleChange(event)}> </Input>
                        </FormGroup>
                        <FormGroup>
                            <Input type = "text" name = "Reservado" placeholder = "Reservado" onChange = {(event) => handleChange(event)}> </Input>
                        </FormGroup>
                        <FormGroup>
                            <Input type = "text" name = "Horario" placeholder = "Horario" onChange = {(event) => handleChange(event)}> </Input>
                        </FormGroup>
                        <Button type= "submit" color="primary" onClick ={(event) => handleSubmit(event)}>Submit</Button>
                    </Form>
                </Container>    
            </Container>
        </div>
    );
} 

export default ReservasSFormPage;