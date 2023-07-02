import { POKEMON_TOTAL } from "@/utils/Constants";

export default class Configuration {

    static PokemonURL = {
        FetchPokemon: {
            apiURL: `https://pokeapi.co/api/v2/pokemon/?limit=${POKEMON_TOTAL}`
        }
    }

}