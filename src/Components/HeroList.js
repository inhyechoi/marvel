import React from 'react';
import axios from 'axios';

export default class HeroList extends React.Component {
  state = {
    heroes: []
  }

  componentDidMount() {
    axios.get(`https://gateway.marvel.com:443/v1/public/characters`)
      .then(res => {
        const heroes = res.data;
        this.setState({ heroes });
      })
  }

  render() {
    return (
      <ul>
        { this.state.heroes.map(hero => <li>{hero.name}</li>)}
      </ul>
    )
  }
}