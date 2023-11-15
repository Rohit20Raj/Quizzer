import { useState } from 'react';
import End from './components/End';
import Quiz from './components/Quiz';
import Start from './components/Start';
import { QuizContext } from './helper/Context';

function App() {
  const [gameState, setGameState] = useState("start");
  const [score, setScore] = useState(0);
  const [quizName, setQuizName] = useState([]);
  return (
    <div className="App">
      <h1 className="heading container"><img className='logo' src='./OIG.jpeg'/>UIZZER</h1>
      <QuizContext.Provider value={{ score, setScore, setGameState, quizName, setQuizName }}>
        {gameState === "start" && <Start />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "end" && <End />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
