import React from 'react';
import PokemonCard from './pokemon_card'

const PokemonCardList = (props) => {
  const pokemonItem = props.pokemon.map((character) => {
    return (
      <PokemonCard
        key={character.id}
        character={character} />
    );
  })

  return (
    <div className="pokedex">
      {pokemonItem}
    </div>
  )
}

export default PokemonCardList;