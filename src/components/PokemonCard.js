import React from 'react'
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import getColorByPokemonType from '../API/GetColorType'
import { capitalize } from 'lodash'
export default function PokemonCard({ pokemons }) {

    const navigation = useNavigation()
    const pokemonColor = getColorByPokemonType(pokemons.type)
    const bgStyle = { backgroundColor: pokemonColor, ...style.bgStyle }
    const goPokemon = () => {
        navigation.navigate("pokemon", { id: pokemons.id })
    }
    return (
        <TouchableWithoutFeedback onPress={goPokemon}>
            <View style={style.card}>
                <View style={style.spacing}>
                    <View style={bgStyle}>
                        <Text style={style.number}>#{`${pokemons.order}`.padStart(3, 0)}</Text>
                        <Text style={style.name}>{capitalize(pokemons.name)}</Text>
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
        flex: 1,
        borderRadius: 15,
        padding: 10,
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