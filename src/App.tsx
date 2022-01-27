import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button/index';

function App() {
  return (
    <div className="App">
      <Button type='primary'>primary</Button>
      <Button>Default</Button>
    </div>
  );
}

export default App;
