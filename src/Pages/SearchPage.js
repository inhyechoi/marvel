import React, { Component } from "react";
import Search from '../Components/Search';
import "./SearchPage.scss";
import HeroList from '../Components/HeroList'

export default class SearchPage extends Component {
    render() {
        return (
            <div className="Search">
                <Search />
                <HeroList />
            </div>
        )
    }
}