import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [counter, setCounter] = useState(1)

  const handleGamePlay = (index) => {
    let updatedSquares = [...squares]
    if (counter % 2 !== 0) {
      updatedSquares[index] = "❌"
      setSquares(updatedSquares)
      setCounter(counter + 1)
    } else {
      updatedSquares[index] = "⭕️"
      setSquares(updatedSquares)
      setCounter(counter + 1)
    } 
        if (updatedSquares[0] === "❌" && updatedSquares[1] === "❌" && updatedSquares[2] === "❌") {
          return alert("YOU WIN!")
        }
        else if(updatedSquares[3] === "❌" && updatedSquares[4] === "❌" && updatedSquares[5] === "❌") {
          return alert("YOU WIN!")
        }
        else if (updatedSquares[6] === "❌" && updatedSquares[7] === "❌" && updatedSquares[8] === "❌") {
          return alert("YOU WIN!")
        }
        else if (updatedSquares[0] === "❌" && updatedSquares[3] === "❌" && updatedSquares[6] === "❌") {
          return alert("YOU WIN!")
        }
        else if (updatedSquares[1] === "❌" && updatedSquares[4] === "❌" && updatedSquares[7] === "❌") {
          return alert("YOU WIN!")
        }
        else if (updatedSquares[2] === "❌" && updatedSquares[5] === "❌" && updatedSquares[8] === "❌") {
          return alert("YOU WIN!")
        }
        else if (updatedSquares[0] === "❌" && updatedSquares[4] === "❌" && updatedSquares[8] === "❌") {
          return alert("YOU WIN!")
        }
        else if (updatedSquares[2] === "❌" && updatedSquares[4] === "❌" && updatedSquares[6] === "❌") {
          return alert("YOU WIN!")
        }

        else if (updatedSquares[0] === "⭕️" && updatedSquares[1] === "⭕️" && updatedSquares[2] === "⭕️") {
          return alert("YOU WIN!")
        }
        else if(updatedSquares[3] === "⭕️" && updatedSquares[4] === "⭕️" && updatedSquares[5] === "⭕️") {
          return alert("YOU WIN!")
        }
        else if (updatedSquares[6] === "⭕️" && updatedSquares[7] === "⭕️" && updatedSquares[8] === "⭕️") {
          return alert("YOU WIN!")
        }
        else if (updatedSquares[0] === "⭕️" && updatedSquares[3] === "⭕️" && updatedSquares[6] === "⭕️") {
          return alert("YOU WIN!")
        }
        else if (updatedSquares[1] === "⭕️" && updatedSquares[4] === "⭕️" && updatedSquares[7] === "⭕️") {
          return alert("YOU WIN!")
        }
        else if (updatedSquares[2] === "⭕️" && updatedSquares[5] === "⭕️" && updatedSquares[8] === "⭕️") {
          return alert("YOU WIN!")
        }
        else if (updatedSquares[0] === "⭕️" && updatedSquares[4] === "⭕️" && updatedSquares[8] === "⭕️") {
          return alert("YOU WIN!")
        }
        else if (updatedSquares[2] === "⭕️" && updatedSquares[4] === "⭕️" && updatedSquares[6] === "⭕️") {
          return alert("YOU WIN!")
        }
        
           

    
  } 
  

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="gameboard">
        {squares.map((value, index) => {
          return (
            <Square
              value={value}
              key={index}
              index={index}
              handleGamePlay={handleGamePlay}
            />
          )
        })}
      </div>
    </>
  )
}

export default App