import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../helper/Context';


function Start() {
  const { setGameState } = useContext(QuizContext);
  return (
    <>
      <h1 className="heading container">QUIZZER</h1>
      <div className='start container'>
        <div className="card mx-1 my-2">
          <img src='./assets/the-avengers.jpg' className="card-img-top" alt="avengers-logo" />
          <div className="card-body">
            <h5 className="card-title">Avengers Quiz</h5>
            <p className="card-text">MCU fans, assemble! If you love all things Avengers and have seen every Marvel Studios flick and series on Disney+ more than once, then this trivia quiz is just for you.</p>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            <button type="button" className="btn btn-primary" onClick={() => setGameState("quiz")}>Start Quiz</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Start