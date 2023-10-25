import GameState from './GameState';
import React from 'react';

type Props = {
  gameState: GameState;
  onReset: () => void;
}

const Reset = ({ gameState, onReset }: Props) => {
  if (gameState === GameState.inProgress) {
    return null;
  }

  return (
    <button onClick={onReset} className="main-btn">Play Again</button>
  )
}

export default Reset