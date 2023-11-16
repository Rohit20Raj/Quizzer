import { useState } from 'react';
import End from './components/End';
import Quiz from './components/Quiz';
import Start from './components/Start';
import { QuizContext } from './helper/Context';
import image from './components/images/OIG.jpeg';

function App() {
  const [gameState, setGameState] = useState("start");
  const [score, setScore] = useState(0);
  const [quizName, setQuizName] = useState([]);
  return (
    <div className="App">
      <h1 className="heading container">
        <img className='logo' src={image} alt='Q' />
        <span>UIZZER</span>
      </h1>
      <QuizContext.Provider value={{ score, setScore, setGameState, quizName, setQuizName }}>
        {gameState === "start" && <Start />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "end" && <End />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
