import React, { Component } from "react";
import Search from '../Components/Search';
import "./SearchPage.scss";
import HeroList from '../Components/HeroList';
import Header from './../Header/Header.js';

export default class SearchPage extends Component {
    render() {
        return (
            <div className="search pg">
                <Header />
                <div className="searchWrapper">
                    <Search />
                    <HeroList />
                </div>
            </div>
        )
    }
}