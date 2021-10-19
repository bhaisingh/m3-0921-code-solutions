import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

class RenderPokeList extends React.Component {

  render() {
    const pokemon = this.props.pokeList;
    const listPoke = pokemon.map(poke => <li key={poke.number}>{poke.name}</li>);
    return <ul>{listPoke}</ul>;
  }
}

ReactDOM.render(
    <RenderPokeList pokeList = {pokedex} />,
    document.querySelector('#root')
);
