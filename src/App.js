import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import AboutPage from "./pages/AboutPage";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
import MoviePage from "./pages/MoviePage";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar/NavBar";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBar exact={true} />
        </header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/home" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/discover/:imdbId" component={MoviePage} />
          <Route path="/discover" component={DiscoverMoviesPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
