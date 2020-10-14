import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import AboutPage from "./pages/AboutPage";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar/NavBar";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          Hello World!
          <NavBar exact={true} />
        </header>
        <Switch>
          <Route path="/discover" component={DiscoverMoviesPage} />
          <Route path="/about" component={AboutPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
