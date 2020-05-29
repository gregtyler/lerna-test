class Pokemon {
    constructor(baseURL = 'https://pokeapi.co/api/v2') {
        this.baseURL = baseURL
    }

    get(name) {
        return fetch(`${this.baseURL}/pokemon/${name}`)
            .then(r => r.json())
    }
}           

module.exports = Pokemon
