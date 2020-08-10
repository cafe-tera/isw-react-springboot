import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//npm install react-router-dom --save

import WelcomePage from './pages/WelcomePage';
import HomePage from './pages/HomePage';
import EquipamientosPage from './pages/EquipamientosPage';
import logo from "./assets/mascarilla.png";
import AddChair from "./components/addChair";
import Chair from "./components/Chair";
import ChairsList from "./components/chairList";
import PabellonesPage from './pages/PabellonesPage';
import SalasPage from './pages/SalasPage';
import ReservasPFormPage from './pages/ReservasPFormPage';
import ReservasSFormPage from './pages/ReservasSFormPage';
import ReservasPPage from './pages/ReservasPPage';
import ReservasSPage from './pages/ReservasSPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/" className="navbar-brand">
            <img src={logo} width="45" alt="" className="d-inline-block align-middle mr-2">
             </img> 
              Sigipab
            </a>
            <div className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link to={"/welcome"} className="nav-link">
                  Bienvenido
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/equipamientos"} className="nav-link">
                  Equipamientos
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/chairs"} className="nav-link">
                  Sillas
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/add"} className="nav-link">
                  Añadir Sillas
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/pabellones"} className="nav-link">
                  Pabellones
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/salasrecuperacion"} className="nav-link">
                  Salas de Recuperación
                </Link>
              </li>
            </div>
          </nav>

          <div className="container mt-3">
            <Switch>
              <Route exact path ="/welcome" component={WelcomePage}></Route>
              <Route exact path ="/equipamientos" component={EquipamientosPage}></Route>
              <Route exact path = "/" component ={HomePage}></Route>
              <Route exact path={["/", "/chairs"]} component={ChairsList} />
              <Route exact path="/add" component={AddChair} />
              <Route path="/chairs/:id" component={Chair} />
              <Route exact path ="/pabellones" component={PabellonesPage}></Route>
              <Route exact path ="/salasrecuperacion" component={SalasPage}></Route>
              <Route exact path ="/ReservasP" component={ReservasPPage}></Route>
              <Route exact path ="/ReservasS" component={ReservasSPage}></Route>
              <Route exact path = "/ReservasPForm" component= {ReservasPFormPage}></Route>
              <Route exact path = "/ReservasSForm" component ={ReservasSFormPage}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
