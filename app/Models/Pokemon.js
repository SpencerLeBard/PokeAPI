export default class Pokemon {
    constructor({ _id, name, weight, type, img, sprites }) {
        this.weight = weight
        this.id = _id
        this.name = name
        this.type = type
        this.img = img || sprites.front_default
    }


    get Template() {
        return `
    <div class="card-body">
      <h4 class="card-title">${this.name}</h4>
      <p class="card-text">Type ${this.type}</p>
      <p class="card-text">Weight: ${this.weight}</p>
      ${this.Button}
    </div>
    `
    }
    get Button() {
        if (this.id) {
            return `<button onclick="app.myPokemonController.removePokemon()" class="btn btn-danger">Remove</button>`
        }
        return `<button onclick="app.myPokemonController.addPokemon()" class="btn btn-success">Add Pokemon</button>`
    }
} 
