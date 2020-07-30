import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import SideBar from './components/SideBar';
import RecomendedVideos from './components/RecomendedVideos';

import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/search/:searchTerm">
            <h1>Search Page</h1>
          </Route>
          <Route path="/">
            <div className="app__page">
              <SideBar />
              <RecomendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
