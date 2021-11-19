import React from 'react'
import { View, } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Login from '../components/Auth/Login'
import UserData from '../components/Auth/UserData'
import useAuth from '../hooks/useAuth'

export default function Account() {
    const { auth } = useAuth()

    return <View>{auth ? <UserData /> : <Login />}</View>

}
