import { ProxyState } from "../AppState.js";
import myPokemonService from "../Services/MyPokemonService.js";


function _drawActivePokemon() {
  let elem = document.getElementById("active-pokemon")
  if (ProxyState.activePokemon) {
    elem.innerHTML = ProxyState.activePokemon.Template
  } else {
    elem.innerHTML = ""
  }
}

function _drawMyPokemon() {
  let pokemon = ProxyState.myPokemon
  let template = ''
  pokemon.forEach(s => template += `<li onclick="app.myPokemonController.setActive('${s.id}')">${s.name}</li>`)
  document.getElementById('my-pokemon').innerHTML = template
}

export default class myPokemonController {
  constructor() {
    ProxyState.on("activePokemon", _drawActivePokemon)
    ProxyState.on("myPokemon", _drawMyPokemon)
    this.getMyPokemon();
  }
  getMyPokemon() {
    try {
      myPokemonService.getMyPokemon();
    } catch (error) {
      console.error(error)
    }
  }

  setActive(id) {
    myPokemonService.setActive(id)
  }

  addPokemon() {
    try {
      myPokemonService.addPokemon()
    } catch (error) {
      console.error(error)
    }
  }

  removePokemon() {
    try {
      myPokemonService.removePokemon()
    } catch (error) {
      console.error(error)
    }
  }
}