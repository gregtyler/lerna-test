import React, { useState } from 'react';
import './App.css';
import { Pokemon } from 'apis';
import components from 'components';

const { Button } = components;

const pokemonAPI = new Pokemon();

function App() {
  const [name, setName] = useState('ditto');
  const [details, setDetails] = useState(null);

  const fetchPokemon = () => {
    pokemonAPI
    .get(name)
    .then(data => {
      setDetails(data);
    })
    .catch(() => {
      setDetails(null)
    });
  }

  return (
    <div className="App">
      <input type="text" value={name} onChange={e => setName(e.currentTarget.value)} />
      <Button onClick={fetchPokemon}>Hello</Button>

      {
        details
        ? <div>
            <h1>{ details.name }</h1>
            <img src={ details.sprites.front_default } alt={ details.name } />
          </div>
        : <div>Search for a Pokemon</div>
      }
    </div>
    );
  }

  export default App;
