import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Favorites from '../screens/Favorites';
import Pokemon from '../screens/Pokemon'
export default function FavoritesStack() {

    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="favorite" component={Favorites} options={{
                title: 'Favoritos'
            }} />
            <Stack.Screen name="pokemon" component={Pokemon} options={{
                title: '',
                headerTransparent: true,
            }} />
        </Stack.Navigator>
    )
}
