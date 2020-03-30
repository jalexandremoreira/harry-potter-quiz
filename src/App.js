import React from "react";
import DisplayQuestions from "./components/displayQuestions";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }}>Harry Potter Quizz</h1>
      <DisplayQuestions />
    </React.Fragment>
  );
}

export default App;
