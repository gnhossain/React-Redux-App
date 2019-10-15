import React from 'react';
import logo from './logo.svg';
import './App.css';

import DogPictures from './components/DogPictures';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Open Source Dog Pictures</h1>
        <DogPictures/>
      </header>
    </div>
  );
}

export default App;
