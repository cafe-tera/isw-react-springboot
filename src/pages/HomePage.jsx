import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import history from './../history';
import { Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-grid-system';

import equip from "../assets/equipo2.png";
import sillon from "../assets/silla.png";
import team from "../assets/medico.png";
import reserva from "../assets/calendario.png";
import sala from "../assets/sala.png";
import pabellon from "../assets/pabellon.png";
import docpanel from "../assets/xd.jpg";
const HomePage = () => {
    return(
        <div className = "container center_div">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
                integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
                crossOrigin="anonymous"></link>
            <title> Título de Home</title>

            <Row>
                <Col>
                    <Container className='p-4'>
                        <Jumbotron>
                            <Row>
                                <Col>
                                    <h1 className='header' style={{textAlign:"center"}}>
                                        Menu
                                    </h1>
 
                                </Col>
                            </Row>
                        </Jumbotron>
                    </Container>
                </Col>
            </Row>
            <Container>
                
                <Row>
                    <Col sm={4}>
                    <Button variant="outline-info" style={{maxWidth: '150px', maxHeight: '150px', minWidth: '150px', minHeight: '150px'}}  onClick={() => history.push("/equipamiento")}><img src={equip} width="100"  alt="equipo"/></Button>
                    </Col>
                    <Col sm={4}>
                    <Button variant="outline-info" style={{maxWidth: '150px', maxHeight: '150px', minWidth: '150px', minHeight: '150px'}}  onClick={() => history.push("/")}><img src={reserva} width="100"  alt="reservas"/></Button>
                  
                    </Col>
                    <Col sm={4}>
                    <Button variant="outline-info" style={{maxWidth: '150px', maxHeight: '150px', minWidth: '150px', minHeight: '150px'}}  onClick={() => history.push("/add")}><img src={sillon} width="100"  alt="my image"/></Button>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                    <Button variant="outline-info" style={{maxWidth: '150px', maxHeight: '150px', minWidth: '150px', minHeight: '150px'}}  onClick={() => history.push("//")}><img src={team} width="100"  alt="my image"/></Button>
                    </Col>
                    <Col sm={4}>
                    <Button variant="outline-info" style={{maxWidth: '150px', maxHeight: '150px', minWidth: '150px', minHeight: '150px'}} onClick={() => history.push("/")}><img src={sala} width="100"  alt="salas"/></Button>
                                      </Col>
                    <Col sm={4}>
                    <Button variant="outline-info" style={{maxWidth: '150px', maxHeight: '150px', minWidth: '150px', minHeight: '150px'}}  onClick={() => history.push("/")}><img src={pabellon} width="100"   alt="pabellon"/></Button>
                                      </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomePage;