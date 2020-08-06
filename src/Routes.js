import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import AddChair from "./components/addChair";
import Chair from "./components/Chair";
import ChairsList from "./components/chairList";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path ="/welcome" component={WelcomePage}></Route>
                    <Route exact path ="/equipamientos" component={EquipamientosPage}></Route>
                    <Route exact path = "/" component ={HomePage}></Route>
                    <Route exact path={["/", "/chairs"]} component={ChairsList} />
                    <Route exact path="/add" component={AddChair} />
                    <Route path="/chairs/:id" component={Chair} />
                </Switch>
            </Router>
        )
    }
}
