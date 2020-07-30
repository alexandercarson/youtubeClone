import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import RecomendedVideos from "./components//Recomended/RecomendedVideos";
import SearchPage from "./components/Search/SearchPage";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/search/:searchTerm">
            <div className="app__page">
              <SideBar />
              <SearchPage />
            </div>
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
