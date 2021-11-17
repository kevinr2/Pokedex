import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { GetPokemonId } from '../API/GetPokemon'
import Header from '../components/pokemon/Header'
import Stats from '../components/pokemon/Stats'
import Type from '../components/pokemon/Type'


export default function Pokemon(props) {

    const { navigation, route: { params } } = props
    const [Pokemon, setPokemon] = useState(null)

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => null,
            headerLeft: () =>
                <Icon
                    name="arrow-left"
                    color='#fff'
                    size={20}
                    style={{ marginLeft: 20 }}
                    onPress={navigation.goBack}
                />
        })
    }, [navigation, params])

    useEffect(() => {
        (async () => {
            try {
                const response = await GetPokemonId(params.id)
                setPokemon(response)
            } catch (error) {
                navigation.goBack()
            }
        })()

    }, [params])
    if (!Pokemon) return null
    return (
        <ScrollView>
            <Header
                name={Pokemon.name}
                order={Pokemon.order}
                image={Pokemon.sprites.other['official-artwork'].front_default}
                type={Pokemon.types[0].type.name}
            />
            <Type types={Pokemon.types} />
            <Stats stats={Pokemon.stats} />
        </ScrollView>

    )
}
