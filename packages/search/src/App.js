import React, { useState } from 'react';
import './App.css';
import { Pokemon } from 'apis';
import components from 'components';

const { Button } = components;

const pokemonAPI = new Pokemon();

function App() {
  const [details, setDetails] = useState(null);

  const fetchPokemon = () => {
    pokemonAPI
      .get('ditto')
      .then(data => {
          setDetails(data);
      });
  }

  return (
    <div className="App">
      <Button onClick={fetchPokemon}>Hello</Button>

      {
        details
          ? <div>
              <h1>{ details.name }</h1>
              <img src={ details.sprites.front_default } alt={ details.name } />
          </div>
          : <div>Press button to load data</div>
      }
    </div>
  );
}

export default App;
