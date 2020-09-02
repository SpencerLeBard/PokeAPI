import APIPokemonController from "./Controllers/APIpokemonController.js";
import myPokemonController from "./Controllers/MyPokemonController.js"

class App {
  myPokemonController = new myPokemonController();
  apiPokemonController = new APIPokemonController
}

window["app"] = new App();
