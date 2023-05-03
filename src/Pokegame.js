import React from "react";
import Pokedex from "./pokedex";


Pokegame.defaultProps = {
    pokemon: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 }
    ]
  };


function Pokegame(props) {
    let firsthand = [];
    let secondhand = [...props.pokemon];
    while (firsthand.length < secondhand.length) {
        let randIdx = Math.floor(Math.random() * secondhand.length);
        let randomPokemon = secondhand.splice(randIdx, 1)[0];
        firsthand.push(randomPokemon);
    }

    let experience_hand1 = firsthand.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    let experience_hand2 = secondhand.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);


    return (
        <div>
            <Pokedex pokemon={firsthand} experience={experience_hand1} isWinner={experience_hand1 > experience_hand2} />
            <Pokedex pokemon={secondhand} experience={experience_hand2} isWinner={experience_hand2 > experience_hand1} />
        </div>
    );
}






export default Pokegame;