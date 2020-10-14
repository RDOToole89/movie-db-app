import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <Router>
      <div className="App">
        Hello World!
        {/* <Switch>
          <Route path="/discover" component={discoverMoviesPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/" component={HomePage} />
        </Switch> */}
      </div>
    </Router>
  );
}

export default App;
