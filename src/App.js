import { useEffect } from 'react';
import { Col ,Spin } from 'antd';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { getPokemon} from './api';
import logo from './satics/pngwing.com.png';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonWithDetails, setLoading } from './actions';

function App() {
  const pokemons = useSelector((state) => state.get('pokemons')).toJS();
  const loading = useSelector( (state) => state.get('loading'));
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonsRes = await getPokemon();
      dispatch(getPokemonWithDetails(pokemonsRes));
      dispatch(setLoading(false));
    };

    fetchPokemons();
  }, []);

  return (
    <div className='App'>
      <Col span={4} offset={9}>
        <img src={logo} alt='Pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? <Col offset={12}>
      <Spin spinning size='large'/>
      </Col>: (<PokemonList pokemons={pokemons} />)}
      
      
    </div>
  );
}



export default (App);