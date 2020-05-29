const Pokemon = {
    get(name) {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(r => r.json())
    }
}

module.exports = { Pokemon }
