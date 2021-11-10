import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GetPokemon, GetPokemonDetailsByApi } from '../API/GetPokemon'

export default function Pokedex() {
    const [pokemons, setPokemons] = useState()

    useEffect(() => {
        (async () => {
            await LoadPokemons();
        })()
    }, [])
    const LoadPokemons = async () => {
        try {
            const response = await GetPokemon();
            console.log(response)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <SafeAreaView>
            <View>
                <Text>Pokedex</Text>
            </View>
        </SafeAreaView>
    )
}
