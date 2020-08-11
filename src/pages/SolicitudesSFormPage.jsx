import React, {useState} from "react";
import  { Container, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import SolicitudesSService from '../services/solicitudesS.services';

//import NavigationComponent from "../components/NavigationComponent";

const SolicitudesSFormPage = () => {

    const [idPaciente, setidPaciente] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const handleChange = (event) =>{
        const keyname = event.target.name;
        if (keyname === "idPaciente") {
            setidPaciente(event.target.value);
        } else if (keyname === "descripcion") {
            setDescripcion(event.target.value);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        SolicitudesSService.addSolicitudesS(idPaciente, descripcion).then(response => {
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
                        <h2 className="text-white"> Solicitar un sillón </h2>
                    </Col>
                <Container>
                    <Form>
                        <h5 className="text-white"> ID del paciente </h5>
                        <FormGroup>
                            <Input type = "text" name = "idPaciente" placeholder = "idPaciente" onChange = {(event) => handleChange(event)}> </Input>
                        </FormGroup>
                        <h5 className="text-white"> Descripción de la solicitud </h5>
                        <FormGroup>
                            <Input type = "text" name = "descripcion" placeholder = "Descripcion" onChange = {(event) => handleChange(event)}> </Input>
                        </FormGroup>
                        <Button type= "submit" color="primary" onClick ={(event) => handleSubmit(event)}>Submit</Button>
                        <h2 className="text-white"> </h2>
                    </Form>
                </Container>    
            </Container>
        </div>
    );
} 

export default SolicitudesSFormPage;