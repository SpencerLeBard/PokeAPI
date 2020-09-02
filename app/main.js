import APIPokemonController from "./Controllers/APIpokemonController.js";
import MyPokemonController from "./Controllers/MyPokemonController.js"

class App {
  myPokemonController = new MyPokemonController();
  apiPokemonController = new APIPokemonController();
}

window["app"] = new App();
