import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Pokedex from '../screens/Pokedex';
import Pokemon from '../screens/Pokemon';

export default function PokedexStack() {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="pokedex" component={Pokedex} options={{
                headerShown: false
            }} />
            <Stack.Screen name="pokemon" component={Pokemon} options={{
                title: '',
                headerTransparent: true
            }} />
        </Stack.Navigator>
    )
}
