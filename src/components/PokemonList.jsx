import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemons }) => {
  return (
    <div className='PokemonList'>
      {pokemons.map((pokemon) => {
         const abilitiesArray = pokemon.types;
         const abilities = abilitiesArray.map((ability) => ability.type.name);
        return <PokemonCard id={pokemon.id} name={pokemon.name} key={pokemon.name} image = {pokemon.sprites.front_default} abilities={abilities} favorite={pokemon.favorite} weight={pokemon.weight}
         />;
      })}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(''),
};

export default PokemonList;