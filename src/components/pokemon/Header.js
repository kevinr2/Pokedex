
import React from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import getColorByPokemonType from '../../API/GetColorType'
import { capitalize } from 'lodash'
export default function Header({ name, order, image, type }) {

    const color = getColorByPokemonType(type)
    const bgStyle = [{ backgroundColor: color, ...style.bg }]
    return (
        <>
            <View style={bgStyle} />
            <SafeAreaView style={style.content} >
                <View style={style.header}>
                    <Text style={style.name}>{capitalize(name)}</Text>
                    <Text style={style.order}>#{`${order}`.padStart(3, 0)}</Text>
                </View>
                <View style={style.contentImage}>
                    <Image source={{ uri: image }} style={style.image} />
                </View>
            </SafeAreaView>
        </>
    )
}
const style = StyleSheet.create({
    bg: {
        width: '100%',
        height: 370,
        position: 'absolute',
        borderBottomEndRadius: 300,
        borderBottomLeftRadius: 300,
        transform: [{ scaleX: 2 }]
    },
    content: {
        marginHorizontal: 20,
        marginTop: 50,
        height: 370
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    name: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 27
    },
    order: {
        color: '#fff',
        fontWeight: 'bold'
    },
    contentImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 250,
        height: 250,
    }
})