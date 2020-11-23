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


// class Search extends Component {
//     state = {
//       searchValue: "",
//       heroes: []
//     };
  
//     handleOnChange = event => {
//       this.setState({ searchValue: event.target.value });
//     };
  
//     handleSearch = () => {
//       this.makeApiCall(this.state.searchValue);
//     };
  
//     makeApiCall = searchInput => {
//       var searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
//       fetch(searchUrl)
//         .then(response => {
//           return response.json();
//         })
//         .then(jsonData => {
//           this.setState({ meals: jsonData.meals });
//         });
//     };
  
//     render() {
//       return (
//         <div id="main">
//           <h1>React Marvel API</h1>
//           <input
//             name="text"
//             type="text"
//             placeholder="Search"
//             onChange={event => this.handleOnChange(event)}
//             value={this.state.searchValue}
//           />
//           <button onClick={this.handleSearch}>Search</button>
//           {this.state.meals ? (
//             <div id="meals-container">
//               {this.state.meals.map((meal, index) => (
//                 <div class="single-meal" key={index}>
//                   <h2>{meal.strMeal}</h2>
//                   <img src={meal.strMealThumb} alt="meal-thumbnail" />
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p>Try searching for a meal</p>
//           )}
//         </div>
//       );
//     }
//   }
  
//   export default Search;
