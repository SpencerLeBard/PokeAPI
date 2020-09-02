import { ProxyState } from "../AppState.js";
import APIPokemonService from "../Services/APIPokemonService.js";

function _drawApiPokemon() {
  let pokemon = ProxyState.apiPokemon
  let template = ''
  pokemon.forEach(s => template += `<li onclick="app.apiPokemonController.getDetails('${s.index}')">${s.name}</li>`)
  document.getElementById('api-pokemon').innerHTML = template
}

export default class APIPokemonController {
  constructor() {
    ProxyState.on("apiPokemon", _drawApiPokemon)
    this.getAllApiPokemon()
  }

  getAllApiPokemon() {
    try {
      APIPokemonService.getAll()
    } catch (error) {
      console.error(error)
    }
  }

  getDetails(index) {
    try {
      APIPokemonService.getDetails(index)
    } catch (error) {
      console.error(error)
    }
  }
}