import GameState from './GameState';

type Props = {
  gameState: GameState;
  onReset: () => void;
}

const Reset = ({ gameState, onReset }: Props) => {
  if (gameState === GameState.inProgress) {
    return null;
  }

  return (
    <button onClick={onReset} className='reset-btn'>Play Again</button>
  )
}

export default Reset