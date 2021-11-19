import React, { useState } from 'react'
import { View, Text, TextInput, Keyboard, StyleSheet, Button } from 'react-native'
import { useFormik } from 'formik'

import { user, details } from '../../tools/UserDB'
import * as Yup from 'yup'
import useAuth from '../../hooks/useAuth'

export default function Login() {
    const [errorU, setError] = useState("")
    const { login } = useAuth()
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: (data) => {
            setError("")
            const { username, password } = data

            if (username !== user.username || password !== user.password) {
                setError("El usuario o contraseña son incorrectos")
            } else {
                login(details)
            }
        },

    })
    return (
        <View>
            <Text style={style.title}>Iniciar Sesion</Text>
            <TextInput
                placeholder="Nombre de usuario"
                style={style.input}
                autoCapitalize="none"
                value={formik.values.username}
                onChangeText={(text) => formik.setFieldValue("username", text)}
            />
            <TextInput
                placeholder="Contraseña"
                style={style.input}
                autoCapitalize="none"
                secureTextEntry={true}
                value={formik.values.password}
                onChangeText={(text) => formik.setFieldValue("password", text)}
            />
            <Button title="entrar" onPress={formik.handleSubmit} />

            <Text style={style.errors}>{formik.errors.username}</Text>
            <Text style={style.errors}>{formik.errors.password}</Text>
            <Text style={style.errors}>{errorU}</Text>
        </View>
    )
}

function initialValues() {
    return {
        username: "",
        password: ""
    }
}
function validationSchema() {
    return {
        username: Yup.string().required("Username es obligatiorio"),
        password: Yup.string().required("Password requerido")
    }
}

const style = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 58,
        marginBottom: 15
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
    errors: {
        textAlign: 'center',
        color: '#f00',
        marginTop: 2
    }
})