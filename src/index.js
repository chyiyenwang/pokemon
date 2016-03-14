import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import PokemonCardList from './components/pokemon_card_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: [{
        id: 1,
        name: 'Bulbasaur',
        spd: 45,
        sp_def: 65,
        sp_atk: 65,
        def: 49,
        atk: 49,
        hp: 45 ,
        sprite: 'http://pokeapi.co/media/sprites/pokemon/1.png',
        types: [{
          type: {
            name: 'grass'
          }
        }]
      }, {
        id: 4,
        name: 'Charmander',
        spd: 65,
        sp_def: 50,
        sp_atk: 60,
        def: 43,
        atk: 52,
        hp: 39,
        sprite: 'http://pokeapi.co/media/sprites/pokemon/4.png',
        types: [{
          type: {
            name: 'fire'
          }
        }]
      }, {
        id: 7,
        name: 'Squirtle',
        spd: 43,
        sp_def: 64,
        sp_atk: 50,
        def: 65,
        atk: 48,
        hp: 44,
        sprite: 'http://pokeapi.co/media/sprites/pokemon/7.png',
        types: [{
          type: {
            name: 'water'
          }
        }]
      }]
    }
  }

  render() {
    return (
      <div>
        <PokemonCardList pokemon={this.state.pokemon} />
      </div>
    );
  } 
}

ReactDOM.render(<App />, document.querySelector('.container'));