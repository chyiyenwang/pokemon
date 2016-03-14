import React from 'react';
import {VictoryBar} from 'victory';

const PokemonCard = ({character}) => {
  // water: 99CEDF
  // fire: FF9443
  // grass: D7F8BA
  const color = character.types[0].type.name;
  let style = null
  
  if (color == 'water') {
    style = '#99CEDF';
  }
  else if (color == 'fire') {
    style = '#FF9443'
  }
  else if (color == 'grass') {
    style = '#D7F8BA';
  }

  return (
    <div className="card">
      <div className="character-name">
        <h3>{character.name}</h3>
      </div>
      <div className="thumbnail" style={{backgroundColor: style}}>
        <img src={character.sprite} />
      </div>
      <div className="stats">
        <VictoryBar
          height={200}
          width={245}
          domainPadding={65}
          style={{
            data: {
              height: 50,
              width: 50,
              padding: 5,
            }
          }}
          data={[
            [{x: 1, y: character.hp, label: 'Hp', fill: '#FF1B0F'}],
            [{x: 1, y: character.atk, label: 'Atk', fill: '#1C8EE6'}],
            [{x: 1, y: character.def, label: 'Def', fill: '#FFD30F'}],
            [{x: 1, y: character.spd, label: 'Spd', fill: '#FF980F'}]
          ]} />
      </div>
    </div>
  )
}

export default PokemonCard;