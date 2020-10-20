import React, { useEffect, useState } from 'react';
import './App.css';
import { gameSubject, initGame, resetGame } from './components/Game';
import {Board} from './components/Board';

export const App = () => {

  const [board, setBoard] = useState([]);
  const [isGameOver, setIsGameOver] = useState();
  const [result, setResult] = useState();
  const [turn, setTurn] = useState();

  useEffect(() => {
    initGame();
    const subscribe = gameSubject.subscribe((game) => {
      setBoard(game.board)
      setIsGameOver(game.isGameOver)
      setResult(game.result)
      setTurn(game.turn)
    });
    return () => subscribe.unsubscribe()
  }, []);

  return (
    <>
      <div className="newGame"><span className="newGame-text" onClick={resetGame}>NEW GAME</span></div>
      <div className="container">
        {isGameOver && (
          <h2 className="vertical-text">
            GAME OVER
          </h2>
        )}
        <div className="board-container">
          <Board board={board} turn={turn} />
        </div>
        {result && <p className="vertical-text">{result}</p>}
      </div>
    </>
  )
}
