export const PokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon/",
  timeout: 5000
})

export const sandboxApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/spencer/pokemon",
  timeout: 5000
})

// when you are going to query the pokeApi to get your active pokemon, your baseURL in axiosService should look something like
// //pokeapi.co/api/v2

// you will need to take the limit param off in the axios service, if you want to limit you can add it back on in your get all
// api.get("/pokemon?limit=1050")

// your getOne will end up looking something like
// api.get("/pokemon/bulbasaur")