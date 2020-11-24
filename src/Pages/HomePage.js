import React, { Component } from "react";
import history from './../history';
import { Button } from 'react-bootstrap';
import './HomePage.scss';
import Header from './../Header/Header.js';

export default class HomePage extends Component {
    render() {
        return (
            <div className="Home">
                <Header />
                <div className="homeWrapper">
                    {/* <h1>ReactJS Mavel API</h1> */}
                    <Button variant="btn btnSuccess" onClick={() => history.push('./SearchPage')}>Play</Button>
                </div>
            </div>
        )
    }
}