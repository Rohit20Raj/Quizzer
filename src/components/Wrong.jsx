import React from 'react'

function Wrong(props) {
  return (
    <>
      <h4 className='wrong mt-4'>Wrong Answer <br/> Correct answer is {props.ans}</h4>
    </>
  )
}

export default Wrong