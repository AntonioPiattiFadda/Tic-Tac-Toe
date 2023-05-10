import { useState } from 'react';
import './App.css';
import Board from './components/Board/Board';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';
import Turn from './components/Turnero/Turn';
import confetti from 'canvas-confetti';

const winningPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const App = () => {
  const [turn, setTurn] = useState('X');
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [winningSquares, setWinningSquares] = useState([]);
  const [score, setScore] = useState({
    X: 0,
    O: 0,
  });

  const checkForWinner = (newSquares) => {
    for (let i = 0; i < winningPositions.length; i++) {
      const [a, b, c] = winningPositions[i];
      if (
        newSquares[a] &&
        newSquares[a] === newSquares[b] &&
        newSquares[a] === newSquares[c]
      ) {
        endGame(newSquares[a], winningPositions[i]);

        return;
      }
    }

    if (!newSquares.includes(null)) {
      endGame(null, Array.from(Array(9).keys()));
      return;
    }
    setTurn(turn === 'X' ? 'O' : 'X');
  };

  const endGame = (result, winningPositions) => {
    setTurn(null);
    if (result !== null) {
      setScore({
        ...score,
        [result]: score[result] + 1,
      });
      confetti();
    }
    setWinningSquares(winningPositions);

    setTimeout(() => {
      reset();
    }, 3000);
  };

  const reset = () => {
    setTurn('X');
    setSquares(Array(9).fill(null));
    setWinningSquares([]);
  };
  const hardReset = () => {
    setTurn('X');
    setSquares(Array(9).fill(null));
    setWinningSquares([]);
    setScore({
      X: 0,
      O: 0,
    });
  };

  const handleClick = (value) => {
    let newArray = [...squares];
    newArray.splice(value, 1, turn);
    setSquares(newArray);
    checkForWinner(newArray);
  };

  return (
    <div className="container">
      <h1>TIC TAC TOE</h1>
      <Turn turn={turn} />
      <Board
        onClick={handleClick}
        squares={squares}
        turn={turn}
        winningSquares={winningSquares}
      />
      <ScoreBoard score={score} />
      <button className="button" onClick={hardReset}>
        Restart Game
      </button>
    </div>
  );
};

export default App;
