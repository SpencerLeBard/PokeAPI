import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { PokeApi } from "./AxiosService.js"


class ApiPokemonService {
  async getAll() {
    let res = await PokeApi.get('')
    ProxyState.apiPokemon = res.data.results
  }
  async getDetails(index) {
    let res = await PokeApi.get(index)
    ProxyState.activePokemon = new Pokemon(res.data)
  }

}

const apiSpellsService = new ApiPokemonService()
export default apiSpellsService