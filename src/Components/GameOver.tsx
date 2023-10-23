import GameState from "./GameState"
import React from 'react';

type Props = {
    gameState: any;
}

function GameOver({ gameState }: Props) {
    switch (gameState) {
        case GameState.inProgress:
            return <></>;
        case GameState.firstUserWins:
            return <div className="game-over">X WINS</div>;
        case GameState.secondeUserWins:
            return <div className="game-over">O WINS</div>;
        case GameState.draw:
            return <div className="game-over">Draw</div>;
        default:
            return <></>;
    }
}

export default GameOver