import React from 'react'
import { StyleSheet, FlatList, ActivityIndicator, Platform } from 'react-native'
import PokemonCard from './PokemonCard'

export default function PokemonList({ pokemons, LoadPokemons, isNext }) {

    const loadMore = () => {
        LoadPokemons()
    }
    return (

        <FlatList
            data={pokemons}
            numColumns={2}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(pokemon) => String(pokemon.id)}
            renderItem={({ item }) => <PokemonCard pokemons={item} />}
            contentContainerStyle={styles.flatListContainer}
            onEndReached={isNext && loadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={
                isNext && (
                    <ActivityIndicator
                        size="large"
                        style={styles.spinner}
                        color="#AEAEAE"
                    />
                )
            }
        />

    )
}

const styles = StyleSheet.create({
    flatListContainer: {
        paddingTop: Platform == 'android' ? 5 : 0,
        paddingHorizontal: 5
    },
    spinner: {
        marginTop: 20,
        marginBottom: 60
    }
})