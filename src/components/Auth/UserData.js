import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import useAuth from '../../hooks/useAuth'

export default function UserData() {

    const { auth, logout } = useAuth()
    console.log(auth)

    return (
        <View style={style.content}>
            <View style={style.titleBlock}>
                <Text style={style.title}>Bienvenido</Text>
                <Text style={style.title}>
                    {`${auth.firstname} ${auth.lastname}`}
                </Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    content: {
        marginHorizontal: 20,
        marginTop: 20
    },
    titleBlock: {
        marginBottom: 30
    },
    title: {
        fontWeight: 'bold',
        fontSize: 22
    },
})