import "./App.css";
import React, { useState, useContext } from "react";
import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";

import { QuizContext } from "./Helpers/Context";

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0)
  return (
    <div className="App">
      <h1>Qui App</h1>
      <QuizContext.Provider value={{gameState, setGameState , score , setScore }}>
       
       
        {/* creating global state so that it can be used anywhere */}
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endscreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
