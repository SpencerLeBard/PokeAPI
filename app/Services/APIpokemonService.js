import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { PokeApi } from "./AxiosService.js"


class APIPokemonService {
  async getAll() {
    let res = await PokeApi.get('')
    ProxyState.apiPokemon = res.data.results
  }
  async getDetails(name) {
    let res = await PokeApi.get(name)
    ProxyState.activePokemon = new Pokemon(res.data)
    console.log(res);
  }

}

const apiPokemonService = new APIPokemonService()
export default apiPokemonService