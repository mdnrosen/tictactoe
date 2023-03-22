import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { checkForWin } from './helpers'

function App(){
    const squares = Array.from(Array(9).keys())
    const [ status, setStatus ] = useState('Next player : X')
    const [ gameOver, setGameOver ] = useState(false)
    const [ currentPlayer, setCurrentPlayer ] = useState('O')

    const swap = (current) => current === 'X' ? 'O' : 'X'

    const [ moves, setMoves ] = useState([])


    const handleClick = (e, num) => {
      setMoves(moves => [...moves, { square: num, player: currentPlayer}])
      e.target.innerText = currentPlayer
    }


    const reset = () => {
        const sqs = document.querySelectorAll('.square')
        sqs.forEach(sq => sq.innerText = '')
        setMoves([])
        setCurrentPlayer('X')
        setGameOver(false)
    }

  

  const handleTie = () => {
    setGameOver(true)
    setStatus('Tie')
  }


  useEffect(() => {
    setStatus(`Next Player: ${currentPlayer}`)
  },[currentPlayer])


  useEffect(() => {
    let winner = (checkForWin(moves, currentPlayer))
    if (winner) {
      setStatus(`Winner: ${currentPlayer}`)
      setGameOver(true)
    } else {
      if (moves.length === 9) return handleTie()
      
      setCurrentPlayer(swap(currentPlayer))
    }
  },[moves])

    return (
      <>
        <div className="status">{status}</div>
        <div className="board">
          {squares.map((sq, i) =>
            <button 
              disabled={gameOver}
              onClick={(e) => handleClick(e, i + 1)} 
              className="square"></button>
          )}
        </div>
        {gameOver ? <button onClick={reset}>Reset</button> : null}
      </>
    )
}
export default App