export const PokeApi = axios.create({
  baseURL: "https://www.pokeapi.co/api/v2/pokemon/",
  timeout: 5000
})

export const sandboxApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/spencer/pokemon",
  timeout: 5000
})