import { ProxyState } from "../AppState.js";
import apiPokemonService from "../Services/apiPokemonService.js";

function _drawApiPokemon() {
  let pokemon = ProxyState.apiPokemon
  let template = ''
  pokemon.forEach(p => template += `<li onclick="app.apiPokemonController.getDetails('${p.name}')">${p.name}</li>`)
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