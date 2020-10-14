import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import AboutPage from "./pages/DiscoverMoviesPage";
import discoverMoviesPage from "./pages/DiscoverMoviesPage";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar/NavBar";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="App">
        Hello World!
        <NavBar />
        <Switch>
          <Route path="/discover" component={discoverMoviesPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
