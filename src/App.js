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
    // console.log(updatedSquares)
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