exports.checkForWin = (moves, currentPlayer) => {
    let winner
    const data = moves.filter(m => m.player === currentPlayer).map(m => m.square)
    const wins = [
      [1,2,3],
      [4,5,6],
      [7,8,9],
      [1,4,7],
      [2,5,8],
      [3,6,9],
      [1,5,9],
      [3,5,7]
    ]
  
    
    wins.forEach(w => {
      if (w.every(x => data.includes(x))) {
        winner = true
        return true
      } else {
        return false
        winner = false
      }
      
    })
    return winner
  }