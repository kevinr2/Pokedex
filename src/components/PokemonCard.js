import React from 'react'
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native'

export default function PokemonCard({ pokemons }) {
    const goPokemon = () => {
        console.log(`este es: ${pokemons.name}`)
    }
    return (
        <TouchableWithoutFeedback onPress={goPokemon}>
            <View style={style.card}>
                <View style={style.spacing}>
                    <View style={style.bgStyle}>
                        <Text style={style.number}>#{`${pokemons.order}`.padStart(3, 0)}</Text>
                        <Text style={style.name}>{pokemons.name}</Text>
                        <Image source={{ uri: pokemons.image }} style={style.image} />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}


const style = StyleSheet.create({
    card: {
        flex: 1,
        height: 130
    },
    spacing: {
        flex: 1,
        padding: 5
    },
    bgStyle: {
        backgroundColor: "grey"
    },
    number: {
        position: 'absolute',
        right: 10,
        top: 10,
        color: '#fff',
        fontSize: 11,
    },
    name: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 15,
        paddingTop: 10
    },
    image: {
        position: 'absolute',
        bottom: 2,
        right: 2,
        width: 90,
        height: 90
    },

})