import React, { Component } from "react";
import './Search.scss';

console.log(process.env.REACT_APP_MARVEL_API_KEY)

class Search extends Component {
    constructor( props ){
        super(props);
        
        this.state={
                query: '',
                results: {},
                loading: false,
                message: '',
        };
    }
    render() {
      return (
        <div id="main">
            <h2>What is your name?</h2>
            {/*Search bar*/}
            <label className="search-label" htmlFor="search-input">
                <input type="text" value="" id="search-input" placeholder="Search..." />
            </label>
        </div>
      );
    }
  }
  
  export default Search;