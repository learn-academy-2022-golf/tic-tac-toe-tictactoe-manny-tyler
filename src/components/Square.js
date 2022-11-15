import React from 'react'

const Square = (props) => {

  const handleClick = () => {
    props.handleGamePlay(props.index) 
  }

  return (
    <>
      <button
        className="square"
        onClick={handleClick} 
        disabled={props.value === "❌" || props.value === "⭕️"}
      >
        {props.value}
      </button>
    </> 
  ) 
}

export default Square

// we were trying to disable the div after a winner has been declared, placed after the closing button tag on line 17
/* <div
className="square"
onClick={handleClick}
disabled={}
>
{props.value}
</div> */