const axios = require('axios');

class Pokemon {
    constructor(baseURL = 'https://pokeapi.co/api/v2') {
        this.baseURL = baseURL
    }

    get(name) {
        return axios
            .get(`${this.baseURL}/pokemon/${name}`)
            .then(r => r.data)
    }
}

module.exports = Pokemon
