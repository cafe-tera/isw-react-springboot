import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//npm install react-router-dom --save

import WelcomePage from './pages/WelcomePage';
import HomePage from './pages/HomePage';
import EquipamientosPage from './pages/EquipamientosPage';
import PabellonesPage from './pages/PabellonesPage';
import SalasPage from './pages/SalasPage';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path ="/welcome" component={WelcomePage}></Route>
        <Route exact path ="/equipamientos" component={EquipamientosPage}></Route>
        <Route exact path ="/pabellones" component={PabellonesPage}></Route>
        <Route exact path ="/salasrecuperacion" component={SalasPage}></Route>
        <Route exact path = "/" component ={HomePage}></Route>
      </Switch>
    </Router>
  )
}

export default App;
