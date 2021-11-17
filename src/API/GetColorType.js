import { POKEMON_TYPE_COLORS } from "../tools/Api";



const getColorByPokemonType = (type) => POKEMON_TYPE_COLORS[type.toLowerCase()];

export default getColorByPokemonType;

