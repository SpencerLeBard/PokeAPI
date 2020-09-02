export default class Pokemon {
    constructor(_id, name, front_default, weight, type) {
        this.id = _id,
            this.name = name,
            this.front_default = front_default,
            this.weight = weight,
            this.type = type
    }


    get Template() {
        return `
    <div class="card-body">
      <h4 class="card-title">${this.name}</h4>
      <p class="card-text">Components: ${this.type}</p>
      <p class="card-text">Range: ${this.weight}</p>
      <p class="card-text">Duration: ${this.front_default}</p>
      ${this.Button}
    </div>
    `
    }
    get Button() {
        if (this.id) {
            return `<button onclick="app.mySpellsController.removeSpell()" class="btn btn-danger">Remove</button>`
        }
        return `<button onclick="app.mySpellsController.addSpell()" class="btn btn-success">Add Spell</button>`
    }
} 
