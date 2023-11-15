import { useState } from 'react';
import End from './components/End';
import Quiz from './components/Quiz';
import Start from './components/Start';
import { QuizContext } from './helper/Context';

function App() {
  const [gameState, setGameState] = useState("start");
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <QuizContext.Provider value={{score, setScore, setGameState}}>
        {gameState === "start" && <Start/>}
        {gameState === "quiz" && <Quiz/>}
        {gameState === "end" && <End/>}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
