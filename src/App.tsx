import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterManagement from './components/CounterManagement';
import MyPureComponent from './components/MyPureComponent';
import TrackClick from './components/TrackClick';

export const App: React.FC = () => {
  return (
    <>
      <h1>My App</h1>
      <TrackClick />
    </>
  );
}

export default App;
