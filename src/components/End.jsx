import React, { useContext } from 'react';
import { Questions } from '../quizQuesions';
import { QuizContext } from '../helper/Context';

function End() {
  const { score, setScore, setGameState } = useContext(QuizContext);
  const restart = () => {
    setScore(0);
    setGameState("start");
  }
  return (
    <>
      <div className="card container end">
        <div className="card-body final-score">
          <h5 className="card-title ">You got <span className='result'>{score}</span> out of <span className='result'>{Questions.length}</span> answers correct</h5>
          <button type="button" className="btn btn-primary" onClick={restart}>Start Over</button>
        </div>
      </div>
    </>
  )
}

export default End