import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../helper/Context';
import {Category} from '../quiz'

function Start() {
  const { setGameState, setQuizName } = useContext(QuizContext);
  const handleClick = (quiz) => {
    setQuizName(quiz.quiz);
    document.title = quiz.title+" Quiz";
    setGameState("quiz");
  }
  return (
    <>
      <div className='start container'>
        {Category.map(cat => {
          return (
            <div className="card mx-1 my-2">
              <img src={cat.poster} className="card-img-top poster" alt="quiz-poster" />
              <div className="card-body">
                <h5 className="card-title">{cat.title}</h5>
                {/* <p className="card-text">{cat.description}</p> */}
                <button type="button" className="btn btn-primary" onClick={()=>handleClick(cat)}>Start Quiz</button>
              </div>
            </div>

          )
        })}
      </div>
    </>
  )
}

export default Start