import React from 'react'

const Square = (props) => {

  const handleClick = () => {
    props.handleGamePlay(props.index)
    // if (handleClick clicked once
    // then return stopping refresh.
  }

  return (
    <>
      <button className="square" onClick={handleClick} 
      disabled = {props.value === "❌" || props.value === "⭕️" }>
        {props.value}
      </button> 
     
    </> 
  ) 
}

export default Square
