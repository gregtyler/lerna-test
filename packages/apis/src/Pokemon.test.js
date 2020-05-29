const { pactWith } = require("jest-pact")
const { Matchers } = require("@pact-foundation/pact")
const Pokemon = require('./Pokemon')


pactWith({ consumer: "apis", provider: "PokeAPI" }, provider => {
    let pokemonAPI

    beforeEach(() => {
        pokemonAPI = new Pokemon(provider.mockService.baseUrl)
    })

    describe('get function', () => {
        it('is function', () => {
            expect(pokemonAPI.get).toBeInstanceOf(Function)
        })

        it('calls the PokeAPI', () => {
            provider.addInteraction({
                state: "i have a list of pokemon",
                uponReceiving: "a request for a pokemon",
                withRequest: {
                    method: "GET",
                    path: "/pokemon/bulbasaur",
                },
                willRespondWith: {
                    status: 200,
                    headers: { "Content-Type": "application/json" },
                    body: {
                        id: Matchers.integer(1),
                        name: Matchers.like('bulbasaur')
                    },
                },
            })

            return pokemonAPI
                .get('bulbasaur')
                .then(data => {
                    expect(data.id).toEqual(1);
                    expect(data.name).toEqual('bulbasaur')
                });
        })
    })
});
