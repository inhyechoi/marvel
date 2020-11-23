import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import HomePage from './Pages/HomePage';
import SearchPage from './Pages/SearchPage';
import history from './history';

export default class Routes extends Component {
    render(){
        return(
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/SearchPage" component={SearchPage} />
                </Switch>
            </Router>
        )
    }
}