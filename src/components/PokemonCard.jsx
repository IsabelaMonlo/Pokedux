import { Card , Typography , Tag } from 'antd';
import './PokemonList.css';
import StarButton from './StarButton';
import { useDispatch } from 'react-redux';
import { setFavorite } from '../actions';

const { Meta } = Card;
const { Title  } = Typography;
const colors = ['#4682B4', '#9370DB', '#32CD32']; 
const PokemonCard = ({ id ,name , image , abilities,favorite, weight}) => {
    const dispatch = useDispatch();
    const formattedAbilities = abilities.map((ability, index) => (
        <Tag key={index} color={colors[index % colors.length]}>
        {ability}
      </Tag>
      ));

const handleOnFavorite = () =>{
  dispatch(setFavorite({pokemonId: id}))
}

    return (
    <Card 
    className='pokemon-card'
     cover={<img className="pokemon-image" src= {image}alt={name}/>}
     extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite}/>} >
    <Meta
    title={<Title level={2} style={{fontWeight:'bold', color:'white'}} >{`${id} - ${name}`}</Title>}
    description={<div className="abilities">{formattedAbilities}</div>} />
   {<div className="weight">Weight - {weight}</div>} 
    </Card>
    )
}
export default PokemonCard;
























