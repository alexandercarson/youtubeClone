import React from 'react';

import Header from './components/Header';
import SideBar from './components/SideBar';
import RecomendedVideos from './components/RecomendedVideos';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__page">
        <SideBar />
        <RecomendedVideos />
      </div>
    </div>
  );
}

export default App;
