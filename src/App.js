import React from "react";
import LandingPage from "./components/landingPage";
import DisplayQuestions from "./components/displayQuestions";
import ShowResults from "./components/showResults";
import NotFound from "./components/notFound";

import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/home" component={LandingPage} />
        <Route path="/quiz" component={DisplayQuestions} />
        <Route path="/showResults" component={ShowResults} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" exact to="/home" />
        <Redirect to="/not-found" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
