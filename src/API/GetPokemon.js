import { API } from '../tools/Api'

export async function GetPokemon() {
    try {
        const URL = `${API}/pokemon?limit=20&offset=0`
        const response = await fetch(URL)
        const result = await response.json()
        return result
    } catch (error) {
        throw error
    }
}

export async function GetPokemonDetailsByApi(url) {
    try {
        const response = await fetch(url)
        const result = await response.json()
        return result
    } catch (error) {
        throw error
    }
}