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
        this.cancel='';
    }
    handleOnInputChange = (event) => {
        const query = event.target.value;
            this.setState({ query, loading: true, message: ''});
    };
    render() {
      return (
        <div id="main">
            <h2>What is your name?</h2>
            {/*Search bar*/}
            <label className="search-label" htmlFor="search-input">
                <input type="text" value="" id="search-input" placeholder="Search..." onChange={this.handleOnInputChange}/>
            </label>
        </div>
      );
    }
  }
  
  export default Search;