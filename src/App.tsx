import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterManagement from './components/CounterManagement';
import MyPureComponent from './components/MyPureComponent';
import TrackClick from './components/TrackClick';
import Profile from './components/Profile';
import NewsFeed from './components/NewsFeed';

export const App: React.FC = () => {
  return (
    <>
      <h1>My App</h1>
      <Profile />
      <NewsFeed />
    </>
  );
}

export default App;
