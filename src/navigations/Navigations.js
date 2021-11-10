import React from 'react'
import { Image } from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5';
import FavoritesStack from './FavoritesStack'
import PokedexStack from './PokedexStack';
import AccountStack from './AccountStack';

export default function Navigations() {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="favorite"
                component={FavoritesStack}
                options={{
                    tabBarLabel: 'favoritos',
                    tabBarIcon: ({ color, size }) =>
                        (<Icon name="heart" color={color} size={size} />),
                }} />
            <Tab.Screen
                name="pokedex"
                component={PokedexStack}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: () => PokeballImagen(),
                }} />
            <Tab.Screen
                name="account"
                component={AccountStack}
                options={{
                    tabBarLabel: 'perfil',
                    tabBarIcon: ({ color, size }) =>
                        (<Icon name="user" color={color} size={size} />),
                }} />
        </Tab.Navigator>
    )
}

function PokeballImagen() {
    return (
        <Image
            source={require("../assets/pokeball.png")}
            style={{ width: 65, height: 65, top: -15 }}
        />
    )
}