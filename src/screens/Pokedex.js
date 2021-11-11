import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GetPokemon, GetPokemonDetailsByApi } from '../API/GetPokemon'
import PokemonList from '../components/PokemonList'

export default function Pokedex() {
    const [pokemons, setPokemons] = useState([])
    useEffect(() => {
        (async () => {
            await LoadPokemons();
        })()
    }, [])
    const LoadPokemons = async () => {
        try {
            const response = await GetPokemon();

            const pokemonArray = []
            for await (const pokemon of response.results) {
                const pokemoDetails = await GetPokemonDetailsByApi(pokemon.url)
                pokemonArray.push({
                    id: pokemoDetails.id,
                    name: pokemoDetails.name,
                    type: pokemoDetails.types[0].type.name,
                    order: pokemoDetails.order,
                    image: pokemoDetails.sprites.other['official-artwork'].front_default,
                })
            }
            setPokemons([...pokemons, ...pokemonArray])
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <SafeAreaView>
            <View>
                <PokemonList pokemons={pokemons} />
            </View>
        </SafeAreaView>
    )
}
