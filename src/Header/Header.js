import React, { Component } from "react";
import marvel_logo from './marvel_logo.png';
import './Header.scss';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="headerWrapper">
                    <img src={marvel_logo} className="App-logo" alt="logo" />
                </div>
            </header>
        )
    }
}

