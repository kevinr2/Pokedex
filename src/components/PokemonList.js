import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import PokemonCard from './PokemonCard'

export default function PokemonList({ pokemons }) {

    return (

        <FlatList
            data={pokemons}
            numColumns={2}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(pokemon) => String(pokemon.id)}
            renderItem={({ item }) => <PokemonCard pokemons={item} />}
            contentContainerStyle={styles.flatListContainer}
        />

    )
}

const styles = StyleSheet.create({
    flatListContainer: {
        paddingTop: 70,
        paddingHorizontal: 5
    }
})