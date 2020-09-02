import { ProxyState } from "../AppState.js";
import apiPokemonService from "../Services/apiPokemonService.js";

function _drawApiPokemon() {
  let pokemon = ProxyState.apiPokemon
  let template = ''
  pokemon.forEach(s => template += `<li onclick="app.APIPokemonController.getDetails('${s.index}')">${s.name}</li>`)
  document.getElementById('api-pokemon').innerHTML = template
}

export default class APIPokemonController {
  constructor() {
    ProxyState.on("apiPokemon", _drawApiPokemon)
    this.getAllApiPokemon()
  }

  getAllApiPokemon() {
    try {
      apiPokemonService.getAll()
    } catch (error) {
      console.error(error)
    }
  }

  getDetails(name) {
    try {
      apiPokemonService.getDetails(name)
    } catch (error) {
      console.error(error)
    }
  }
}